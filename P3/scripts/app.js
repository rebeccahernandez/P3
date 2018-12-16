$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCspS01usN_GRRFlwNDET5v_FbcnHFt4T4",
    authDomain: "p3-chat.firebaseapp.com",
    databaseURL: "https://p3-chat.firebaseio.com",
    projectId: "p3-chat",
    storageBucket: "",
    messagingSenderId: "771754048971"
  };
  firebase.initializeApp(config);



  // USER 1
  var reviewsBranchUser1 = firebase.database().ref('user-1-reviews');

  // CREATES and TO VOTE YES BRANCH ON YES CLICKS
  var user1VoteYesBranch = firebase.database().ref('user-1-reviews/vote-yes');

  $('#user-1 #btn-yes').click(function() {
    user1VoteYesBranch.push({
      response: 'yes',
    });
  })

// CREATES and TO VOTE YES BRANCH ON NO CLICKS
  var user1VoteNoBranch = firebase.database().ref('user-1-reviews/vote-no');

  $('#user-1 #btn-no').click(function() {
    user1VoteNoBranch.push({
      response: 'no',
    });
  })


  // USER 2
  var reviewsBranchUser2 = firebase.database().ref('user-2-reviews');

  // CREATES and TO VOTE YES BRANCH ON YES CLICKS
  var user2VoteYesBranch = firebase.database().ref('user-2-reviews/vote-yes');

  $('#user-2 #btn-yes').click(function() {
    user2VoteYesBranch.push({
      response: 'yes',
    });
  })

// CREATES and TO VOTE YES BRANCH ON NO CLICKS
  var user2VoteNoBranch = firebase.database().ref('user-2-reviews/vote-no');

  $('#user-2 #btn-no').click(function() {
    user2VoteNoBranch.push({
      response: 'no',
    });
  })











  // OUTPUT
  // projection.html
  //

  // USER 1
  var user1Total = 0;
  var user1Yes = 0;
  var user1No = 0;

  // USER 2
  var user2Total = 0;
  var user2Yes = 0;
  var user2No = 0;



  var startListeningToFirebaseDatabase = function() {

    user1VoteYesBranch.on('child_added', function(ourDatabaseKid) {

      user1Total++;
      user1Yes++;

      var something = (((user1Yes/user1Total) * 100) + '%');
      $('#user-1-scale .bar').width(something);

      console.log(user1Yes + ' ' +  user1Total);

    });

    user1VoteNoBranch.on('child_added', function(ourDatabaseKid) {
      user1Total++;
      user1No++;

      var something = (((user1Yes/user1Total) * 100) + '%');
      $('#user-1-scale .bar').width(something);

      console.log(user1Yes + ' ' +  user1Total);



      user2VoteYesBranch.on('child_added', function(ourDatabaseKid) {

        user2Total++;
        user2Yes++;

        var something = (((user2Yes/user2Total) * 100) + '%');
        $('#user-2-scale .bar').width(something);

        console.log(user2Yes + ' ' +  user2Total);

      });

      user2VoteNoBranch.on('child_added', function(ourDatabaseKid) {
        user2Total++;
        user2No++;

        var something = (((user2Yes/user2Total) * 100) + '%');
        $('#user-2-scale .bar').width(something);

        console.log(user2Yes + ' ' +  user2Total);

      });




    });







  }

  startListeningToFirebaseDatabase();


});
