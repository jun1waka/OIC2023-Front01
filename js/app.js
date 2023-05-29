class Card { 
   constructor(type , num ){
     this.type = type;
     this.num = num;
     this.isopen = false;
     this.ispair = false;
   }
}

const cards=[];
const card_type = ['&spades;','&diams;','&hearts;','&clubs;'];
let count = 0;
let help_count = 3;
let firstid = -1;

for(let i=0;i<card_type.length;i++){
  for(let j=1;j<=13;j++){
    cards[count]= new Card(card_type[i],j);
    console.log(count +': type:' + card_type[i] + ' num:' + j);
     count++;
  }
}

function shuffle(){
	let i=cards.length;
	while(i){
		let swap_idx = Math.floor(Math.random()*i--);
		console.log('FROM:' + i +': type:' + cards[i].type + ' num:' + cards[i].num);
		console.log('TO  :' + swap_idx +': type:' + cards[swap_idx].type + ' num:' + cards[swap_idx].num);
		let tmp = cards[i];
		cards[i] = cards[swap_idx];
		cards[swap_idx]=tmp;
	}
}

shuffle();

const message = document.getElementById('message');
const table=document.getElementById('table');
count = 0;
for(let i=0;i<card_type.length;i++){
  let tr = document.createElement('tr');
  for(let j=1;j<=13;j++){
    let td = document.createElement('td');
    let d_card = cards[count];
    td.classList.add('card');
    td.setAttribute('id',count);
    td.innerHTML = d_card.type + '<br>' + d_card.num;
    td.style.width = '1.5em';
    td.style.textAlign = 'center';
    switch(d_card.type){
      case '&spades;':
      case '&clubs;':
        td.style.color = 'black';
        break;
      case '&diams;':
      case '&hearts;':
        td.style.color = 'red';
    }
    td.addEventListener('click',function(){
      let el = this;
      let count = el.id;
      console.log('click:' + count);
      if(cards[count].ispair){
        return;
      }
      if(firstid < 0){
        flip(count);
        firstid = count;
      }else{
        flip(count);
        if(checkPair(firstid,count)){
          console.log('pair!');
          message.innerHTML = 'ペアができた';
          cards[firstid].ispair = true;
          cards[count].ispair = true;
        }else{
          console.log('no Pair');
          message.innerHTML = 'ペアじゃない';
          let wk_firstid = firstid;
          setTimeout(function(){
            console.log(wk_firstid);
            flip(wk_firstid);
            flip(count);
            message.innerHTML = '　';

          },3000);
        }
        firstid = -1;
      }
    });
    tr.appendChild(td);
    count++;
  }
  console.log(tr);
  table.appendChild(tr);
}

setTimeout(function(){
  count = 0;
  for(let i=0;i<card_type.length;i++){
    for(let j=1;j<=13;j++){
      let el = document.getElementById(count);
//      el.addEventListener('click',flip(count));
      el.innerHTML = '**<br>**';
      el.style.color = 'green';
      count++;
    }
  }
},5000);

function flip(count){
  let el = document.getElementById(count);
  let d_card = cards[count];
  if(d_card.isopen){
    el.innerHTML = '**<br>**';
    el.style.color = 'green';
    d_card.isopen = false;
  }else{
    el.innerHTML =  d_card.type + '<br>' + d_card.num;
    switch(d_card.type){
      case '&spades;':
      case '&clubs;':
        el.style.color = 'black';
        break;
      case '&diams;':
      case '&hearts;':
        el.style.color = 'red';
    }
    d_card.isopen = true;
  }
  
}
function checkPair(firstid,count){
  let a_card = cards[firstid];
  let b_card = cards[count];
  console.log('a_card:' + a_card.num);
  console.log('b_card:' + b_card.num);
  if(a_card.num == b_card.num){
    return true;
  }else{
    return false;
  }
}

const help=document.getElementById('help');
help.addEventListener('click',function(){
  count = 0;
//  if(help_count <= 0){
//    return;
//  }
  for(let i=0;i<card_type.length;i++){
    for(let j=1;j<=13;j++){
      flip(count);
      count++;
    }
  }
  setTimeout(function(){
    count = 0;
    for(let i=0;i<card_type.length;i++){
      for(let j=1;j<=13;j++){
        flip(count);
        count++;
      }
    }
  },3000);
  help_count--;
  help.innerHTML='助けて：のこり'+ help_count + '回';
  if(help_count <= 0){
    help.style.display = 'none';
  }
});
