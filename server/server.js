import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
require('dotenv').config();
import { Message } from './models/Message';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/hit-and-miss';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());

app.get('/', async (req, res) => {
	// const resPerPage = 20; // results per page
	const { page } = req.query || 1; // Page
	Message.find((err, messages) => {
		if (err) {
			console.log(err);
			res.status(404).json({ error: 'Not found' });
		} else {
			res.json(messages);
		}
	})
		// .skip(resPerPage * page - resPerPage)
		.sort({ createdAt: 'desc' });
	// .limit(resPerPage);
});

// app.post('/', async (req, res) => {
// 	try {
// 		const message = new Message({
// 			message: req.body.message,
// 			addedBy: req.body.addedBy,
// 		});
// 		await message.save();
// 		res.json(message);
// 	} catch (err) {
// 		res.status(400).json({
// 			errors: err.errors,
// 			message: 'Cannot add new message',
// 			addedBy: 'Cannot add name',
// 		});
// 	}
// });

app.post('/', function (req, res, next) {
	const message = new Message({
		message: req.body.message,
		addedBy: req.body.addedBy,
	});
	message.save((err, message) => {
		if (err) {
			return next(err);
		}
		res.status(201).json(message);
	});
});

app.delete('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const remove = await Message.findByIdAndDelete(id);
		res.status(201).json(remove);
	} catch (err) {
		res.status(400).json({
			message: 'Cannot delete',
			errors: err.errors,
		});
	}
});

app.delete('/', async (req, res) => {
	try {
		const remove = await Message.deleteMany();
		res.status(201).json(remove);
	} catch (err) {
		res.status(400).json({
			message: 'Cannot delete',
			errors: err.errors,
		});
	}
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
