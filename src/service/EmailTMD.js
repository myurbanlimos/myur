import nodemailer from "nodemailer";




const transporter = nodemailer.createTransport({
    host: "mail.myurbanlimos.com",
    port: 465,
    secure: true,
    auth: {
        user: "contact@myurbanlimos.com",
        pass: "Izhaan1202*1"
    }
});

const mailOptions = {
    from: "contact@myurbanlimos.com",
    to: "mrtecnical13@gmail.com",
    subject: "Booking Confirm",
    text: "hello",
};

function SendEmail(res, resreservations) {

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json("Error:", error);
        } else {
             res.json("Email sent:", info.response);
        }
    });

}


/*

   text: `
Dear [Client Name],

Thank you for choosing My Urban Limos for your upcoming ride.
We’ve successfully received your booking, and our team is getting everything ready for your journey.

Here are your booking details:

Pickup Location: [Pickup Address]
Drop-off Location: [Drop-off Address]
Date & Time: [Booking Date & Time]
Vehicle Type: [Vehicle Name or Category]

Round Trip

Pickup Location: [Pickup Address]
Drop-off Location: [Drop-off Address]
Date & Time: [Booking Date & Time]
Vehicle Type: [Vehicle Name or Category]

Booking ID: [Unique Booking ID]
Your Email ID: [Unique Booking ID]
Your Ph No: [Unique Booking ID]

Our professional chauffeur will arrive 10–15 minutes before your scheduled pickup time to ensure a smooth and punctual experience.

If you need to make any changes to your booking or have special requests, please contact us:
📞 [+1 973-388-8200]
📧 [Booking@myurbanlimos.com]

We truly appreciate your trust in My Urban Limos and look forward to providing you with a comfortable and luxurious ride.
Thank you once again for choosing [My Urban Limos]

Best regards,
The My Urban Limos Team
🌐 https://www.myurbanlimos.com

📍 New Jersey, USA
       `,
       html: `
       <div style="background: red">
         hh

       </div>
       `

*/



export { SendEmail }