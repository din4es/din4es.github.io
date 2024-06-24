var y1, y2, y3, y4, y5;

function display() {
    x = -1;
    x = document.getElementById('country').value;
    if(x=="Италия") {
        document.getElementById('tur1').style.display= "block";
        document.getElementById('tur2').style.display= "none";
        document.getElementById('tur3').style.display= "none";

        document.getElementById('tur1_1').style.display= "none";
        document.getElementById('tur1_2').style.display= "none";
        document.getElementById('tur2_1').style.display= "none";
        document.getElementById('tur2_2').style.display= "none";
        document.getElementById('tur3_1').style.display= "none";
        document.getElementById('tur3_2').style.display= "none";


        document.getElementById('tur').style.display= "block";
        document.getElementById('zone').style.display= "none";
    }
    if(x=="Франция") {
        document.getElementById('tur1').style.display= "none";
        document.getElementById('tur2').style.display= "block";
        document.getElementById('tur3').style.display= "none";

        document.getElementById('tur1_1').style.display= "none";
        document.getElementById('tur1_2').style.display= "none";
        document.getElementById('tur2_1').style.display= "none";
        document.getElementById('tur2_2').style.display= "none";
        document.getElementById('tur3_1').style.display= "none";
        document.getElementById('tur3_2').style.display= "none";

        document.getElementById('tur').style.display= "block";
        document.getElementById('zone').style.display= "none";
    }
    if(x=="Германия") {
        document.getElementById('tur1').style.display= "none";
        document.getElementById('tur2').style.display= "none";
        document.getElementById('tur3').style.display= "block";

        document.getElementById('tur1_1').style.display= "none";
        document.getElementById('tur1_2').style.display= "none";
        document.getElementById('tur2_1').style.display= "none";
        document.getElementById('tur2_2').style.display= "none";
        document.getElementById('tur3_1').style.display= "none";
        document.getElementById('tur3_2').style.display= "none";

        document.getElementById('tur').style.display= "block";
        document.getElementById('zone').style.display= "none";
    }
    
}

function display1() {
    y1 = document.getElementById('tur1').value;
       
    if(y1=="Рим") {
        document.getElementById('tur1_1').style.display= "block";
        document.getElementById('tur1_2').style.display= "none";

        document.getElementById('zone').style.display= "block";
    }
    if(y1=="Болонья и окрестности") {
        document.getElementById('tur1_1').style.display= "none";
        document.getElementById('tur1_2').style.display= "block";

        document.getElementById('zone').style.display= "block";
    }
}
function display2() {
    y2 = document.getElementById('tur2').value;

    if(y2=="Париж и Нормандия") {
        document.getElementById('tur2_1').style.display= "block";
        document.getElementById('tur2_2').style.display= "none";

        document.getElementById('zone').style.display= "block";
    }
    if(y2=="Париж и Версаль") {
        document.getElementById('tur2_1').style.display= "none";
        document.getElementById('tur2_2').style.display= "block";

        document.getElementById('zone').style.display= "block";
    }
}
function display3() {
    y3 = document.getElementById('tur3').value;

    if(y3=="Мюнхен + Нюрнберг + Прага") {
        document.getElementById('tur3_1').style.display= "block";
        document.getElementById('tur3_2').style.display= "none";

        document.getElementById('zone').style.display= "block";
    }
    if(y3=="Мюнхен + Будапешт") {
        document.getElementById('tur3_1').style.display= "none";
        document.getElementById('tur3_2').style.display= "block";

        document.getElementById('zone').style.display= "block";
    }
}