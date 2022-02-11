import mongoose from 'mongoose';

export const RandomMessage = mongoose.model('RandomMessage', {
	message: {
		type: String,
		required: true,
		maxlength: 140,
	},
	addedBy: {
		type: String,
		required: true,
		maxlength: 140,
	},
	createdAt: {
		type: Date,
	},
});
