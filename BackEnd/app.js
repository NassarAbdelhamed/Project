const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('./models/user.model.js')
const app = express()
const saltRounds = 10;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.post('/addusser', async (req, res) => {
  try {
    const userParam = req.body;
    if (await Users.findOne({ email: userParam.email })) {
      res.status(500).send('email"' + userParam.email + '"is already exists');
    }
    const hashedPassword = await bcrypt.hash(userParam.password, saltRounds);
    userParam.password = hashedPassword;

    const user = new Users(userParam);
    await user.save();
    res.status(200).json({ masage: 'user added successfully' })
  }
  catch (err) {
    res.status(500).json({ masage: ' error failed to add' })
  }
}
);


app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email' });
    }

    const passwordMatch = await bcrypt.compare(String(password), user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to log in' });
  }
});



mongoose.connect('')  //mongodb://127.0.0.1:27017/connection_name
  .then(() => {
    console.log('connected to mongoDB')
    app.listen(8000, () => console.log('app started on port 8000'))
  }).catch((error) => {
    console.log("can't connect to mongoDB ");
  })
