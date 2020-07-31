  var firebaseConfig = {
    apiKey: "AIzaSyDUV-KSDEb3gufrMQbWIDUk44n1J8eMawY",
    authDomain: "intercityrider.firebaseapp.com",
    databaseURL: "https://intercityrider.firebaseio.com",
    projectId: "intercityrider",
    storageBucket: "intercityrider.appspot.com",
    messagingSenderId: "205048091037",
    appId: "1:205048091037:web:4039e159b8701819a71f74",
    measurementId: "G-7ZLG79C6HZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('book');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var mail = getInputVal('mail');
    var message = getInputVal('message');
  
  
    // Save message
    saveMessage(name, phone, mail,  message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('bookingForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, phone, mail,  message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      phone:phone,
      mail:mail,
      message:message

    });
  }