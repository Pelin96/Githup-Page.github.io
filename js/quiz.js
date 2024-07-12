/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
 correct=0;
 


// 2. Store the rank of a player
rank="Not Known"

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
answer1=prompt('Name a programming language that you are learning')
if(answer1.toUpperCase()=='JAVASCRIPT'){
  correct+=1
  
  console.log(answer1.toUpperCase())
  console.log(answer1.toLowerCase())
}
answer2=prompt('What is the programming language for web content')
if(answer2.toUpperCase()=='HTML'){
  correct+=1
 
}
answer3=prompt('What language we use for styling web')
if(answer3.toUpperCase()=='CSS'){
  correct+=1
  
}
answer4=prompt('What is the name of the college study in ')
if(answer4.toUpperCase()=='DOUGLAS'){
  correct+=1
 
}
answer5=prompt('Where is your college is located')
if(answer5.toUpperCase()=='NEW WESTMINSTER'){
  correct+=1
  console.log(answer5.toUpperCase())
  
}

document. querySelector('main').innerHTML=`your score is : ${correct}`



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
   
*/

if(correct>=5){
rank="Gold"
}
else if(correct>=3){
  rank="Silver"
}else if(correct>=1)
{
rank="Bronze"
}else{
  rank="No crown"
}

// 6. Output results to the <main> element

document.querySelector('main').innerHTML=`your score is: ${correct} your rank is : ${rank}`