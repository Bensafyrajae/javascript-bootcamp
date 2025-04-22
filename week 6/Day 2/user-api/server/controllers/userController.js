const models = require("../models/userModel");

const registerUser = (req,res) => {
    const { email, username, first_name, last_name, password } = req.body;
    models
      .registerUser(email, username, first_name, last_name, password)
      .then((newUser) => res.send(newUser))
      .catch((err) => res.send("Error: " + err));
}

// ========================

const loginUser = (req,res) => {
  const { username, password} = req.body;

  models
    .loginUser(username)
    .then((data) => {
      if (data.length > 0) {
        const user = data[0];
        if (bcrypt.compareSync(password, user.password)) {
          res.send(`Welcome ${user.username}`);
        } else {
          res.send("Wrong info");
        }
      } else {
        res.send(`User ${username} not found`);
      }
    })
    .catch((err) => {
      console.error(err);
      res.send("Login failed, try again later");
    });
};

// ========================

const getAllUsers = (req,res) => {
    models.getAllUsers().then((users) => {
        res.send(users)
    }).catch((err) => {
        console.log(err);
    })
}

// ========================

const getUserById = (req,res) => {
    const userId = req.params.id;
  models.getUserById(userId)
    .then((user) => {
      user.length > 0 ? res.send(user) : res.send("User not found");
    })
    .catch((err) => {
      console.log(err);
    });
};

// ========================

const updateUser = (req,res) => {
    const userId = req.params.id;
    const { email, username, first_name, last_name, password } = req.body;
  models
    .updateUser(userId, email, username, first_name, last_name, password)
    .then((user) => {
      res.send("User updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
};