var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// first step to introduce var elements//


var resetAndStart = function() {

    $(".crystals").empty(); //emptys the old element and starts a new element.// 

    //this section adds images directly to the built in div//
    var images = [
                 'https://i.pinimg.com/originals/2b/b4/7d/2bb47dac47f1ea3ca05ef0688d33cf49.gif',
                 'https://66.media.tumblr.com/44cb3e3115039f4167440687f92aca45/tumblr_ofgsdj5fvk1vsjcxvo2_r1_540.gif',
                 'https://cdna.artstation.com/p/assets/images/images/013/762/072/original/-crys-gif-1.gif?1541004180',
                 'https://steamusercontent-a.akamaihd.net/ugc/940573211730634637/B3756DD855B393B660C15B0D9710B30E57193F27/'];
//               //                                         //                                                            //


random_result = Math.floor(Math.random() * 19) + 75; //generates a random number using the built in function called Math.floor(Math.random()
//generates a random number. you have to match the crystals to this number with out going over//


$("#result").html('Random Results: ' + random_result); //shows the random number generated on you page//

for(var i = 0; i < 4; i ++){  //loops 4 times 

    var random = Math.floor(Math.random() * 11) +1; // generates random number for the crystals//

    var crystal = $("<div>"); //creates divs for the crystals//
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    crystal.css({
        "background-image":"url('" + images[i]  + "')", 
        "background-size":"cover"
    });

    $(".crystals").append(crystal);

    }  

    $("#previous").html("Total Score: " + previous);
}
    
resetAndStart();



$(document).on('click', ".crystal", function () {
    

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous); // each time you click on a crystal it keeps count/ totals all point when you click on a crystal/

    console.log(previous);

    if(previous > random_result){

        lost--;

        $("#lost").html("YOU SUCK! YOU WIN NOTHING" + lost); //tells you when you've lost

        previous = 0;

        
        resetAndStart();
        
    }
    else if(previous === random_result){

        win++;

        $("#win").html("YOU WIN" + win); // tells you have won//

       

        previous = 0;

        resetAndStart();
    }





});
