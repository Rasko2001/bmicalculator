function bmiCalculator () {
    var weight = prompt ("Enter your weight. (kg) ");
    var height = prompt ("Enter your height. (cm)") / 100;
    var bmiResult = weight / (height * height);
    
    var protein = weight * 2 ;
    var carbs = weight * 3 ;
    var fats = weight * 1 ;

    var calories = (protein * 4)  + (carbs * 4) + (fats * 9);
    var bulk = calories + (calories * 0.12) ;
    var cut = calories - (calories * 0.12) ;

    if (bmiResult < 18.5){
       alert ("Your BMI result is " + Math.round (bmiResult) + " (underweight)" +".\n"
        + "You need | " + protein + "g proteins | " + carbs + "g carbs | " + fats + "g fats |\n" 
        + "Which is " + calories + " calories to maintain\n" + Math.round (bulk) + " caloires to bulk\n" + Math.round(cut) + " caloires to cut."  );
    } 

    if (bmiResult >= 18.5 && bmiResult <= 24.9) {
       alert ("Your BMI result is " + Math.round (bmiResult) + " (normal)" + ".\n"
        + "You need | " + protein + "g proteins | " + carbs + "g carbs | " + fats + "g fats |\n" 
        + "Which is " + calories + " calories to maintain\n" + Math.round (bulk) + " caloires to bulk\n" + Math.round(cut) + " caloires to cut."  );
    } 

    if (bmiResult >= 25 && bmiResult <= 29.9) {
        alert ("Your BMI result is " + Math.round (bmiResult) + " (overweight)" + ".\n"
         + "You need | " + protein + "g proteins | " + carbs + "g carbs | " + fats + "g fats |\n" 
         + "Which is " + calories + " calories to maintain\n" + Math.round (bulk) + " caloires to bulk\n" + Math.round(cut) + " caloires to cut."  );
     } 

     if (bmiResult >= 30 && bmiResult <= 34.9) {
        alert ("Your BMI result is " + Math.round (bmiResult) + " (obese)" + ".\n"
         + "You need | " + protein + "g proteins | " + carbs + "g carbs | " + fats + "g fats |\n" 
         + "Which is " + calories + " calories to maintain\n" + Math.round (bulk) + " caloires to bulk\n" + Math.round(cut) + " caloires to cut."  );
     } 
 
     if (bmiResult >= 35) {
        alert ("Your BMI result is " + Math.round (bmiResult) + " (extreme obese)" + ".\n"
         + "You need | " + protein + "g proteins | " + carbs + "g carbs | " + fats + "g fats |\n" 
         + "Which is " + calories + " calories to maintain\n" + Math.round (bulk) + " caloires to bulk\n" + Math.round(cut) + " caloires to cut."  );
     } 
 
 
}
