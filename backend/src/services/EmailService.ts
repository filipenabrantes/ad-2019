interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
}

class EmailService {
    sendMail(to: IMailTo, message: IMailMessage) {
        console.log("email enviado");

    }
}

export default EmailService;