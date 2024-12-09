document.addEventListener('DOMContentLoaded', function() {
  const card = document.getElementById('oracle-card');
  const frontImg = document.getElementById('front-img');
  const frontText = document.getElementById('front-text');
  const drawButton = document.getElementById('draw-button');

  // カードデータを用意（好きな枚数追加してね）
  const cardsData = [
    { img: "card1.jpg", text: "これは幸運をあらわすカードだよ" },
    { img: "card2.jpg", text: "このカードは新しいはじまりを示しているよ" },
    { img: "card3.jpg", text: "このカードは心のやすらぎをあらわしてるよ" }
  ];

  drawButton.addEventListener('click', function() {
    // ランダムにカードを選ぶ
    const randomIndex = Math.floor(Math.random() * cardsData.length);
    const selectedCard = cardsData[randomIndex];

    // 選んだカードの表面画像とテキストを変更
    frontImg.src = selectedCard.img;
    frontText.textContent = selectedCard.text;

    // カードをひっくり返す
    card.classList.add('flipped');
  });

  // カードをもう一度裏に戻したい時は、またクラスを消せばOK
  // card.classList.remove('flipped');
});
