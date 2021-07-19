const texts = ['Website Developer','Blogger','Youtuber'];
let count = 0; // Track the elements
let index = 0; // Track the indivisual letters
let currentText = '';
let letter = '';

(function typing(){
    const h1 = document.querySelector('.typing');

    // This Makes the count to zero when it reaches the last element in the texts array
    if(count === texts.length){
        count = 0;
    }
    

    // Here Current text holds the current element every time which depends on the value of count 
    currentText = texts[count];
    //letter carries one letter each time of the selected currentText and the index is increased one by one 
    letter = currentText.slice(0,++index);
    

    
    // Changing the letter again and again when it is changing
    h1.textContent = letter;
    // when the letter length becomes currentText length then count increases and index becomes 0
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    // Calling the function in every 200ms
    setTimeout(typing,200);

}());