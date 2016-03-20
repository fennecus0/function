window.addEventListener('load', function() {

    var btnAll = document.querySelector('.btn-all'),
        textInput = document.querySelector('#globalText'),
        btnDanger = document.querySelector('.btn-danger'),
        btnGreen = document.querySelector('.btn-green'),
        btnGray = document.querySelector('.btn-gray'),
        btnYellow = document.querySelector('.btn-yellow'),
        btnX = document.querySelector('.btn-x'),
        checkBlock = document.querySelector('.checkBlock'),
        form = document.querySelector('#form'),
        fotmInput = form.getElementsByTagName('input'),
        elements = form.getElementsByTagName('li'),
        formLabel = form.getElementsByTagName('label');




    textInput.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            schowMain();
            creator();
            countItemCheck();
        }
    });
    btnAll.addEventListener('click', function() {
        if (allChecked == allNotChecked) {
            checkAll2();
            countItemCheck();
        } else if (allChecked !== allNotChecked) {
            checkAll();
            countItemCheck();
        }
    });
    btnDanger.addEventListener('click', function() {
        showAll();
        countItemCheck();
     });
    btnGreen.addEventListener('click', function() {
        showActive();
        countItemCheck();
     });
    btnGray.addEventListener('click', function() {
        showCompleted();
        countItemCheck();
    });
    btnYellow.addEventListener('click', function() {
        clearAll();
    });
    btnX.addEventListener('click', function(){
        liDelete();
    });


    function schowMain() {
        document.querySelector('#main').style.display = 'block';
        document.querySelector('#footer').style.display = 'block';
    }
    function creator() {
        var li = document.createElement('li'),
            text = textInput.value;

        if (text !== '') {
            li.innerHTML = '<div class="checkBlock">'
                         + '<label>'
                         + '<input type="checkbox" id="checkInput">'
                         + '<span>' + text + '</span>'
                         + '</label>'
                         + '</div>'
                         + '<button type="button" class="btn-x">x</button>';
            form.appendChild(li);
            textInput.value = '';
        }
    }
    function liDelete () {
        parentElement.removeChild(firstChild);
    }

    function allChecked() {
        for (var i = 0; i < fotmInput.length; i++) {
            if (fotmInput[i].checked == true){
                allChecked+=1;
            }
        }
        return(allChecked);
    }
    function allNotChecked(){
        for (var i = 0; i < fotmInput.length; i++) {
            if (fotmInput[i].checked == false){
                allNotChecked+=1;
            }

        }
        return(allNotChecked);
    }
    function checkAll() {
           for (var i = 0; i < elements.length; i++) {
            if (fotmInput[i].checked == false) {
                fotmInput[i].checked = true;
            }
        }
    }
    function checkAll2() {
        for (var i = 0; i < elements.length; i++) {
            if (fotmInput[i].checked == true){
                fotmInput[i].checked = false;
            }
        }
    }
    function countItemCheck () {
        var countItemCheck = 0,
            todoCountAll = document.querySelector('.todoCountAll i');

        for (var i = 0; i < fotmInput.length; i++) {
            if (fotmInput[i].checked == false){
                countItemCheck+=1;
            }

        }
        return(todoCountAll.innerHTML = countItemCheck);
    }
    function showAll(){
        for (var i = 0; i < elements.length; i++) {
            if (fotmInput[i].checked == true){
                elements[i].classList.remove('li-active');
            } else {
                elements[i].classList.remove('li-completed');
            }

        }
    }
    function showActive(){
        for (var i = 0; i < elements.length; i++) {
            if (fotmInput[i].checked == true){
                elements[i].classList.add('li-active');
            } else {
                elements[i].classList.remove('li-completed');
            }

        }
    }
    function showCompleted(){
        for (var i = 0; i < elements.length; i++) {
            if (fotmInput[i].checked == false){
                elements[i].classList.add('li-completed');
            } else {
                elements[i].classList.remove('li-active');
            }

        }
    }
    function clearAll(){
        var articleUl = document.querySelector("ul#form");

        while (articleUl.hasChildNodes()) {
            articleUl.removeChild(articleUl.firstChild);
        }
        countItemCheck();
        document.querySelector('#main').style.display = 'none';
        document.querySelector('#footer').style.display = 'none';
    }


});
