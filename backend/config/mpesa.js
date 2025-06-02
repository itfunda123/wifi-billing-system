// backend/config/mpesa.js
const axios = require('axios');
require('dotenv').config();

const getToken = async () => {
  const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString('base64');
  const res = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
    headers: {
      Authorization: `Basic ${auth}`
    }
  });
  return res.data.access_token;
};

module.exports = { getToken };
