var date = new Date();
var a = new Intl.DateTimeFormat("ja-JP", {
  dateStyle: "short",
  timeStyle: "short",
}).format(date);

const setDate = document.querySelector(".receipt-date");
setDate.innerHTML = a;

//canvas Random
// イメージ, タイトル, 説明文 データ
const imageData = [
  {
    imageUrl: "img/sozai/茶色の破片.webp",
    imageOriUrl: "img/sozai/original/茶色の破片.png",
    title: "茶色の破片",
    sub_title: "sub-title 1",
    description: "茶色の破片に関する説明文です。",
  },
  {
    imageUrl: "img/sozai/木辺マーク.webp",
    imageOriUrl: "img/sozai/original/木辺マーク.png",
    title: "木辺マーク",
    sub_title: "sub-title 2",
    description: "木辺マークに関する説明文です。",
  },
  {
    imageUrl: "img/sozai/白発泡.webp",
    imageOriUrl: "img/sozai/original/白発泡.png",
    title: "白発泡",
    sub_title: "sub-title 3",
    description: "白発泡に関する説明文です。",
  },
  {
    imageUrl: "img/sozai/岩ブロック.webp",
    imageOriUrl: "img/sozai/original/岩ブロック.png",
    title: "岩ブロック",
    sub_title: "sub-title 4",
    description: "岩ブロックに関する説明文です。",
  },
  {
    imageUrl: "img/sozai/丸い砥石.webp",
    imageOriUrl: "img/sozai/original/丸い砥石.png",
    title: "丸い砥石",
    sub_title: "sub-title 5",
    description: "丸い砥石に関する説明文です。",
  },
  {
    imageUrl: "img/sozai/廃材１.webp",
    imageOriUrl: "img/sozai/original/廃材１.png",
    title: "廃材１",
    sub_title: "sub-title 6",
    description: "廃材１に関する説明文です。",
  },
  {
    imageUrl: "img/sozai/絵筆.webp",
    imageOriUrl: "img/sozai/original/絵筆.png",
    title: "絵筆",
    sub_title: "sub-title 7",
    description: "絵筆に関する説明文です。",
  },
  {
    imageUrl: "img/sozai/絵の具.webp",
    imageOriUrl: "img/sozai/original/絵の具.png",
    title: "絵の具",
    sub_title: "sub-title 8",
    description: "絵の具に関する説明文です。",
  },
  {
    imageUrl: "img/sozai/ガラス片.webp",
    imageOriUrl: "img/sozai/original/ガラス片.png",
    title: "ガラス片",
    sub_title: "sub-title 9",
    description: "ガラス片に関する説明文です。",
  },
  {
    imageUrl: "img/sozai/カラフル裏.webp",
    imageOriUrl: "img/sozai/original/カラフル裏.png",
    title: "カラフル裏",
    sub_title: "sub-title 10",
    description: "カラフル裏に関する説明文です。",
  },
  {
    imageUrl: "img/sozai/カラフル表.webp",
    imageOriUrl: "img/sozai/original/カラフル表.png",
    title: "カラフル表",
    sub_title: "sub-title 11",
    description: "カラフル表に関する説明文です。",
  },
  {
    imageUrl: "img/sozai/カラフルな何か.webp",
    imageOriUrl: "img/sozai/original/カラフルな何か.png",
    title: "カラフルな何か",
    sub_title: "sub-title 12",
    description: "カラフルな何かに関する説明文です。",
  },
  {
    imageUrl: "img/sozai/チョン丸.webp",
    imageOriUrl: "img/sozai/original/チョン丸.png",
    title: "チョン丸",
    sub_title: "sub-title 13",
    description: "チョン丸に関する説明文です。",
  },
  {
    imageUrl: "img/sozai/パレット表.webp",
    imageOriUrl: "img/sozai/original/パレット表.png",
    title: "パレット表",
    sub_title: "sub-title 14",
    description: "パレット表に関する説明文です。",
  },
];

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const titleObj = document.querySelector(".main-title");
const subTitleObj = document.querySelector(".sub-title");
const descriptionObj = document.querySelector(".explanatory-text");

imageData.forEach((imageData) => {
  const imageSize = Math.floor(Math.random() * 500) + 200; // 이미지 크기 범위: 100에서 300 사이
  const xPos = Math.random() * screenWidth;
  const yPos = Math.random() * screenHeight;
  const rotationAngle = Math.floor(Math.random() * 360);
  const img = document.createElement("img");
  img.src = imageData.imageUrl;
  img.changeSrc = imageData.imageOriUrl;
  img.className = "random-image";
  img.style.width = `${imageSize}px`;
  img.style.height = `${imageSize}px`;
  img.dataset.title = imageData.title;
  img.dataset.sub_title = imageData.sub_title;
  img.dataset.description = imageData.description;
  img.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${rotationAngle}deg)`;
  //생성
  const canvas = document.querySelector(".canvas");
  canvas.appendChild(img);

  img.addEventListener("mouseover", handleImageHover);
});

function handleImageHover(event) {
  const img = event.target;
  const originalSrc = img.src; // Save the original src

  // On mouseover, set the src to imageOriUrl
  img.src = img.changeSrc;

  img.addEventListener("mouseout", function handleMouseOut() {
    // On mouseout, set the src back to imageUrl
    img.src = originalSrc;

    // Remove the event listener to avoid multiple bindings
    img.removeEventListener("mouseout", handleMouseOut);
  });

  const title = img.dataset.title;
  const subTitle = img.dataset.sub_title;
  const description = img.dataset.description;
  titleObj.textContent = `${title}`;
  subTitleObj.textContent = `${subTitle}`;
  descriptionObj.textContent = `${description}`;
  //애니메이션 반짝 효과
  titleObj.style.backgroundColor = "var(--main-color)";
  subTitleObj.style.backgroundColor = "var(--main-color)";
  descriptionObj.style.backgroundColor = "var(--main-color)";
  titleObj.style.color = "var(--main-bg)";
  subTitleObj.style.color = "var(--main-bg)";
  descriptionObj.style.color = "var(--main-bg)";
  setTimeout(function () {
    //0.4s후 애니메이션 사라짐
    titleObj.style.backgroundColor = "";
    subTitleObj.style.backgroundColor = "";
    descriptionObj.style.backgroundColor = "";
    titleObj.style.color = "";
    subTitleObj.style.color = "";
    descriptionObj.style.color = "";
  }, 400);
}

//article Link
function redirectToURL() {
  window.location.href = "article.html";
}
