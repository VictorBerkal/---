function checkbox(){
    const labelCheckbox = document.querySelectorAll('.car-form-addres_sircle label');
    const btns = document.querySelectorAll('.car-form_btn');

    function removeClass(i){
        btns[i].classList.remove('car-form_btn__disabled');
    }
    function addClass(i){
        btns[i].classList.add('car-form_btn__disabled');
    }




    labelCheckbox.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            if(btns[i].classList.contains('car-form_btn__disabled')){
                removeClass(i)
            } else{
                addClass(i)
            }
        });
    });
}

module.exports = checkbox;
