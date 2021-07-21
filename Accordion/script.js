const accordionBoxes = document.querySelectorAll('.contentBx');
accordionBoxes.forEach(Element =>{
    Element.addEventListener('click',()=>{
        accordionBoxes.forEach(ElementInner =>{
            if(ElementInner.classList.contains('active')){
                ElementInner.classList.remove('active');
            }
        })
        Element.classList.toggle('active');
    })
})