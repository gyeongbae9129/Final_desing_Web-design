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
    imageUrl: "../img/sozai/茶色の破片＿みどり.png",
    title: "茶色の破片",
    sub_title: "sub-title",
    description: "茶色の破片に関する説明文です。",
  },
  {
    imageUrl: "../img/sozai/木辺マーク＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/白発泡＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/岩ブロック＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/丸い砥石＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/廃材１＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/絵筆＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/絵の具_みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/ガラス片＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/カラフル裏＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/カラフル表＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/カラフルな何か＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/チョン丸＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
  {
    imageUrl: "../img/sozai/パレット表＿みどり.png",
    title: "이미지 1",
    sub_title: "서브타이틀 1",
    description: "이미지 1에 대한 설명문입니다.",
  },
];

// 100vw x 100vh 화면 크기
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// 이미지를 표시할 횟수
const numImages = 14;

for (let i = 0; i < numImages; i++) {
  // 랜덤 이미지 데이터 선택
  const randomImageData = imageData[Math.floor(Math.random() * imageData.length)];

  // 랜덤 크기 및 위치 설정
  const imageSize = Math.floor(Math.random() * 300) + 200; // 이미지 크기 범위: 100에서 300 사이
  const xPos = Math.random() * screenWidth;
  const yPos = Math.random() * screenHeight;

  // 랜덤 회전 각도 설정
  const rotationAngle = Math.floor(Math.random() * 360);

  // 이미지 엘리먼트 생성 및 스타일 설정
  const img = document.createElement("img");
  img.src = randomImageData.imageUrl;
  img.className = "random-image";
  img.style.width = `${imageSize}px`;
  img.style.height = `${imageSize}px`;
  img.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${rotationAngle}deg)`;

  // 타이틀 및 설명문 엘리먼트 생성 및 스타일 설정
  const infoDiv = document.createElement("div");
  infoDiv.className = "image-info";
  infoDiv.innerHTML = `<h3>${randomImageData.title}</h3><p>${randomImageData.description}</p>`;
  infoDiv.style.left = `${xPos}px`;
  infoDiv.style.top = `${yPos}px`;

  // 이미지와 타이틀, 설명문을 body에 추가
  document.querySelector(".canvas").appendChild(img);
}
