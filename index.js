const cats=["Milo","Otis","Garfield"];{

}
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
    return cats;
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
  }
  function appendCat(Broom){
    var Broom_1= [...cats,Broom];
    return Broom_1;
  }
  function prependCat(Arnold){
    var Arnold_2=[Arnold, ...cats];
    return Arnold_2
  }
  function removeLastCat(){
    var caats= cats.slice(0,cats.length-1);
    return caats;
  }
  function removeFirstCat(){
    var catts= cats.slice(1)
    return catts
  }