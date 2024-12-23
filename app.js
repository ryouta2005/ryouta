function checkFortune() {
    var colour = document.getElementById('colour-select').value;
    var number = parseInt(document.getElementById('number-input').value, 10);
    var result = "悪い運勢"; //Default value

    if (colour === "黒" && number === 0) {
        result = "良い兆しがあります。";
    } else if (colour === "黒" && number === 1) {
        result = "運が開けるかもしれません。";
    } else if (colour === "黒" && number === 2) {
        result = "注意が必要です。";
    } else if (colour === "白" && number === 0) {
        result = "良い運勢です。";
    } else if (colour === "白" && number === 1) {
        result = "幸運が訪れるでしょう。";
    } else if (colour === "白" && number === 2) {
        result = "少しの努力が必要です。";
    } else if (colour === "オレンジ" && number === 0) {
        result = "運が悪いかもしれません。";
    } else if (colour === "オレンジ" && number === 1) {
        result = "素晴らしい出来事が待っています。";
    } else if (colour === "オレンジ" && number === 2) {
        result = "良い運勢です。";
    } else if (colour === "みどり" && number === 0) {
        result = "運が良いです。";
    } else if (colour === "みどり" && number === 1) {
        result = "素晴らしい出来事が近づいています。";
    } else if (colour === "みどり" && number === 2) {
        result = "注意が必要です。";
    }

    // Display the result in the HTML element with id="result-output"
    document.getElementById('result-output').innerText = "あなたの今週の占いは【" + result + "】;
}
