// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

document.addEventListener('DOMContentLoaded', function () {
    const rouletteBtn = document.getElementById('roulette-btn');
    const resultContent = document.getElementById('result-content');
    const resultCategory = document.getElementById('result-category');

    rouletteBtn.addEventListener('click', async function () {
        
        rouletteBtn.disabled = true;
        rouletteBtn.textContent = '回転中・・・';

        try {
            const response = await fetch('/topics/roulette');
            const data = await response.json();

            setTimeout(() => {
                resultContent.textContent = data.content;
                
                rouletteBtn.disabled = false;
                rouletteBtn.textContent = '気に入らない？';
            }, 1000);

        } catch (error) {
            console.error('エラー:', error);
            rouletteBtn.disabled = false;
            rouletteBtn.textContent = 'スタート!'
        }
        
    });
});