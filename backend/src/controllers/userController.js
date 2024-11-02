const User = require('../models/user');

// Kullanıcı kayıt fonksiyonu
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

// Kullanıcı giriş fonksiyonu
const loginUser = async (req, res) => {
  // Giriş işlemi burada yapılacak
};

module.exports = { registerUser, loginUser };
