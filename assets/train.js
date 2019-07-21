var firebaseConfig = {
    apiKey: "AIzaSyAqJ8SgswevQto1CYVkuTn4R8t_Pp1b-R8",
    authDomain: "train-activity-b3a51.firebaseapp.com",
    databaseURL: "https://train-activity-b3a51.firebaseio.com",
    projectId: "train-activity-b3a51",
    storageBucket: "",
    messagingSenderId: "274136486312",
    appId: "1:274136486312:web:f8a2c788a2dd68cf"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    const trainName = $("#train-name-input").val().trim();
    const trainDestination = $("#destination-input").val().trim();
    const trainFirst = moment($("#first-train-input").val().trim(), "MM/DD/YYYY").format("X");
    const frequency = $("#frequency-input").val().trim();

  const newTrain = {
    name: trainName,
    destination: trainDestination, 
    firstTrain: trainFirst,
    frequency = 0
  };

  