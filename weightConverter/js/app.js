document.querySelector('.output').style.visibility = 'hidden';

document.querySelector('.input-field').addEventListener('input' , function(){
    document.querySelector('.output').style.visibility = 'visible';
    let input = document.querySelector('.input-field').value;
    document.querySelector('#g').innerHTML = input/0.0022046;
    document.querySelector('#kg').innerHTML = input/2.2046;
    document.querySelector('#oz').innerHTML = input * 16;
});