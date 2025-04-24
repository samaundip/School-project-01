
function showSection(params){
     const array = document.querySelectorAll(".main-content  > div")



     array.forEach((element) => { 
        element.classList.add ('hidden')

     });

    (document.getElementById(params + 'Section').classList.remove("hidden")); 
    
    //add or remove


    console.log ()
}