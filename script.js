/**
 * テストリポジトリのJavaScriptファイル
 * インタラクティブな機能を提供します
 */

// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
    console.log('スクリプトが読み込まれました');
    initializeEvents();
});

/**
 * イベントリスナーの初期化
 */
function initializeEvents() {
    // ボタン要素の追加
    const container = document.querySelector('.container');
    
    // ボタンコンテナの作成
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    buttonContainer.style.margin = '20px 0';
    container.appendChild(buttonContainer);
    
    // テキスト変更ボタンの追加
    const changeTextButton = document.createElement('button');
    changeTextButton.textContent = 'テキストを変更';
    changeTextButton.style.padding = '8px 16px';
    changeTextButton.style.marginRight = '10px';
    changeTextButton.style.backgroundColor = '#0366d6';
    changeTextButton.style.color = 'white';
    changeTextButton.style.border = 'none';
    changeTextButton.style.borderRadius = '4px';
    changeTextButton.style.cursor = 'pointer';
    
    // アニメーションボタンの追加
    const animateButton = document.createElement('button');
    animateButton.textContent = 'アニメーション';
    animateButton.style.padding = '8px 16px';
    animateButton.style.backgroundColor = '#28a745';
    animateButton.style.color = 'white';
    animateButton.style.border = 'none';
    animateButton.style.borderRadius = '4px';
    animateButton.style.cursor = 'pointer';
    
    // ボタンの追加
    buttonContainer.appendChild(changeTextButton);
    buttonContainer.appendChild(animateButton);
    
    // 結果表示用の要素
    const resultElement = document.createElement('div');
    resultElement.id = 'result';
    resultElement.style.margin = '20px 0';
    resultElement.style.padding = '20px';
    resultElement.style.border = '1px solid #ddd';
    resultElement.style.borderRadius = '4px';
    resultElement.textContent = 'ここに結果が表示されます';
    container.appendChild(resultElement);
    
    // イベントリスナーの追加
    changeTextButton.addEventListener('click', changeText);
    animateButton.addEventListener('click', animateElement);
}

/**
 * テキスト変更関数
 */
function changeText() {
    const result = document.getElementById('result');
    const texts = [
        'こんにちは、世界！',
        'JavaScriptは楽しい！',
        'GitHubでコードを管理しよう',
        'テキストが変更されました',
        'プログラミングは創造的な活動です'
    ];
    
    // ランダムなテキストを選択
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    result.textContent = randomText;
    
    // 色をランダムに変更
    const colors = ['#0366d6', '#28a745', '#d73a49', '#6f42c1', '#f66a0a'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    result.style.color = randomColor;
}

/**
 * アニメーション関数
 */
function animateElement() {
    const result = document.getElementById('result');
    
    // 現在のスタイルを保存
    const originalBg = result.style.backgroundColor;
    const originalTransform = result.style.transform;
    
    // アニメーション効果
    result.style.transition = 'all 0.5s ease';
    result.style.backgroundColor = '#f6f8fa';
    result.style.transform = 'scale(1.05)';
    
    // 元に戻す
    setTimeout(() => {
        result.style.backgroundColor = originalBg;
        result.style.transform = originalTransform;
    }, 500);
}
