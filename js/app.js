
// function multiplyingTwo (a, b) {
//   return a * b;
// }
//
// function multiplyingThree (a, b, c) {
//   return a * b * с;
// }
//
// function decorator (a, b) {
//   return b + a + b;
// }
// console.log(multiplyingTwo (2, 3));
// console.log(multiplyingThree (3, 4, 5));
// console.log(decorator ('Vadim', '***'));
//
// multipleAll(1, 2, 5, 3) // 30
// multipleAll(0, 1, 5) // 0
// multipleAll(5, 5, 5) // 125
// multipleAll(7, 4) // 28
// multipleAll('a', 3, 7) // 'wrong arguments'
//
//
// function multipleAll (a) {
//   return a = a * a;
// }
// console.log(multipleAll(1, 2, 5, 3));
// console.log(multipleAll(0, 1, 5));
// console.log(multipleAll(5, 5, 5));
// console.log(multipleAll(7, 4));
// console.log(multipleAll('a', 3, 7));



window.addEventListener('load', function() {

    var form = document.querySelector('#form'),
        input = document.querySelector('#globalText'),
        counterInput = form.getElementsByTagName('input'),
        btnCheckall = document.getElementById('btn-checkall');

    input.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            creator();
        }
    });

    btnCheckall.addEventListener('click', function() {
        checkAll();
    });


    function creator() {
        var li = document.createElement('li'),
            text = input.value,
            todoCountAll = document.querySelector('.todoCountAll i');

        /*li.setAttribute('class', 'checkbox');*/
        if (text !== '') {
            li.innerHTML = '<div class="checkbox">'
                         + '<label>'
                         + '<input type="checkbox" id="pfile">'
                         + text
                         + '</label>'
                         + '</div>';
            form.appendChild(li);
            input.value = '';
            todoCountAll.innerHTML = counterInput.length;
        }
    }

    function checkAll() {
        /*document.getElementsByName('qwer').setAttribute('checked', 'checked');*/

        var elements = form.getElementsByTagName('input');

        for (var i = 0; i < elements.length; i++) {
            if (!elements.checked){
                /*document.querySelector('#pfile').checked = true;*/
                document.querySelector("label").classList.toggle("label-line");
                document.querySelector('#pfile').setAttribute('checked', 'checked');
            } else {
                document.querySelector('#pfile').checked = false;
                document.querySelector("label").classList.toggle("label-line");
                document.querySelector('#pfile').removeAttribute('checked');
            }

        }
    }


});
