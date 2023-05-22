class Card { 
   constructor(type , num ){
     this.type = type;
     this.num = num;
   }
}

const cards=[];
const card_type = ['s','d','h','c']
let count = 0
for(let i=0;i<card_type.length;i++){
  for(let j=1;j<=13;j++){
    let cards[count]= new Card(card_type[i],j);
    console.log(count +'type:' + card_type[i] + ' num:' + j);
     count++;
  }
}
