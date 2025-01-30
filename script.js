 let positionQuestion = 0;
 let correctAnswer = 0;

 function showQuestion(){
    if(questions[positionQuestion]){
        let q = questions[positionQuestion];


        document.querySelector('.questionArea').style.display = 'block';
        document.querySelector('.scoreArea').style.display = 'none';

        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';

        let optionsHtml = '';
        q.options.forEach((option, index) => {
            optionsHtml += `<div data-op=${index} class="option"><span>${index+1}</span>${option}</div>`;
        });
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });
     }
}
  function optionClickEvent(e){
    let clicked = parseInt(e.target.getAttribute('data-op'))

    if(questions[positionQuestion].answer === clicked) {
       correctAnswer++;
    } 

     positionQuestion++;
        showQuestion();
        console.log(correctAnswer)
  }


showQuestion() 
           


/*q.options.forEach((option, index) => {
    optionsHtml += `<div><span>${index+1}</span>${option}</div>`;
});
*/