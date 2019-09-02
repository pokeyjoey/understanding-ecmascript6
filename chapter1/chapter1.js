function varValue(condition) {
  var value = 'white';

  if (condition) {
   const colors = "blue";

    console.log('value in if:' + value);
  } else {
    console.log('value in else:' + value);
  }

  console.log('value after if:' + value);
  console.log('colors after if:' + colors);
}

function letValue(condition) {
   let value = "blue";

  if (condition) {
   //let value = "blue";

    console.log('value in if:' + value);
  } else {
    console.log('value in else:' + value);
  }

  console.log('value after if:' + value);
}

const person = {
  name:"nick"
};

person.name = 'Greg';

//person = {
//  name:"Greg"
//};

for (let i=0;i<10;i++){
  console.log(i);
}
console.log('after loop:' + i);

