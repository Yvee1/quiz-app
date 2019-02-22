let state = {
  questions: [{
    question: "What is an array?",
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
    question: "Which of the following operations is not needed for a max-priority queue?",
    answer1: "Increase-Key",
    answer2: "Maximum",
    answer3: "Extract-Max",
    correct: "Decrease-Key"
  }],
  current_question: 0,
  questions_correct: 0

}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function hideStartScreen() {
  $('.start-screen').addClass('hidden');
};

function renderQuestion(state, index_question) {
  index = index_question;
  question = state.questions[index].question;

  let answers = [state.questions[index].correct, state.questions[index].answer1, state.questions[index].answer2, state.questions[index].answer3]
  answer_template = [`<button class='answer correct'>${answers[0]}</button>`,
    `<button class='answer'>${answers[1]}</button>`,
    `<button class='answer'>${answers[2]}</button>`,
    `<button class='answer'>${answers[3]}</button>`
  ];
  answer_template = shuffle(answer_template);
  let template = `<h1>Question ${index+1}</h1>
  <h2>${question}</h2>
  ${answer_template[0]}
  ${answer_template[1]}
  ${answer_template[2]}
  ${answer_template[3]}
  <span class='current-question'>Q ${index+1}/5</span>
  <span class='number-correct'>${state.questions_correct} ✔</span> <span class='number-wrong'>${index_question-state.questions_correct} ✖</span>
  `;

  $('main').html(template);
};

function updateScore(state, elt) {
  $(elt).parent().find('.number-correct').html(`${state.questions_correct} ✔`);
  $(elt).parent().find('.number-wrong').html(`${state.current_question + 1 - state.questions_correct} ✖`);
}

function doAllTheThings() {
  $('.js-start-button').click(function(event) {
    event.preventDefault();
    hideStartScreen();
    renderQuestion(state, 0);
  })
  $('main').on('click', '.answer', function(event) {
    clicked = this;
    if (!$(clicked).parent().hasClass('answered')) {
      $(clicked).parent().addClass('answered');
      if ($(clicked).hasClass('correct')) {
        state.questions_correct++;
      }
      updateScore(state, clicked);
      if (state.current_question < state.questions.length-1){
        window.setTimeout(function() {
          $(clicked).parent().removeClass('answered');
          renderQuestion(state, ++state.current_question);
        }, 1000);
      } else {
        console.log("DONE")
      }
    }
  })
};

$(function() {
  doAllTheThings();
});
