/*
Program Name: Recipe Display Application
Author: Aly Sanger-Hodgson
Date: July 24, 2017
Filename: drill4.js
*/


 //displays the next element after the current target
    
    function display(event) {
        
        $(event.currentTarget).next().fadeIn("slow");

    }//end of display
    
    //attach event listener to h3 elements to invoke display function when clicked
    
        $("h3").click(display);
        
        //change the background color h3 element when mouse hovers over it
        $("h3").hover(function(){
        $(this).css("background-color", "yellow");
    }, function(){
                $(this).css("background-color", "pink");
                
    });