const employee = {
    name: 'Dreezy',
    streetAddress: 'Nakuru',
};

function updateEmployeeWithKeyAndValue(obj,key,value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

const newObj = updateEmployeeWithKeyAndValue(employee,'name','Kyle')

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key] = value;
    return obj;
}
const newObj2 = destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress','11 Broadway');

function deleteFromEmployeeByKey(obj,key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}
const newObj3 = deleteFromEmployeeByKey(employee,'name');
console.log(newObj3);

function destructivelyDeleteFromEmployeeByKey(obj,key) {
    delete obj[key];
    return obj;
}
const newObj4 = destructivelyDeleteFromEmployeeByKey(employee,'name');
console.log(newObj4);