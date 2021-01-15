var total_seconds =60*10;
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
	
	var CorrectAnswers=[2,2,3,2,2,3,2,2,1,3];
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
                    document.getElementById(answerID[i]).innerHTML='Wrong Answer';
				}
		
            x++;
		}
        if(answered==false){
            noanswer+=1;
            document.getElementById(answerID[i]).innerHTML='Not Answered'; 
        }
	}
	if(correct==10){
		Scroll();
		document.getElementById("time-left").innerHTML="<div class='result'> <h2> Hurray! You Win it</h2> <br> <h3> You'll get 10% off on your nrxt service </h3> <br/> Loyalty points =  " + 
		marks+'<br/>Time Taken :' + minutesTaken + ' minutes ' + secondsTaken + 
		' seconds <br/>Correct answers : '+correct+'<br> <br> </div> <a id="aa" data-ajax="false" href="../../pages/Log&Reg/register.html"  data-role="none" > Go back to services </a> ' ;

		
	}else{
		Scroll();
		document.getElementById("time-left").innerHTML="<div class='result'> <h2> You missed it. Let's try again later </h2> <br/> Loyalty points =  " + 
		marks+'<br/>Time Taken :' + minutesTaken + ' minutes ' + secondsTaken + 
		' seconds <br/>Correct answers : '+correct+'<br> <br> <a id="aa" data-ajax="false" href="../../pages/Log&Reg/register.html"  data-role="none" > Go back to services </a>' ;

	}	
    
  }
}

function Scroll() {
	window.scrollTo(0, 0);
  }

function StopTimer() {
    clearTimeout(Timer); 
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

