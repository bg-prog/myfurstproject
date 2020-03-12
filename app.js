//Тоглогчын тоглох ээлжийг хадгалдаг хувьсагч 0 байвал эхний тоглогч 1 байвал хоёрдахь тоглогч гэж ойлгоё
var activePlayer = 0;
//Буусан шооны оноог хадгалдаг хувьсагч 1-6 хүртэлх санамсаргүй утга олгоно
var diceNumber = 0;
//Тоглогчын буусан оноог хадгалдаг хувьсагч
var roundScore = 0;
//Тоглогчын нийт оноог хадгалдаг хувьсагч тассив зарлана эхний элемэнт нь эхний тоглогч
var score = [0, 0];

// программ эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

//бичиглэл хэмнэх үүднээс хувьсагч зарлалаа
var diceDom = document.querySelector(".dice");
//шооны дүрсийг харагдаргүй болгох
diceDom.style.display = "none";

//roll dice button ii eventiig hiilee
document.querySelector(".btn-roll").addEventListener("click", function() {
  //1-6 хүртэлх санамсаргүй тоо олгох
  diceNumber = Math.floor(Math.random() * 6 + 1);
  // шооны тоогоор зургыг гаргах
  diceDom.src = "dice-" + diceNumber + ".png";
  //   зургыг харуулах
  diceDom.style.display = "block";
  // буусан тоо 1 ээс ялгаатай бол идэвтэй тоглогчын оноог нэмнэ
  if (diceNumber != 1) {
    // шооны буусан тоо 1 ээс ялгаатай байна
  } else {
    // шоо 1 буусан байна
  }
});
