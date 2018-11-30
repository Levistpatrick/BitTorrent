//Type your code in this function
function Tracker(){

  let seeds =[];
  let percent = [];

  //implement all six functions below
function numOfSeeds(list){
  let found = 0;
  for (let i=0; i<list.lenght; i++){
    if(list [i] !== null){
      found ++;;
    }
  }
 return found;
}

function addseed(s){
  list.push(s);
  return list;
}

 function removeSeed(list,name){
   for(let i=0; i<list.lenght; i++){
     if(list[i]==name){
       return null
     }
    }
  }
function reportHealth(list){
  let sum=0;
  let count=0;

  for(let i=0; i < seeds.lenght; i++){
    let r = Math.random()
    if(r >seeds [i]){
      seeds[i] = r;
    }
  else(r < 0.03){
    seeds[i] = null;
    percent[i] = 0;
  }
  }
