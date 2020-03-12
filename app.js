//Тоглогчын тоглох ээлжийг хадгалдаг хувьсагч 0 байвал эхний тоглогч 1 байвал хоёрдахь тоглогч гэж ойлгоё
var activePlayer = 0;
//Буусан шооны оноог хадгалдаг хувьсагч 1-6 хүртэлх санамсаргүй утга олгоно
var diceScores = Math.floor(Math.random() * 6 + 1);
//Тоглогчын буусан оноог хадгалдаг хувьсагч
var roundScore = 0;
//Тоглогчын нийт оноог хадгалдаг хувьсагч тассив зарлана эхний элемэнт нь эхний тоглогч
var score = [0, 0];

// программ эхлэхэд бэлтгэе
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
