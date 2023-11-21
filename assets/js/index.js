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
  if(typeof phoneObj !== 'object' || !phoneObj.maker || !phoneObj.model || !phoneObj.price) return null

  let priceInfo = (phoneObj.price.value && phoneObj.price.currency) ? `${phoneObj.price.value}${phoneObj.price.currency}`:`${phoneObj.price} гривень`
  return `Телефон ${phoneObj.maker} ${phoneObj.model} коштує ${priceInfo}`;
};

let objUndef;
console.log(showPhoneInfo(objUndef));

console.log(phone);
console.log(showPhoneInfo(phone));

phone.price = {
  value: phone.price,
  currency: '₴',
};
phone.pin = '';
delete phone.pin;

console.log(phone);
console.log(showPhoneInfo(phone));
