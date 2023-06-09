$(function(){
  let push_num = [];
  let num_1 = '';
  let num_2 = '';
  let cal = '';
  let answer = '';
  let calculation = false;


  $('.switch').on('click',function(){
    push_num.push($(this).text());
    if(calculation == true){
      num_2 = push_num.join('')
      $('.display').text(num_2);
    }else{
      num_1 = push_num.join('');
      $('.display').text(num_1);
    }
  })

  $('.calculation').on('click',function(){
    cal = $(this).attr('id');
    calculation = true;
    push_num = [];
    $('.display').text('');
  })

  $('.result').on('click',function(){
    switch(cal){
      case 'plus':
        let sum_1 = parseInt(num_1);
        let sum_2 = parseInt(num_2);
        answer = sum_1 + sum_2;
        break;
      case 'minus':
        answer = num_1 - num_2;
        break;
      case 'multiply':
        answer = num_1 * num_2;
        break;
      case 'divide':
        answer = num_1 / num_2;
        break;
    }
    $('.display').text(answer);
    num_1 = answer;
  })

  $('.reset').on('click',function(){
    num_1 = '';
    num_2 = '';
    cal = '';
    answer = '';
    calculation = false;
    push_num = [];
    $('.display').text('');
  })

});
