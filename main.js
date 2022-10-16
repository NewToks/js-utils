// Everything is fine now
Array.prototype.shuffle = function(){
  return this.sort(() => 0.5 - Math.random());
}

Array.prototype.randomItem = function(){
  return this[Math.floor(Math.random() * this.length)]
}

String.prototype.remove = function(exp){
  return this.replaceAll(exp, "");
}

Number.randomBetween = function(min, max){
  return Math.floor(Math.random() * ((max+1)-min))+min
}
