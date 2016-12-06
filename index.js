$(document).ready(function() {

     var listIndex = 0;
     var currentQuestion;

     var f1 = function(event) {
      event.preventDefault();
      $('#start').hide();

      //console.log('Hello Submit');
      if (currentQuestion != null) {
        currentQuestion.hide();
      }

      currentQuestion = $('li').eq(listIndex);
      listIndex++;
      
      currentQuestion.submit(f1);
      currentQuestion.show('slow');
     //    // $('#first').show('slow');
     //    var q2 = $('li').eq(0);
     //    console.log("q2 = " + q2);
     //    q2.show('slow');
     // //console.log("My first value is" + ans);
  };

$('#start').submit(f1);
});













