
function showSection(params){
     const elements = document.querySelectorAll(".main-content  > div")



     elements.forEach(dt => {
        dt.classList.add ('hidden')

     });

    (document.getElementById(params + 'Section').classList.remove("hidden")); 
    
    //add or remove


    console.log ()
}