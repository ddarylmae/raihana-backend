const express = require('express');
const nodemailer = require('nodemailer');

var app = express();

app.get('/', function () {
    sendEmailNotification('test@email.com');
});

function sendEmailNotification(receiverEmail) {
    let sender = 'smtps://email%40gmail.com';
    console.log('Email notif');
}

app.listen(3000);