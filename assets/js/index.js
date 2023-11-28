'use strict';


try{	
  console.log('huhj');
  const MyFirstError = new Error('U are wrong');
  console.log(MyFirstError);
  console.dir(MyFirstError);
  throw MyFirstError
  console.log('gg');
  
} catch(err){
  console.log('error ',err)
}finally {
  console.log('always')
}
console.log('after')