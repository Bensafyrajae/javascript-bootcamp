const db = require("../config/db");
const bcrypt = require("bcrypt");

const registerUser = (email, username, first_name, last_name, password) => {
  return db.transaction((trx) => {
    return trx("users")
    .insert({ email, username, first_name, last_name })
    .returning("id")
    .then((id) => {
        const userId = id[0];

        // hash password
        const hashPass = bcrypt.hashSync(password, 10);

        return trx("hashpwd").insert({
          username: username,
          password: hashPass
        })
        .then(function(){
            trx.commit();
        })
        .catch((err) => {
            trx.rollback();
            throw err;
        });
    });
  });
};

// ================================

const loginUser = (username, hashPass) => {
  return db("hashpwd").where({ username });
};

// ================================

const getAllUsers = () => {
  return db.select().from("users");
};

// ================================

const getUserById = (userId) => {
  return db.select().from("users").where("id", userId);
};

// ================================

const updateUser = (id, email, username, first_name, last_name, password) => {
  return db.transaction( async (trx) => {
    try {
        await trx("users")
            .where({id})
            .update({ email, username, first_name, last_name });
        
        if (password) {
            const hashPass = bcrypt.hashSync(password, 10);
            await trx("hashpwd")
                .where({ username: username })
                .update({
                    username: username,
                    password: hashPass,
                });
        }

        await trx.commit();

    } catch(err) {
        await trx.rollback();
        throw err;
    }      
  });  
};

            
module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser
};

// ======== SQL used 

// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     email VARCHAR(255),
//     username VARCHAR(50),
//     first_name VARCHAR(100),
//     last_name VARCHAR(100)
// );

// CREATE TABLE hashpwd (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50),
//     password VARCHAR(255)
// );