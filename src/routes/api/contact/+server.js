import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import { SECRET_USER, SECRET_PASS } from '$env/static/private';

export async function POST({ request }) {
	const { name, email, message } = await request.json();
	const content = `name: ${name} \n email: ${email} \n message: ${message} `;

	const transporter = nodemailer.createTransport({
		host: 'mail.privateemail.com',
		port: 465,
		secure: true,
		auth: {
			user: SECRET_USER,
			pass: SECRET_PASS
		},
		debug: true,
		logger: true
	});

	const mailForReciever = {
		from: {
			name: name,
			address: SECRET_USER
		},
		to: SECRET_USER, // Change to email address that you want to receive messages on
		subject: 'seanred.io: New Message from Contact Form',
		text: content
	};

	const mailForSender = {
		from: SECRET_USER,
		to: email,
		subject: 'Thank you for contacting Sean Redmon',
		text: `Thank you for contacting me! I will get back to you as soon as possible. \n\nForm details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
	};

	try {
		await transporter.sendMail(mailForReciever);
	} catch (err) {
		return json({ message: 'error: failed to send email to receiver' }, { status: 500 });
	}

	try {
		await transporter.sendMail(mailForSender);
		return json({ message: 'success: sent email to sender and receiver' }, { status: 200 });
	} catch (err) {
		return json({ message: 'error: failed to send email to sender' }, { status: 500 });
	}
}
