let startDate = Date.now();
let endDate = Date.now();

const testTimeStart = () => {
    startDate = Date.now();
}

const testTimeEnd = () => {
    endDate = Date.now();
}

const testTime= () => {
    console.log("applyAll Time = ");
    console.log(endDate - startDate);
}
