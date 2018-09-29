
//*************************************************Bank//
var quest = ["How many dragonballs must be collected in order to make a wish?",
    "What is the name of Goku's youngest son?",
    "Which character uses the attack 'Spirit Bomb'?",
    "What is the name of the company that Bulma's father established?",
    "Which Android did Krillin Marry?",
    "Which character comes back from the future to warn of impending doom?",
    "If this character is killed, Picolo dies too...",
    "Which villan becomes one of the good guys?",
    "During which saga did Vegeta become a 'Super Saiyan'?",
    "Who created the Androids?"
];



var ans = [
    [10, 7, 6, 4],
    ["Gohan", "Gogeta", "Goten", "Gomar"],
    ["Tien", "Yamcha", "Krillin", "Goku"],
    ["Dragon Inc", "Capsule Co", "Capsule Corp", "Z Corporation"],
    ["Android 7", "Android 17", "Andorid 18", "Android 22"],
    ["Yamcha", "Andorid 18", "Krillin", "Trunks"],
    ["Mr Popo", "Gohan", "Kami", "Nail"],
    ["Vegeta", "Freeza", "Cell", "Brolly"],
    ["Android Saga", "Cell Saga", "Buu Saga", "Freeza Saga"],
    ["Capsule Corp", "The Namekians", "Dr Gero", "Bulma"]
];

var correct = [7, "Goten", "Goku", "Capsule Corp", "Android 18", "Trunks", "Kami", "Vegeta", "Android Saga", "Dr Gero"];
//*************************************************Bank//








//****************************************************Question Selector//
function quiz(){

//********************* Ask the Question/
$("#rightanswer").html("<h1></h1>");
    
var i = (Math.floor(Math.random() * 10));
    console.log(i);
    $("#questions").html("<h1>" + quest[i] + "</h1>");
    $("#answers").html("<button>" + (ans[i])[0] + "</button>"+"<br><br>"+ "<button>" + (ans[i])[1] + "</button>"+"<br><br>"+"<button>" + (ans[i])[2] + "</button>"+"<br><br>"+"<button>" + (ans[i])[3] + "</button>");
    console.log(correct[i]);
//********************* Ask the Question/


//Timer//
var timed = 6;
var intervalId;
function run() {
    intervalId = setInterval(decrement, 1000);
};
function decrement() {
    timed--;

    $("#timedown").html("<h2>Time Left: " + timed + "</h2>");
    if (timed === 0) {
        answer()

        setTimeout(threesec, 1000 * 3);

        function threesec() {
            quiz();
        };

    };

    // $("button").on("click", function(){
    //     console.log(this);

    //     if (this === ("<button>"+correct[i]+"</button>")) {
    //         alert("right");
    //     };
    //   });

    

};
//Timer//



$("button").on("click", function(){
    console.log(this);

    if (this === ("<button>"+correct[i]+"</button>")) {
        alert("right");
    };
  });




//Answer-Reveal//
function answer() {
    $("#rightanswer").html("<h1>Time is up! Correct Answer: " + correct[i] + "</h1>");
};
//Answer-Reveal// 
run();
};
//****************************************************Question Selector//


    $(".startMe").on("click", function start() {
    

        quiz();


        // $("button").on("click", function(){
        //     console.log(this);

        //     if (this === ("<button>"+correct[i]+"</button>")) {
        //         alert("right");
        //     };
        //   });
  



    });

   








// *******************************
// There's a lot left to be completed with this assignment because I honestly waited too long to start it.
// I still needed to figure out how to capture the correct and incorrect button clicks. After compeleting that,
// I would have then added if/else statements to add correct and incorrect answers and display them on the last 
// question.
// *********************