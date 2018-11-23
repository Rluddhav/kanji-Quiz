// where the text is displayed
const kanji = document.querySelector('.kanji');
// input where user enters romaji
const input = document.getElementById ('input');
// button user clicks after entering guess
const check = document.querySelector('button');

console.log(check);
// kanji object : keys = romaji & value =kanji
const kanjiObject ={
    kuchibiru : '唇',
    kosi　: '腰',
    mune : '胸',
    hiza :'膝'
}
// array of kanji characters
const kanjiValue = Object.values(kanjiObject);
// array of romaji
const kanjiKey = Object.keys(kanjiObject);
// count changes 
let counter= 0;

let nowKanji =kanjiValue[counter];
let nowRomaji = kanjiKey[counter];

    console.log(nowKanji);
    console.log(nowRomaji);

check.addEventListener('click', function(){
if(input.value=== nowRomaji) {
display ();
correct ();

} else {
incorrect ();

}
});

function display() {
  
    counter=counter +1;
    nowKanji =kanjiValue[counter];
    nowRomaji = kanjiKey[counter];
    kanji.innerHTML = nowKanji;
    input.value ='';
  
}
  
 function incorrect(){
  
  kanji.innerHTML = 'incorrect, Try again mutha fucka';
  input.value ='';
  setTimeout(function(){
    kanji.innerHTML = nowKanji;
  }, 2000);
}

  function correct(){
    if(counter===kanjiValue.length){
      kanji.innerHTML = "Superb! keep japanesing"
    } else {
      kanji.style.color ='green';
      kanji.innerHTML = 'Good job';
      input.value ='';
      setTimeout(function(){
        kanji.style.color ='black';
        kanji.innerHTML = nowKanji;
      }, 2000);
    
    }


 } 
    