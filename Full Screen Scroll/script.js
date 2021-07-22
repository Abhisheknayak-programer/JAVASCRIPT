const container = document.querySelector('.container');
const post__id = document.querySelector('.post__id');
const title = document.querySelector('.title');
const para = document.querySelector('.Para');
        
let limit = 40;
let pageCount = 1;
let postCount = 1;


const GetData = async function(){
    const api = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`;
    const Getting__Data = await fetch(api);
    const data = await Getting__Data.json();

    data.map((Element,index) =>{
        let html = `<div class="posts">
        <p class="post__id">${Element.id}</p>
        <div class="post__layer__next">
        <h2 class="title">${Element.title}</h2>
        <p class="Para">${Element.body}</p>
        </div>
        </div>`;

        container.insertAdjacentHTML('beforeend',html);
    });
}

GetData();



// MANIPULATE DATA ON THE SCROLL
function showData(){
    setTimeout(()=>{
        pageCount++;
        limit = limit+40;
        GetData();
    },200);
}

window.addEventListener('scroll',()=>{
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight >= scrollHeight){
        // console.log('I am at Bottom');
        showData();
    }
})