let state = { questions : [
    {question: "What is an array?",
    correct: "A collection of objects stored in linear order accessible by a integer index.",
    answer1: "A well defined computational procedure that takes some value and produces some value.",
    answer2: "A sequence of computational steps that transform the input into the output.",
    answer3: "Collection of nodes, which together represents a sequence, where each node contains data and a reference to the next node in the sequence."
  }, {
    question: "What is not part of a complete description of an algorithm?",
    answer1: "The algorithm",
    answer2: "Proof of correctness",
    answer3: "Derivation of running time",
    correct: "Hardware requirements",
  }, {
    question: "Which of the following sorting algorithms is incremental?",
    answer1: "Bubble sort",
    answer2: "Merge sort",
    correct: "Insertion sort",
    answer3: "Quick sort",
  }, {
    question: "Which of these steps is not part of a proof by loop invariant?",
    answer1: "Initialization",
    answer2: "Termination",
    answer3: "Maintenance",
    correct: "Augmentation",
  }, {
    question: "Which of the following operations is not needed for a max-priorty queue?",
    answer1: "Increase-Key",
    answer2: "Maximum",
    answer3: "Extract-Max",
    correct: "Decrease-Key"
  }], current_question: 0, questions_correct: 0

}

function hideStartScreen() {
  $('.start-screen').addClass('hidden');
};

function renderQuestion(state, index_question) {
  index = index_question;
  question = state.questions[index].question;
  answer1 = state.questions[index].correct;
  answer2 = state.questions[index].answer1;
  answer3 = state.questions[index].answer2;
  answer4 = state.questions[index].answer3;

  let template = `<h1>Question ${index}</h1>
  <h2>${question}</h2>
  <button class='correct'>${answer1}</button>
  <button>${answer2}</button>
  <button>${answer3}</button>
  <button>${answer4}</button>`;

  $('main').html(template);
};

function doAllTheThings() {
  $('.js-start-button').click(function(event) {
    event.preventDefault();
    hideStartScreen();
    renderQuestion(state, 1);
  })
};

$(function() {
  doAllTheThings(); }
);
