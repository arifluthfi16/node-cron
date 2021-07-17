const express = require('express');
const cron = require('node-cron');
const sendMail = require('./mail');

const app = express();

cron.schedule('*/3 * * * *', () => {
  console.log("Sending Email Every 3 Minutes")
  sendMail();
});

app.listen(3000, ()=>{
  console.log(`App listening on port 3000`)
})
