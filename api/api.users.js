var userSchema = require('../models/users');

//Get all users
function getUsers(req, res) {
  console.log('entra a getUsers...');
  userSchema.find({})
    .then( users => {
      res.status(200).send( {users} );
    });
}



//Get a users by id
function getUser(req, res) {

  let userId = req.params.id;
  console.log('entra a getUsers (1 solo)...');
  userSchema.findById( userId )
    .then( user => {
      res.status(200).send({user: user, title: 'Detalle de usuario'} );
    });
}




function saveUser( req, res ) {
  let user = req.body.user;
  console.log(user);
  let newUser = new userSchema( user );
  newUser.save( (err, userStored) => {
    if(err) {
      throw err;
    }
    else {
      if( userStored ) {
        res.status(200).send({newUser: userStored, message: 'Usuario guardado correctamente.'});
      }
    }
  });
}


function editUser( req, res ) {
  let user = req.body.user;
  let userId = req.body.userId;
  console.log(user);

  userSchema.findByIdAndUpdate(userId, user)
  .then( (userUpdated) => {
    if(userUpdated) {
      res.status(200).send({userUpdated: userUpdated, message: 'Usuario actualizado correctamente'});
    }
  });
}


function deleteUser( req, res ) {
  let userId = req.params.id;
  userSchema.findByIdAndRemove(userId)
  .then(userDeleted => {
    if(userDeleted) {
      res.status(200).send({userDeleted, message: 'Usuario eliminao correctamente'});
    }
  });
}

module.exports = {
  getUser,
  getUsers,
  saveUser,
  editUser,
  deleteUser
}