var btn = document.querySelector('.calculate-btn');
var showResult = document.querySelector('.wynik');
function checkValue(event){
    var inputVal=  new Number(document.getElementById('test1').value); 
    if (inputVal == '' || inputVal == null || inputVal == '0')
    {
       showResult.textContent = "Wprowadź liczbe większą od 0";
    }
   //else if (inputVal.charAt(0) == "-") {showResult.textContent = "wprowadz liczbę dodatnią"}
    else 
    {
        var rata3m = (inputVal/3)+((inputVal*0.03)/3);
        rata3m = (Math.round(rata3m*100) / 100);
        var rata6m = (inputVal/6)+((inputVal*0.04)/6);
        rata6m = (Math.round(rata6m*100) / 100);
        var rata9m = (inputVal/9)+((inputVal*0.05)/9);
        rata9m = (Math.round(rata9m*100) / 100);
        var rata12m = (inputVal/12)+((inputVal*0.06)/12);
        rata12m = (Math.round(rata12m*100) / 100);
        showResult.innerHTML ="</br><span>3 raty po: " + rata3m + " zł</span>" + 
                               "</br><span>6 rat po: " + rata6m + " zł</span>" +
                               "</br><span>9 rat po: " + rata9m + " zł</span>" +
                               "</br><span>12 rat po: " + rata12m + " zł</span>"
    }
}
btn.addEventListener('click', checkValue);
