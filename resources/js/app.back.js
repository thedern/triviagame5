
// Handler when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function(){

    // Global Variables
    var main = document.getElementById('trivia-q');
    var count = 0;
    var factTimer;

    // Trivia Object Constructor
    var trivia = function (question, option1, option2, option3, answer, fact) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.answer = answer;
        this.fact = fact;
    };

    // Instantiate trivia objects
    var shark = new trivia ('which animal on this list has a skeleton made of cartiliage?', 'salamander', 'jellyfish', 'octopus', 'shark','sharks have one of oldest skeletal designs which excludes bones');

    var croc = new trivia ('which animal has the strongest bite of any animal?','shark','hippo','lion', 'crocodile', 'Nile crocodiles have a bite measusred at 5000 psi');

    var tortoise = new trivia('Which animal has the longest lifespan?', 'whale', 'elephant', 'turtle', 'tortoise', 'Giant Tortoise:  150 - 177 years');

    var sloth = new trivia('What is the worlds slowest moving animal relative to its size?', 'starfish', 'snail', 'your tax return', 'sloth', 'Three Toed Sloth; Reaches a max speed of 0.003mph, which is slower than the average starfish');

    var falcon = new trivia('What is the fastest animal alive?', 'cheeta', 'dolphin', 'tuna', 'falcon',  'Peregrine Falcon.  Reach dive speeds approaching 200mph');

    var bat = new trivia('What is the worlds smallest mammal?', 'lemur', 'mouse', 'mole', 'bat', 'The Bumble Bee Bat grows to 1.2 inches long');

    var mosquito = new trivia('What is the worlds most dangerous animal to humans?', 'tiger', 'hippo', 'cape buffalo', 'mosqito', 'Mosquito:  ~750,000 deaths a year');

    var swhale = new trivia('Which living animal has the largest brain?', 'human', 'elephant', 'gorrilla', 'whale', 'Sperm Whale; Brain weighs 20lbs');

    var octopus = new trivia('Worlds most deadly venom to humans?', 'cobra', 'jellyfish', 'conch snail', 'octopus', 'Blue ring octopus;  One bite can kill up to 26 men. There are other venom’s which are more potent (such as box jellyfish), but there is no antidote for the venom of the blue ring octopus');

    var bwhale = new trivia('What is the largest animal to ever live?', 'brontosaurus', 'tyrannosaurus', 'king kong', 'blue whale', 'blue whales can reach up to 100ft and 150 tons');

    var beetle = new trivia('for its size, What is the strongest animal on earth', 'ant', 'wolverine', 'toger', 'beetle', 'Dung Beatle; They can lift 1140x their body weight which is equivalent to the average human lifting 80 tons');



    var names = [shark, croc, tortoise, sloth, falcon, bat, mosquito, swhale, octopus, bwhale, beetle];


    // Lame but effective way to iterate through the array.  Loops and timers are difficult due to call stack
    //setTimeout(function() {callTrivia(names[0]);}, 5000);
    //setTimeout(function() {callTrivia(names[1]);}, 10000);
    //setTimeout(function() {callTrivia(names[1]);}, 15000);

    function displayTrivia() {
        main.innerHTML = '';    
        let question = document.createElement('p');
        let option1 = document.createElement('p');
        let option2 = document.createElement('p');
        let option3 = document.createElement('p');
        let answer = document.createElement('p');
        let button = document.createElement('button');
        //className is not a function, its a property
        button.className = 'buttonT';
        button.appendChild(document.createTextNode('select'));
        option1.appendChild(button);
        answer.appendChild(button);
        question.appendChild(document.createTextNode(names[count].question));
        option1.appendChild(document.createTextNode(names[count].option1));
        option2.appendChild(document.createTextNode(names[count].option2));
        option3.appendChild(document.createTextNode(names[count].option3));
        answer.appendChild(document.createTextNode(names[count].answer));
        main.appendChild(question);
        main.appendChild(option1);
        main.appendChild(option2);
        main.appendChild(option3);
        main.appendChild(answer);
    }


    function init(){
    // show initial question with button click
        displayTrivia(names[0]);
        factTimer = setInterval(function(){

            // arguments passed to setInterval()
            displayTrivia();  // note!!!!!!!: this does not work if I pass 'displayTrivia;' without the ()
            count++;
            if (count === names.length) {
                clearInterval(factTimer);
            }

            // I suppose I need to put here to advance to next and restart the clock

        }, 5000);
    }

    init();
    // click function to start the game;
    //document.getElementById('startBtn').addEventListener('click', init);


    // above are some tests to ensure things can be done
    // start button will start the trivia game
    // need setinterval for trivia card read
        // stop button will clearInterval
        // clear interval can also be used in the loop if I only want to show the cards once each.  The user can then click start again if they want to play a second time
        // note: start needs to load first queston without delay, all other questions should be delayed 15 seconds.
    // need setTimeout (perhaps use my countdown timer gist) allow the user 15 seconds to guess before the answer is shown.
    // users can select the correct answer click event
        // correct = wins++
        // incorrect or timeout = no points



});