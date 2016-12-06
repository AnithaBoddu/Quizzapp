

  var state = {
    questions: [
      {
        ask: 'Inside which HTML element do we put the JavaScript?',
        choices: [ '<js>', '<script>', '<javascript> ','<scripting>'],
        correct: '<js>'
      },

      {
        ask: 'Which built-in method removes the last element from an array and returns that element?',
        choices: ['A - last()', 'B - get()', 'C - pop()','D - None of the above'],
        correct: 'C- pop()'
      },
      {
        ask: 'What is the correct JavaScript syntax to write "Hello World"?',
        choices: ['A.  System.out.println("Hello World")', 'B.   println ("Hello World")','C.  document.write("Hello World")','D.  response.write("Hello World")'],
        correct: 'C.  document.write("Hello World")'
      },
      {
        ask: 'Which built-in method removes the last element from an array and returns that element?',
        choices: ['A - last()', 'B - get()', 'C - pop()','D - None of the above'],
            correct: 'C.  document.write("Hello World")'

      },
         {
        ask: 'Which built-in method removes the last element from an array and returns that element?',
        choices: ['A - last()', 'B - get()', 'C - pop()','D - None of the above'],
        correct: ['jesse']
      }
    ],

    rightAnswerMessage: 'You got it right!',
    wrongAnswerMessage: 'You got it wrong :(',

    score: 0,

    // Message(s) to let them know they have the correct answer 
    // Message(s) when they don't have the correct answer
    // Other things like score? Anything else?
  };


  //State Mod Functions

    

    var choicesNestedinList = state.questions.map(function(question){
      return '<li>' + question.choices + '</li>';
    })


    function firstQuestion(state){
      return questionsLooped[0];
    }

    //render functions

    function renderList(state, element) {
      state.questions[state.currentQuestion].choices.map(function(choice) {})
    var itemsHTML = state.questions.map(function(question) {
        return '<li>' + question.choices + '</li>';
    });

    element.html(choicesNestedinList);
};



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


















