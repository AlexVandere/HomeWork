 let Age= prompt('Дата вашого нарожденя')
let Сity = prompt('Місце проживаня')
let Sport = prompt('Ваш улюблений вид спорту')



let ukr = "Київ";
let usa = "Вашингтон";
let uk = "Лондон";


 if(Age){
    alert(Age)

 }else if (Age==null){
   
   alert('Шкода, що Ви не захотіли ввести свій,Дата вашого нарожденя')
 }


if (Сity === ukr) {
  alert("Ти живеш у столиці України");
} else if (Сity === usa) {
  alert("Ти живеш у столиці Сполучених Штатів");
} else if (Сity === uk) {
  alert("Ти живеш у столиці Великої Британії");

}else if (Сity === null) {
   alert('Шкода, що Ви не захотіли ввести своє,місце проживаня')

}else {
  alert("Ти живеш у місті " + Сity );
}



  //№2 Частина 
 if(Sport=='футбол'){
  Sport='Кріштіано Роналдо'
alert('круто ти хоч стати'+':'+Sport)
 
 }else if (Sport=='бокс'){
  Sport='Олексадр Усик'
   alert('круто ти хоч стати'+' :'+Sport)

 }else if (Sport=='баскетбол'){
  Sport='Шакила О`нил'
   alert('круто ти хоч стати'+' :'+Sport)

 }else if (Sport==null){
   alert('Шкода, що Ви не захотіли ввести,ваш улюблений вид спорту')
 console.log(Sport)
 }





