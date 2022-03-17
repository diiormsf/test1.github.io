
var cheks = 1
var one = 1
function cheksoun() {


if(cheks == one ){cheks=2;
soudS();
}else{cheks=1; offsoundS()}


}


function soudS() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'click.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}




function offsoundS() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'offclick.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}