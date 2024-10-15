// background.js

const numberOfStars = 200; // Увеличено количество звезд для насыщенности
const numberOfComets = 5; // Количество комет одновременно
const body = document.body;

// Функция для генерации звезд
for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = ${Math.random() * 100}%;
    star.style.left = ${Math.random() * 100}%;
    star.style.animationDelay = ${Math.random() * 5}s;
    const size = Math.random() * 2 + 0.5; // Размеры от 0.5px до 2.5px
    star.style.width = ${size}px;
    star.style.height = ${size}px;
    // Добавление цвета звезды
    const colorOptions = ['#ffffff', '#ffe9c4', '#c5e1a5', '#81d4fa', '#ffccbc'];
    star.style.background = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    star.style.opacity = ${Math.random() * 0.5 + 0.3}; // От 0.3 до 0.8
    body.appendChild(star);
}

// Функция для генерации комет
for (let i = 0; i < numberOfComets; i++) {
    createComet();
}

function createComet() {
    const comet = document.createElement('div');
    comet.classList.add('comet');
    comet.style.top = ${Math.random() * 100}%;
    comet.style.left = ${-10 - Math.random() * 100}px; // Начинаем за пределами экрана
    const size = Math.random() * 2 + 1;
    comet.style.width = ${size}px;
    comet.style.height = ${size}px;
    comet.style.background = hsl(${Math.random() * 360}, 100%, 75%);
    body.appendChild(comet);

    // Удаление кометы после окончания анимации и создание новой
    comet.addEventListener('animationend', () => {
        comet.remove();
        // Задержка перед созданием новой кометы
        setTimeout(createComet, Math.random() * 10000);
    });
}
