var total_seconds =60*15;
var minutesLeft = parseInt(total_seconds/60);
var secondsLeft = parseInt(total_seconds%60);
var timeTaken=0;
var   correct,wrong,noanswer,minutesTaken, secondsTaken,Timer,marks;
correct=wrong=noanswer=marks= 0;
setTimeout("TimeLeft()",1);

function mark() {
	var x =0;
    var answered;
	StopTimer();
	
	var CorrectAnswers=[3,1,4,2,1,4,3,2,2,2];
    var answerID=['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10'];
	
	for (var i= 0; i < CorrectAnswers.length; i++ ) {
        answered=false;
		for (var y = 0; y < 4; y++ ) {
			if ( document.forms[0].elements[x].checked) {
                answered=true;
				if(document.forms[0].elements[x].value==CorrectAnswers[i]){
					marks+=2;
                    correct+=1;
                    document.getElementById(answerID[i]).innerHTML='Correct Answer';
				}else{
					marks-=1;
                    wrong+=1;
                    document.getElementById(answerID[i]).innerHTML='Wrong Answer(answer is '+CorrectAnswers[i]+')';
				}
			}
            x++;
		}
        if(answered==false){
            noanswer+=1;
            document.getElementById(answerID[i]).innerHTML='Not Answered(answer is '+CorrectAnswers[i]+')'; 
        }
	}
	
	document.getElementById("time-left").innerHTML="<div class='result'><br/>Marks =  " + marks+'<br/>Time Taken :' + minutesTaken + ' minutes ' + secondsTaken + ' seconds <br/>Correct answers : '+correct+'<br/>Wrong answers  : '+wrong+'<br/>Blank answers : '+noanswer+'</div>' ;
    bgColor(marks);
}

function StopTimer() {
    clearTimeout(Timer); 
}

function bgColor(marks){
    if(marks<=0){
		document.getElementById("body").style.backgroundColor="rgb(231, 76, 60)";
    }else if(marks<=11){
        document.getElementById( "body" ).style.backgroundColor="rgb(237, 187, 153)";
    }else if(marks<=16){
        document.getElementById( "body" ).style.backgroundColor="rgb(249, 231, 159)";
    }else if(marks<=21){
        document.getElementById( "body" ).style.backgroundColor="rgb(255,215,0)";
    }
}

function TimeLeft(){
	document.getElementById("time-left").innerHTML='Time Left: ' + minutesLeft + ' minutes ' + secondsLeft + ' seconds' ;
	if(total_seconds <=0){
		mark();
	} else{
		total_seconds = total_seconds -1;
		timeTaken+=1;
		minutesTaken=parseInt(timeTaken/60);
		secondsTaken=parseInt(timeTaken%60);
		minutesLeft = parseInt(total_seconds/60);
		secondsLeft = parseInt(total_seconds%60);
		Timer=setTimeout("TimeLeft()",1000);
	}
}
































/*var firebaseConfig = {
  apiKey: "AIzaSyAqgAxxo3m2hpEGYi7l67WIV7VQ_G5hM88",
  authDomain: "travelbuddy-261311.firebaseapp.com",
  databaseURL: "https://travelbuddy-261311.firebaseio.com",
  projectId: "travelbuddy-261311",
  storageBucket: "travelbuddy-261311.appspot.com",
  messagingSenderId: "955274868327",
  appId: "1:955274868327:web:d21356955b0d832a42c6c2",
  measurementId: "G-B649LJZBXP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let feedback = {};
//create firebase database reference
let dbRef = firebase.database();

$(() => {
  $("#submit").click(() => {
    addFeedback();
    alert("Sent Successfully!");
  });
});

function addFeedback() {
  dbRef
    .ref("feedbacks")
    .push()
    .set(
      {
        name: $("#full-name").val(),
        message: $("#message").val()
      },
      error => {
        if (error) {
          alert(error);
        }
      }
    );
}*/
