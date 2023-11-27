//Objects

let phone = {
  maker: 'Samsung',
  model: 'lindo',
  price: 5000,
  color: 'blue',
  isOn: true,
  call: function () {
    console.log('calling... ring..ring..ring');
  },
};

let showPhoneInfo = function (phoneObj) {
  // console.log('Телефон '+pnoneObj.maker +' '+ pnoneObj.model + ' коштує '+pnoneObj.price+' гривень');
  if (
    typeof phoneObj !== 'object' ||
    !phoneObj.maker ||
    !phoneObj.model ||
    !phoneObj.price
  )
    return null;

  let priceInfo =
    phoneObj.price.value && phoneObj.price.currency
      ? `${phoneObj.price.value}${phoneObj.price.currency}`
      : `${phoneObj.price} гривень`;
  return `Телефон ${phoneObj.maker} ${phoneObj.model} коштує ${priceInfo}`;
};

let objUndef;
// console.log(showPhoneInfo(objUndef));

// console.log(phone);
// console.log(showPhoneInfo(phone));

phone.price = {
  value: phone.price,
  currency: '₴',
};
phone.pin = '';
delete phone.pin;

// console.log(phone);
// console.log(showPhoneInfo(phone));

//Prototype
const video = {
  id: 0,
  title: 'My first video',
  description: 'bla bla bla',
  views: 15000,
  likes: 150,
  dislikes: 3,
  isPrivate: false,
  coments: [
    {
      id: 0,
      text: 'Best video ever',
    },
  ],
};

const videoPrototype1 = {
  addView: function () {
    return ++this.views;
  },
};

let videoId = 0;
function Video(title, description, isPrivate) {
  this.id = videoId++;
  this.title = title;
  this.description = description;
  this.views = 0;
  this.likes = 0;
  this.dislikes = 0;
  this.isPrivate = isPrivate;
  this.coments = [];

  // this.__proto__ = videoPrototype1; // not for Constructors
}
//give proto to Constructor and it gives it to examples automatically
Video.prototype = videoPrototype1;

const video2 = new Video('Title', 'description...', false);
const video3 = new Video('Title2', 'description...', false);

console.log(video2.addView === video3.addView);

const arr1 = [];
const arr2 = [];
console.log(arr1.push === arr2.push);

// const videoPrototype = {
//   test: function () {
//     console.log('this.method written in videoPrototype');
//   },
// };

// const testVideo1 = {};
// const testVideo2 = {};
// testVideo1.__proto__ = videoPrototype;
// testVideo2.__proto__ = videoPrototype;

// console.log(testVideo1.test === testVideo2.test);

const cat = {
  name: 'Tylor',
};
const dog = {
  name: 'Jasse',
};

const animal = {
  goToSleep: function () {
    console.log(`${this.name} is sleeping now...`);
  },
};
cat.__proto__ = animal;
dog.__proto__ = animal;

cat.goToSleep();
dog.goToSleep();

//========
const carProto = {
  speedUp: function (speedChange) {
    let newSpeed = this.speed + speedChange;
    this.speed = newSpeed < this.maxSpeed ? newSpeed : this.maxSpeed;
    return this.speed;
  },
  slowDown: function (speedChange) {
    let newSpeed = this.speed - speedChange;
    this.speed = newSpeed > 0 ? newSpeed : 0;
    return this.speed;
  },
  stop: function () {
    return (this.speed = 0);
  },
};

function Car(name, maxSpeed, color) {
  this.name = name;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
  this.color = color;
}
Car.prototype = carProto;

const car1 = new Car('Ferrary', 100, 'red');
const car2 = new Car('BMW', 200, 'black');
