// Gestionnaire Input main //
const inputElement = document.querySelector('.search_General');

// Boucle For //
    const updateValue = (event) => {
    let startDate = Date.now();
    resultInput = event.target.value;
    let elements = document.getElementsByClassName('card');
    for(let i = 0; i<elements.length; i++){
        if(elements[i].innerHTML.toLowerCase().includes(resultInput.toLowerCase())){
            elements[i].style.display = 'flex';
        }
        else{
            elements[i].style.display = 'none';
        }
    }
    let endDate = Date.now();
    console.log(endDate - startDate);
}

// Boucle forEach //
// const updateValue = (event) => {
//     let startDate = Date.now();
//     resultInput = event.target.value;
//     let elements = document.getElementsByClassName('card');
//     [...elements].forEach(element => {
//             if(element.innerHTML.toLowerCase().includes(resultInput.toLowerCase())){
//                 element.style.display = 'flex';
//             }
//             else{
//                 element.style.display = 'none';
//             }
//     }); 
//     let endDate = Date.now();
//     console.log(endDate - startDate);

// }

inputElement.addEventListener('input', updateValue);
