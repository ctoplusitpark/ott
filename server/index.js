// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await axios.post('https://api.indrajala.in/api/user/login', {
      email,
      password,
    });

    if (response.status === 200) {
      res.status(200).json(response.data); // Sending back the token
    } else {
      res.status(response.status).json({ message: 'Login failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

