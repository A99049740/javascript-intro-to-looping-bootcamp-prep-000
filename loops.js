function forLoop(array){
  for (let i = 1; i<26;i++){
    if (i ==1){
      array.push(`I am ${i} strange loop.`);
    }
    else{
      array.push(`I am ${i} strange loops.`)
    }
  }
  return;
}
function whileLoop(number){
  let countdown = number
  while (countdown >0){
    console.log(countdown)
    countdown--
  }
  return "done"
}

var i = 0;
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){
  do{
    array.shift()
  }
  while(array.length>0 && incrementVariable())
  return array
}