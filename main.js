Array.prototype.shuffle = function(){
  return this.sort(() => 0.5 - Math.random());
}

Array.prototype.includesObjectWithKey = function(key){
  let found = false;
  this.forEach(el => {
    if(el[key]) return found = true
  })
  return found
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