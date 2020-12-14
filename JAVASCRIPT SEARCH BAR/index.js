const searchFunction = () =>{
    //// Fetching the search bar
    let input = document.getElementById('myinput').value.toUpperCase();

    //// Fetching The Ul
    let ul = document.getElementById('myUl');
    let li = ul.getElementsByTagName('li');

    for(let i=0;i<li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];

        let textValue = a.innerText || a.textContent;

        if(textValue.toUpperCase().indexOf(input) > -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }

}
