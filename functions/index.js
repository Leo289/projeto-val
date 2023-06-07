// index.js
const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const nodemailer = require('nodemailer');

exports.sendEmailConfirmation = functions.firestore.document('feedback/{id}')
    .onCreate((snap, context) => {
        const newValue = snap.data();
        const email = newValue.email;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'seu-email@gmail.com',
                pass: 'sua-senha'
            }
        });

        const mailOptions = {
            from: 'seu-email@gmail.com',
            to: email,
            subject: 'Agradecemos pelo feedback!',
            text: 'Agradecemos por dedicar um tempo para fornecer seu feedback. Sua opinião é muito importante para nós.'
        };

        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });
    });


    /* Lembre-se de substituir 'seu-email@gmail.com' e 'sua-senha' com as informações reais da conta
    de email que você deseja usar para enviar esses emails.

Importante: Esta forma de autenticação com o serviço de email não é segura,
porque expõe diretamente suas credenciais de login no código. Para melhorar a segurança,
você deve considerar o uso de variáveis de ambiente para armazenar essas credenciais,
ou usar a API Secret Manager do Firebase.
A biblioteca nodemailer também oferece outras opções de autenticação, como OAuth2.
Consulte a documentação do nodemailer para mais informações sobre as opções de autenticação.
 */
