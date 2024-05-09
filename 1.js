function first() {
    console.log('first start'); //1
    second();
    console.log('first end'); //7
}

function second() {
    console.log('second start'); //2
    asyncThird();
    console.log('second end'); //6
}
async function asyncThird() {
    console.log('third start'); //3
    setTimeout(() => console.log('setTimeout'), 0); //10
    await asyncFourth();
    console.log('third end'); //9
}
async function asyncFourth() {
    return new Promise((resolve) => {
        console.log('fourth start'); //4
        resolve();
        console.log('fourth end'); //5
    }).then(() => console.log('promise resolved')); //8
}
first();
