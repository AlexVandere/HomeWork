 let Age= prompt('Дата вашого нарожденя')
let Сity = prompt('Місце проживаня')
let Sport = prompt('Ваш улюблений вид спорту')



let ukraineCapital = "Київ";
let usaCapital = "Вашингтон";
let ukCapital = "Лондон";


 if(Age){
    alert(Age)

 }else if (Age==null){
   
   alert('Шкода, що Ви не захотіли ввести свій,Дата вашого нарожденя')
 }


if (Sport === ukraineCapital) {
  alert("Ти живеш у столиці України");
} else if (Sport === usaCapital) {
  alert("Ти живеш у столиці Сполучених Штатів");
} else if (Sport === ukCapital) {
  alert("Ти живеш у столиці Великої Британії");

}else if (Sport==null) {
   alert('Шкода, що Ви не захотіли ввести своє,місце проживаня')

}else {
  alert("Ти живеш у місті " + Sport );
}



  //№2 Частина 
 if(Сity=='футбол'){
  Сity='Кріштіано Роналдо'
alert('круто ти хоч стати'+':'+Сity)
 
 }else if (Сity=='Бокс'){
   c='Олексадр Усик'
   alert('круто ти хоч стати'+' :'+Сity)

 }else if (Сity=='Баскетбол'){
   c='Шакила О`нил'
   alert('круто ти хоч стати'+' :'+Сity)

 }else if (Сity==null){
   alert('Шкода, що Ви не захотіли ввести,ваш улюблений вид спорту')
 
 }





