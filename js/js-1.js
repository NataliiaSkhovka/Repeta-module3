//Objects- Это словарь(список)
const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: [1, 2, 3],
  trackCount: 3,
};

console.log(playlist);

const fn = function (myObject){
  //myObject = { a: 1, b: 2}- литерал в скобках, видимость
  console.log(myObject);
}

fn({ a: 1, b: 2});

const rt = function(){
  return {a: 5};
  //возврат из функции литерала
};

console.log(rtfn());

//=========получить одно значение обьекта

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: [1, 2, 3],
  trackCount: 3,
};
//значение ключа, свойства
console.log(playlist);
console.log(playlist.tracks);
console.log(playlist.name);

const propertyName = `tracks`;

console.log(playlist.propertyName);// будет undefind
console.log(playlist[`tracks`]); //так правильно, поиск значения переменной

//=============
const username = `Mango`;
const email = `mango@gmail.com`;

const singupData = {
  username: username,// можно записать просто username, email,
  email: email,
};

console.log(singupData);

//=======
//<input name`color`value=`tomato`>
const inputName = `color`;
const inputValue = `tomato`;

const colorPickerData = {
  [inputName]: inputValue,
};
console.log(colorPickerData);

//=======
const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: [1, 2, 3],
  trackCount: 3,
};
playlist.qwe = 5;//добавить свойство, если оно было, то перезаписывается

console.log(playlist);

//======
const a = {x: 1, y: 2};
const b = a;

console.log(b === a);//true