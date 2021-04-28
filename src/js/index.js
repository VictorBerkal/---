// const conFive = require('./five');
// conFive();

window.addEventListener('DOMContentLoaded', ()=>{

    const select = require('./select');
    const checkbox = require('./checkbox');

    checkbox();
    select('.cls-select', '.cls-select__title', '.cls-select__label');
    select('.way-select', '.way-select__title', '.way-select__label');
    select('.loading-select', '.loading-select__title', '.loading-select__label');
    select('.method-select', '.method-select__title', '.method-select__label');

});