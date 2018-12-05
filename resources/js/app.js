
// Handler when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function(){

    // Global Variables
    var main = document.getElementById('trivia-q');
    var answers = document.getElementById('trivia-a');

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

    var tortoise = new trivia('Which animal has the longest lifespan?', 'whale', 'elephant', 'turtle', 'tortoise', 'Giant Tortoises may live up to between 150 - 177 years');

    var sloth = new trivia('What is the worlds slowest moving animal relative to its size?', 'starfish', 'snail', 'your tax return', 'sloth', 'Three Toed Sloth only reaches a max speed of 0.003mph, which is slower than the average starfish');

    var falcon = new trivia('What is the fastest animal alive?', 'cheeta', 'dolphin', 'tuna', 'falcon',  'Peregrine Falcon may reach dive speeds approaching 200mph');

    var bat = new trivia('What is the worlds smallest mammal?', 'lemur', 'mouse', 'mole', 'bat', 'The Bumble Bee Bat grows to a max lengrg of only 1.2 inches');

    var mosquito = new trivia('What is the worlds most dangerous animal to humans?', 'tiger', 'hippo', 'cape buffalo', 'mosqito', 'Mosquito:  ~750,000 deaths a year');

    var swhale = new trivia('Which living animal has the largest brain?', 'human', 'elephant', 'gorrilla', 'whale', 'Sperm Whale; Brain weighs 20lbs');

    var octopus = new trivia('Worlds most deadly venom to humans?', 'cobra', 'jellyfish', 'conch snail', 'octopus', 'Blue ring octopus;  One bite can kill up to 26 men. There are other venom’s which are more potent (such as box jellyfish), but there is no antidote for the venom of the blue ring octopus');

    var bwhale = new trivia('What is the largest animal to ever live?', 'brontosaurus', 'tyrannosaurus', 'king kong', 'blue whale', 'blue whales can reach up to 100ft and 150 tons');

    var beetle = new trivia('for its size, What is the strongest animal on earth', 'ant', 'wolverine', 'toger', 'beetle', 'Dung Beatle; They can lift 1140x their body weight which is equivalent to the average human lifting 80 tons');

    // did not use all the objects for this project
    // var names = [bat, croc, tortoise, sloth, falcon, shark, mosquito, swhale, octopus, bwhale, beetle];

    var names = [bat, croc, tortoise, sloth, falcon];

    // iterate through trivia object array and diplay questions
    function init(){
        for (var i = 0; i < names.length; i++) {

            displayTrivia(names[i]);
        }
    }

    // function takes argument of array memeber (trivia object)
    function displayTrivia(x) {
 
        // create question node   
        let spacer = document.createElement('br');
        let question = document.createElement('p');
        let answersP = document.createElement('p');
        question.appendChild(document.createTextNode(x.question));

        // create spans with classes and IDs
        let answerSP1 = document.createElement('span');
        answerSP1.className = 'd-md-inline ml-3 mb-5 p-3';
        answerSP1.id = x.option1;

        let answerSP2 = document.createElement('span');
        answerSP2.className = 'd-md-inline ml-3 mb-5 p-3';
        answerSP2.id = x.option2;

        let answerSP3 = document.createElement('span');
        answerSP3.className = 'd-md-inline ml-3 mb-5 p-3';
        answerSP3.id = x.option3;

        let answerSPA = document.createElement('span');
        answerSPA.className = 'd-md-inline ml-3 mb-5 p-3';
        answerSPA.id = x.answer;
        
        // create text nodes
        answerSP1.appendChild(document.createTextNode(x.option1));
        answerSP2.appendChild(document.createTextNode(x.option2));
        answerSP3.appendChild(document.createTextNode(x.option3));
        answerSPA.appendChild(document.createTextNode(x.answer));

        // append to paragraphs

        answersP.appendChild(answerSP1);
        answersP.appendChild(answerSP2);
        answersP.appendChild(answerSP3);
        answersP.appendChild(answerSPA);
    

        // append to document
        main.appendChild(question);
        main.appendChild(answersP);
        main.appendChild(answersP);
        main.appendChild(answersP);
        main.appendChild(answersP);
        main.appendChild(spacer);
        main.appendChild(spacer);
        
    }

    // countdown timer for quiz ending

    var timeleft = 60;
    var quizTimer = setInterval(function(){

        // Quiz timer with progress bar
        var pg = document.getElementById('progressBar');
        pg.value = 60 - (--timeleft);
        //console.log('DEBUG', timeleft);
        if(timeleft <=0) {
            clearInterval(quizTimer);
            main.innerHTML = '';
            main.appendChild(document.createTextNode('Time is up!'));
            pg.value = '';

            // Show facts about anwser animals
            for (var z = 0; z < names.length; z ++) {
                let interesting = document.createElement('p');
                let lineBreak = document.createElement('br');
                interesting.appendChild(document.createTextNode(names[z].fact));
                answers.appendChild(interesting);
                answers.appendChild(lineBreak);
            // emd loop
            }
        
        // end timer
        }

    // execute every second
    }, 1000);

    
    //start the game
    init();


}); // end javascript