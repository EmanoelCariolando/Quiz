    let positionQuestion = 0;
    let correctAnswer = 0; 
    showQuestion() 
    function showQuestion(){
       if(questions[positionQuestion]){
           let q = questions[positionQuestion];
   
            let pct = Math.floor((positionQuestion / questions.length) * 100);
            document.querySelector('.progress--bar').style.width = `${pct}%`;
           
   
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
        } else {
            finishQuiz();
        }
   }
     function optionClickEvent(e){
       let clicked = parseInt(e.target.getAttribute('data-op'))
   
       if(questions[positionQuestion].answer === clicked) {
          correctAnswer++;
       } 
        positionQuestion++;
           showQuestion();
           
     }
   
     function finishQuiz(){
       let points = Math.floor((correctAnswer / questions.length) * 100);

       document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
       document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`;

       if(points < 30){
           document.querySelector('.scoreText1').innerHTML = 'Melhore Sua Nota!';
           document.querySelector('.scorePct').style.color = '#FF0000';
       }
       else if(points >= 30 && points < 70){
           document.querySelector('.scoreText1').innerHTML = 'Parabéns! Continue Aprendendo!';
           document.querySelector('.scorePct').style.color = '#FFFFFFF'
       }



       document.querySelector('.questionArea').style.display = 'none';
       document.querySelector('.scoreArea').style.display = 'block';

       let Endpct = Math.floor(((positionQuestion + 1) / questions.length) * 100);
       document.querySelector('.progress--bar').style.width = `${Endpct}%`;

       document.querySelector('button').addEventListener('click', reset)
    }

    function reset(){
        correctAnswer = 0;
        positionQuestion = 0;
        showQuestion();
    }

   
              
   
   
   /*q.options.forEach((option, index) => {
       optionsHtml += `<div><span>${index+1}</span>${option}</div>`;
   });
   */