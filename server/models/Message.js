import mongoose from 'mongoose';

export const Message = mongoose.model('Message', {
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
		default: Date.now,
	},
});
