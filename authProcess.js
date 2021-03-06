const userFactory = Object.create(null, {
    "activeUser": {
        value: null,
        writable: true
      },
      "init": {
          value: function (e) {
              firebase
                  .initializeApp(config)

              $("#loginDash").on("click", e => {
                  console.log("Login Click button is working")
              $("#submitRegistration").on("click", e => {
                  console.log("Register Click button is working")
                  firebase.auth().createUserWithEmailAndPassword($("#email").val(), $("#password").val()).then(function(user) {
                      var user = firebase.auth().activeUser
                  })
                  .catch(function(error) {
                      // Handle Errors here.
                      var errorCode = error.code
                      var errorMessage = error.message
                      console.log("Error Msg"  + errorMessage)
                  })
              })
              this.validate(
                  $("#email").val(),
                  $("#password").val()
              )
              // Clear the form
              $("#email").val("")
              $("#password").val("")
              observer.init(this)
          })
      }
  },
      "validate": {
          value: function (email, password) {
              firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .catch(function (error) {
                  const errorCode = error.code
                  const errorMessage = error.message

                  // notify.log("Email or password is invalid")
              })
          }
      },
      "logout": {
          value: function (e) {
              $("#logout").on("click", e => {
              firebase.auth().signOut().then(function() {
                  // Sign-out successful.
              }).catch(function(error) {
                  // An error happened.
              })
          })
      }
  }
})
