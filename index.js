
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
        correct: 'jesse'
      }
    ],
    rightAnswerMessage: 'You got it right!',
    wrongAnswerMessage: 'You got it wrong :(',
    score: 0,
    currentQuestionIndex: 0,
    counter: 0
    // Message(s) to let them know they have the correct answer 
    // Message(s) when they don't have the correct answer
    // Other things like score? Anything else?
  };
  //State Mod Functions
    //functions that outputs right or wrong
    function answerQuestion(state, answer){
      var correctAnswer = state.questions[state.currentQuestionIndex].correct;
      console.log(currentAnswer);
      state.currentQuestionIndex++;
      console.log(state.score+"Initial");
      if(correctAnswer === answer){
        state.score++;
        console.log(state.score+"LAter");
        return state.rightAnswerMessage;
      }else {
        return state.wrongAnswerMessage;
      }
      
    };
    var el = $('#quizz');
    
    
    //render functions
  function renderQuestions(state, index) {
      var currentQuestion = '<p>' + state.questions[index].ask + '</p>' ;
    console.log("Inside renderlist"); 
    $(el).html(currentQuestion);
    
    state.counter++;
  };
   function renderChoices(state, index) {
      var currentChoices = '<p>' + state.questions[index].choices + '</p>' ;
      
    
    console.log("Inside renderlist");
  
    $(el).html(currentChoices);
    //return currentQuestion
    state.counter++;
  };
    $('#quizz').submit(function(event){
      event.preventDefault();
      console.log("Question No:", state.counter);
      renderQuestions(state, state.counter);
      renderChoices(state, state.counter);
    })
  
