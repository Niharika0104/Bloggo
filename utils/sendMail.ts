import nodemailer from 'nodemailer';

async function sendEmail(senderEmail: string, receiverEmail: string, title: string, text: string, token: string) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: senderEmail,
            pass: process.env.GOOGLE_APP_PASSWORD,
        },
    });

    let mailOptions = {
        from: senderEmail,
        to: receiverEmail,
        subject: title,
        text: text,
        html: `
            <div style="display: flex; height: 100vh; width: 100vw; justify-content: center; align-items: center;">
                <div style="width: 80%; max-width: 25%; margin: auto; text-align: center;">
                    <div style="display: flex; justify-content: center; align-items: center; height: 128px; width: 128px; background-color: white; border: 4px solid #4F46E5; border-radius: 50%; margin: auto;">
                        <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/lock-open.svg" alt="Open Lock" style="height: 40px; color: #4F46E5;" />
                    </div>
                    <h1 style="font-weight: bold; font-size: 2.5rem; text-align: center; margin: 20px 0;">Reset your password</h1>
                    <h5 style="font-weight: 500; font-size: 1rem; text-align: center; margin: 20px 0;">Click below to reset your password.</h5>
                    <div style="display: flex; justify-content: center; margin-top: 20px;">
                        <a href="${process.env.FRONTEND_URL}/auth/reset?token=${token}" style="display: inline-block; width: 100%; text-align: center; height: 40px; background-color: #4F46E5; color: white; border-radius: 5px; line-height: 40px; text-decoration: none;">Reset Password</a>
                    </div>
                </div>
            </div>
        `,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

export default sendEmail;
