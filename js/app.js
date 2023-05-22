class Card { 
   constructor(type , num ){
     this.type = type;
     this.num = num;
   }
}

const cards=[];
const card_type = ['s','d','h','c'];
let count = 0;
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

const table=document.getElementById('table');
count = 0;
for(let i=0;i<card_type.length;i++){
  let tr = document.createElement('tr');
  for(let j=1;j<=13;j++){
    let td = document.createElement('td');
    let d_card = cards[count];
    td.classList.add('card');
    td.innerHTML = d_card.type + '<br>' + d_card.num;
    tr.appendChild(td);
    count++;
  }
  console.log(tr);
  table.appendChild(tr);
}
