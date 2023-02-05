const img = document.querySelector("#img");
const text = document.querySelector("h2");

const header =  document.querySelector("h1");


const show = document.querySelector(".hidden");
const ul = document.querySelector("ul");
const list = document.createElement("li");
list.classList.add("list");
ul.appendChild(list);

const aOne = document.createElement("a");
aOne.classList.add("link");
list.appendChild(aOne);


const listTwo = document.createElement("li");
listTwo.classList.add("list");
ul.appendChild(listTwo);
const aTwo = document.createElement("a");
aTwo.classList.add("link");
listTwo.appendChild(aTwo);


const listThree = document.createElement("li");
listThree.classList.add("list");
ul.appendChild(listThree);
const aThree = document.createElement("a");
aThree.classList.add("link");
listThree.appendChild(aThree);


const listFour = document.createElement("li");
listFour.classList.add("list");
ul.appendChild(listFour);
const aFour = document.createElement("a");
aFour.classList.add("link");
listFour.appendChild(aFour);


const listFive = document.createElement("li");
listFive.classList.add("list");
ul.appendChild(listFive);
const aFive = document.createElement("a");
aFive.classList.add("link");
listFive.appendChild(aFive);


const listSix = document.createElement("li");
listSix.classList.add("list");
ul.appendChild(listSix);
const aSix = document.createElement("a");
aSix.classList.add("link");
listSix.appendChild(aSix);


const listSeven = document.createElement("li");
listSeven.classList.add("list");
ul.appendChild(listSeven);
const aSeven = document.createElement("a");
aSeven.classList.add("link");
listSeven.appendChild(aSeven);

const listEight = document.createElement("li");
listEight.classList.add("list");
ul.appendChild(listEight);
const aEight = document.createElement("a");
aEight.classList.add("link");
listEight.appendChild(aEight);

const listNine = document.createElement("li");
listNine.classList.add("list");
ul.appendChild(listNine);
const aNine = document.createElement("a");
aNine.classList.add("link");
listNine.appendChild(aNine);

const listTen = document.createElement("li");
listTen.classList.add("list");
ul.appendChild(listTen);
const aTen = document.createElement("a");
aTen.classList.add("link");
listTen.appendChild(aTen);


const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");

const buttonContainer= document.querySelector(".btn");
const btnThree = document.createElement("button");
btnThree.classList.add("btnThree");
buttonContainer.appendChild(btnThree);

const btnFour = document.createElement("button");
btnFour.classList.add("btnFour");
buttonContainer.appendChild(btnFour);

const btnFive = document.createElement("button");
btnFive.classList.add("btnFive");
buttonContainer.appendChild(btnFive);

const btnSix = document.createElement("button");
btnSix.classList.add("btnSix");
buttonContainer.appendChild(btnSix);

const btnSeven = document.createElement("button");
btnSeven.classList.add("btnSeven");
buttonContainer.appendChild(btnSeven);

btnOne.addEventListener("click", year);
btnTwo.addEventListener("click", genre);

function year(){

    img.setAttribute("src", "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")

    text.innerHTML = "Выбери год выпуска фильма";
    btnOne.innerHTML = "2022";
    btnTwo.innerHTML = "2021";

    btnThree.style.display= "block";
    btnThree.innerHTML = "2020";

    btnFour.style.display= "block";
    btnFour.innerHTML = "2019";

    btnFive.style.display= "block";
    btnFive.innerHTML = "2018";

    btnSix.style.display= "block";
    btnSix.innerHTML = "2017";

    btnSeven.style.display= "block";
    btnSeven.innerHTML = "2016";

    btnOne.addEventListener("click", twentyTwo);
    btnTwo.addEventListener("click", twentyOne);
    btnThree.addEventListener("click", twenty);
    btnFour.addEventListener("click", nineteen);
    btnFive.addEventListener("click", eighteen);
    btnSix.addEventListener("click", seventeen);
    btnSeven.addEventListener("click", sixteen);
}

function twentyTwo(){


    header.textContent = "Лучшие фильмы 2022";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";
    aOne.innerText = "Анчартед: на картах не значится";
    aOne.href = "https://www.kinopoisk.ru/film/468373/";

    aTwo.innerText = "Доктор Стрэндж: В мультивселенной безумия";
    aTwo.href = "https://www.kinopoisk.ru/film/1219909/";

    aThree.innerText = "Соник 2";
    aThree.href = "https://www.kinopoisk.ru/film/1387469/";

    aFour.innerText = "Мир Юрского периода: Господство";
    aFour.href = "https://www.kinopoisk.ru/film/1115098/";

    aFive.innerText = "Тор: Любовь и гром";
    aFive.href = "https://www.kinopoisk.ru/film/1282688/";

    aSix.innerText = "Смерть на Ниле";
    aSix.href = "https://www.kinopoisk.ru/film/1103803/";

    aSeven.innerText = "Бэтмен";
    aSeven.href = "https://www.kinopoisk.ru/film/590286/";

    aEight.innerText = "Флешбэк";
    aEight.href = "https://www.kinopoisk.ru/film/1355142/";

    aNine.innerText = "Клон";
    aNine.href = "https://www.kinopoisk.ru/film/1378722/";

    aTen.innerText = "Первый встречный";
    aTen.href = "https://www.kinopoisk.ru/film/1261945/";

}

function twentyOne(){

    header.textContent = "Лучшие фильмы 2021";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Человек-паук: Нет пути домой";
    aOne.href = "https://www.kinopoisk.ru/film/1309570/";

    aTwo.innerText = "Зверопой 2";
    aTwo.href = "https://www.kinopoisk.ru/film/1009142/";

    aThree.innerText = "Круэлла";
    aThree.href = "https://www.kinopoisk.ru/film/804662/";

    aFour.innerText = "Шан-Чи и легенда десяти колец";
    aFour.href = "https://www.kinopoisk.ru/film/1219149/";

    aFive.innerText = "Лука";
    aFive.href = "https://www.kinopoisk.ru/film/1395801/";

    aSix.innerText = "Главный герой";
    aSix.href = "https://www.kinopoisk.ru/film/1199100/"

    aSeven.innerText = "Райя и последний дракон";
    aSeven.href = "https://www.kinopoisk.ru/film/1015471/";

    aEight.innerText = "Не время умирать";
    aEight.href = "https://www.kinopoisk.ru/film/706019/";

    aNine.innerText = "Веном 2";
    aNine.href = "https://www.kinopoisk.ru/film/1227967/";

    aTen.innerText = "Дом Gucci";
    aTen.href = "https://www.kinopoisk.ru/film/1449368/";
}

function twenty(){

    header.textContent = "Лучшие фильмы 2020";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Душа";
    aOne.href = "https://www.kinopoisk.ru/film/775273/";

    aTwo.innerText = "Джентльмены";
    aTwo.href = "https://www.kinopoisk.ru/film/1143242/";

    aThree.innerText = "Зов предков";
    aThree.href = "https://www.kinopoisk.ru/film/1060511/";

    aFour.innerText = "Плохие парни навсегда";
    aFour.href = "https://www.kinopoisk.ru/film/472386/";

    aFive.innerText = "После. Глава 2";
    aFive.href = "https://www.kinopoisk.ru/film/1281638/";

    aSix.innerText = "Город тайн";
    aSix.href = "https://www.kinopoisk.ru/film/1217828/";

    aSeven.innerText = "Удивительное путешествие Доктора Дулиттла";
    aSeven.href = "https://www.kinopoisk.ru/film/1042726/";

    aEight.innerText = "Великий";
    aEight.href = "https://www.kinopoisk.ru/film/1208173/";

    aNine.innerText = "Мулан";
    aNine.href = "https://www.kinopoisk.ru/film/918722/";

    aTen.innerText = "Довод";
    aTen.href = "https://www.kinopoisk.ru/film/1236063/";
}

function nineteen(){

    header.textContent = "Лучшие фильмы 2019";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "FORD против FERRARI";
    aOne.href = "https://www.kinopoisk.ru/film/835086/";

    aTwo.innerText = "Малефисента: Владычица тьмы";
    aTwo.href = "https://www.kinopoisk.ru/film/916498/";

    aThree.innerText = "Эверест";
    aThree.href = "https://www.kinopoisk.ru/film/1044976/";

    aFour.innerText = "Холодное сердце 2";
    aFour.href = "https://www.kinopoisk.ru/film/903831/";

    aFive.innerText = "Достать ножи";
    aFive.href = "https://www.kinopoisk.ru/film/1188529/";

    aSix.innerText = "В метре друг от друга";
    aSix.href = "https://www.kinopoisk.ru/film/1151373/";

    aSeven.innerText = "Собачья жизнь 2";
    aSeven.href = "https://www.kinopoisk.ru/film/1122114/";

    aEight.innerText = "Король Лев";
    aEight.href = "https://www.kinopoisk.ru/film/1005878/";

    aNine.innerText = "Мстители: Финал";
    aNine.href = "https://www.kinopoisk.ru/film/843650/";
    
    aTen.innerText = "Маленькие женщины";
    aTen.href = "https://www.kinopoisk.ru/film/807339/";
}

function eighteen(){

    header.textContent = "Лучшие фильмы 2018";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Как приручить дракона 3";
    aOne.href = "https://www.kinopoisk.ru/film/706655/";

    aTwo.innerText = "Зеленая книга";
    aTwo.href = "https://www.kinopoisk.ru/film/1108577/";

    aThree.innerText = "Богемская рапсодия";
    aThree.href = "https://www.kinopoisk.ru/film/568289/";

    aFour.innerText = "Мстители: Война бесконечности";
    aFour.href = "https://www.kinopoisk.ru/film/843649/";

    aFive.innerText = "Веном";
    aFive.href = "https://www.kinopoisk.ru/film/463634/";

    aSix.innerText = "Алита: Боевой ангел";
    aSix.href = "https://www.kinopoisk.ru/film/88173/";

    aSeven.innerText = "Первому игроку приготовиться";
    aSeven.href = "https://www.kinopoisk.ru/film/538225/";

    aEight.innerText = "Звезда родилась";
    aEight.href = "https://www.kinopoisk.ru/film/474935/";

    aNine.innerText = "Семья по-быстрому";
    aNine.href = "https://www.kinopoisk.ru/film/1108494/";

    aTen.innerText = "Суперсемейка 2";
    aTen.href = "https://www.kinopoisk.ru/film/839650/";
}

function seventeen(){

    header.textContent = "Лучшие фильмы 2017";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Тайна Коко";
    aOne.href = "https://www.kinopoisk.ru/film/679486/";

    aTwo.innerText = "Пираты Карибского моря: Мертвецы не рассказывают сказки";
    aTwo.href = "https://www.kinopoisk.ru/film/575180/";

    aThree.innerText = "Телохранитель киллера";
    aThree.href = "https://www.kinopoisk.ru/film/835877/";
    
    aFour.innerText = "Тор: Рагнарёк";
    aFour.href = "https://www.kinopoisk.ru/film/822709/";

    aFive.innerText = "Логан";
    aFive.href = "https://www.kinopoisk.ru/film/807682/";

    aSix.innerText = "Собачья жизнь";
    aSix.href = "https://www.kinopoisk.ru/film/571896/";

    aSeven.innerText = "Стражи Галактики. Часть 2";
    aSeven.href = "https://www.kinopoisk.ru/film/841263/";

    aEight.innerText = "Джуманджи: Зов джунглей";
    aEight.href = "https://www.kinopoisk.ru/film/695609/";

    aNine.innerText = "Фердинанд";
    aNine.href = "https://www.kinopoisk.ru/film/818144/";

    aTen.innerText = "Гадкий я 3";
    aTen.href = "https://www.kinopoisk.ru/film/820599/";

    
}

function sixteen(){

    header.textContent = "Лучшие фильмы 2016";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Пассажиры";
    aOne.href = "https://www.kinopoisk.ru/film/470689/";

    aTwo.innerText = "Зверополис";
    aTwo.href = "https://www.kinopoisk.ru/film/775276/";

    aThree.innerText = "По соображениям совести";
    aThree.href = "https://www.kinopoisk.ru/film/649917/";

    aFour.innerText = "До встречи с тобой";
    aFour.href = "https://www.kinopoisk.ru/film/807318/";

    aFive.innerText = "Моана";
    aFive.href = "https://www.kinopoisk.ru/film/837530/";

    aSix.innerText = "Варкрафт";
    aSix.href = "https://www.kinopoisk.ru/film/277328/";

    aSeven.innerText = "Доктор Стрэндж";
    aSeven.href = "https://www.kinopoisk.ru/film/409600/";

    aEight.innerText = "Дом странных детей мисс Перегрин";
    aEight.href = "https://www.kinopoisk.ru/film/648440/";

    aNine.innerText = "Алиса в Зазеркалье";
    aNine.href = "https://www.kinopoisk.ru/film/723988/";

    aTen.innerText = "Обещание";
    aTen.href = "https://www.kinopoisk.ru/film/916069/";
}

function genre(){

    img.setAttribute("src", "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")
    text.innerHTML = "Выбери год жанр фильма";
    btnOne.innerHTML = "Боевик";
    btnTwo.innerHTML = "Фантастика";

    btnThree.style.display= "block";
    btnThree.innerHTML = "Комедия";

    btnFour.style.display= "block";
    btnFour.innerHTML = "Мелодрама";

    btnFive.style.display= "block";
    btnFive.innerHTML = "Приключения";

    btnSix.style.display= "block";
    btnSix.innerHTML = "Триллер";

    btnSeven.style.display= "block";
    btnSeven.innerHTML = "Ужасы";

    btnOne.addEventListener("click", action);
    btnTwo.addEventListener("click", fantasy);
    btnThree.addEventListener("click", comedy);
    btnFour.addEventListener("click", melodrama);
    btnFive.addEventListener("click", adventure);
    btnSix.addEventListener("click", thriller);
    btnSeven.addEventListener("click", horror);
}

function action(){

    header.textContent = "Лучшие фильмы в жанре боевик";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Человек-паук: Нет пути домой";
    aOne.href = "https://www.kinopoisk.ru/film/1309570/";

    aTwo.innerText = "Пираты Карибского моря: Проклятие черной жемчужины";
    aTwo.href = "https://www.kinopoisk.ru/film/4374/";
    
    aThree.innerText = "Аватар";
    aThree.href = "https://www.kinopoisk.ru/film/251733/";

    aFour.innerText = "Начало";
    aFour.href = "https://www.kinopoisk.ru/film/447301/";

    aFive.innerText = "Шан-Чи и легенда десяти колец";
    aFive.href = "https://www.kinopoisk.ru/film/1219149/";

    aSix.innerText = "Джентльмены";
    aSix.href = "https://www.kinopoisk.ru/film/1143242/";

    aSeven.innerText = "Терминатор 2: судный день";
    aSeven.href = "https://www.kinopoisk.ru/film/444/";

    aEight.innerText =  "Властелин Колец: Братство Кольца";
    aEight.href = "https://www.kinopoisk.ru/film/328/";

    aNine.innerText = "Матрица";
    aNine.href = "https://www.kinopoisk.ru/film/301/";

    aTen.innerText = "Пираты Карибского моря: На странных берегах";
    aTen.href = "https://www.kinopoisk.ru/film/427076/";
}
function fantasy(){

    header.textContent = "Лучшие фильмы в жанре фантастика";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Человек-паук: Нет пути домой";
    aOne.href = "https://www.kinopoisk.ru/film/1309570/";

    aTwo.innerText = "Аватар";
    aTwo.href =  "https://www.kinopoisk.ru/film/251733/";

    aThree.innerText = "Я - легенда";
    aThree.href = "https://www.kinopoisk.ru/film/195524/";

    aFour.innerText = "Начало";
    aFour.href = "https://www.kinopoisk.ru/film/447301/";

    aFive.innerText = "Терминатор 2: судный день";
    aFive.href = "https://www.kinopoisk.ru/film/444/";

    aSix.innerText = "Матрица";
    aSix.href = "https://www.kinopoisk.ru/film/301/";

    aSeven.innerText = "Назад в будущее";
    aSeven.href = "https://www.kinopoisk.ru/film/476/";

    aEight.innerText = "Доктор Стрэндж: В мультивселенной безумия";
    aEight.href = "https://www.kinopoisk.ru/film/1219909/";

    aNine.innerText = "Назад в будущее 3";
    aNine.href = "https://www.kinopoisk.ru/film/7103/";

    aTen.innerText = "Мстители: Война бесконечности";
    aTen.href = "https://www.kinopoisk.ru/film/843649/";
}

function comedy(){

    header.textContent = "Лучшие фильмы в жанре комедия";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Король Лев";
    aOne.href = "https://www.kinopoisk.ru/film/2360/";

    aTwo.innerText = "Душа";
    aTwo.href = "https://www.kinopoisk.ru/film/775273/";

    aThree.innerText = "Как приручить дракона 3";
    aThree.href = "https://www.kinopoisk.ru/film/706655/";

    aFour.innerText = "Круэлла";
    aFour.href = "https://www.kinopoisk.ru/film/804662/";

    aFive.innerText = "Шан-Чи и легенда десяти колец";
    aFive.href = "https://www.kinopoisk.ru/film/1219149/";

    aSix.innerText = "Форрест Гамп";
    aSix.href = "https://www.kinopoisk.ru/film/448/";

    aSeven.innerText = "Пираты Карибского моря: На странных берегах";
    aSeven.href = "https://www.kinopoisk.ru/film/427076/";

    aEight.innerText = "Назад в будущее";
    aEight.href = "https://www.kinopoisk.ru/film/476/";

    aNine.innerText = "Достать ножи";
    aNine.href = "https://www.kinopoisk.ru/film/1188529/";

    aTen.innerText = "Назад в будущее 3";
    aTen.href = "https://www.kinopoisk.ru/film/7103/";
}

function melodrama(){

    header.textContent = "Лучшие фильмы в жанре мелодрама";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Форрест Гамп";
    aOne.href = "https://www.kinopoisk.ru/film/448/";

    aTwo.innerText = "Титаник";
    aTwo.href = "https://www.kinopoisk.ru/film/2213/";

    aThree.innerText = "В метре друг от друга";
    aThree.href = "https://www.kinopoisk.ru/film/1151373/";

    aFour.innerText = "Сумерки";
    aFour.href = "https://www.kinopoisk.ru/film/401177/";

    aFive.innerText = "Пассажиры";
    aFive.href = "https://www.kinopoisk.ru/film/470689/";

    aSix.innerText = "Чего хотят женщины";
    aSix.href = "https://www.kinopoisk.ru/film/880/";

    aSeven.innerText = "Загадочная история Бенджамина Баттона";
    aSeven.href = "https://www.kinopoisk.ru/film/81555/";

    aEight.innerText = "Маленькие женщины";
    aEight.href= "https://www.kinopoisk.ru/film/807339/";

    aNine.innerText = "Алита: Боевой ангел";
    aNine.href = "https://www.kinopoisk.ru/film/88173/";

    aTen.innerText = "Сумерки. Сага. Новолуние";
    aTen.href = "https://www.kinopoisk.ru/film/420224/";
}

function adventure(){

    header.textContent = "Лучшие фильмы в жанре приключения";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Человек-паук: Нет пути домой";
    aOne.href = "https://www.kinopoisk.ru/film/1309570/";

    aTwo.innerText = "Король Лев";
    aTwo.href = "https://www.kinopoisk.ru/film/2360/";

    aThree.innerText = "Пираты Карибского моря: Проклятие черной жемчужины";
    aThree.href = "https://www.kinopoisk.ru/film/4374/";

    aFour.innerText = "Душа";
    aFour.href = "https://www.kinopoisk.ru/film/775273/";

    aFive.innerText = "Как приручить дракона 3";
    aFive.href = "https://www.kinopoisk.ru/film/706655/";

    aSix.innerText = "101 далматинец";
    aSix.href = "https://www.kinopoisk.ru/film/8129/";

    aSeven.innerText = "Изгой";
    aSeven.href = "https://www.kinopoisk.ru/film/627/";

    aEight.innerText = "Лука";
    aEight.href = "https://www.kinopoisk.ru/film/1395801/";

    aNine.innerText = "Терминатор 2: судный день";
    aNine.href =  "https://www.kinopoisk.ru/film/444/";

    aTen.innerText = "Властелин Колец: Братство Кольца";
    aTen.href = "https://www.kinopoisk.ru/film/328/";
}
function thriller(){

    header.textContent = "Лучшие фильмы в жанре триллер";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Побег из Шоушенка";
    aOne.href = "https://www.kinopoisk.ru/film/326/";

    aTwo.innerText = "Аватар";
    aTwo.href = "https://www.kinopoisk.ru/film/251733/";

    aThree.innerText = "Начало";
    aThree.href = "https://www.kinopoisk.ru/film/447301/";

    aFour.innerText = "Терминатор 2: судный день";
    aFour.href = "https://www.kinopoisk.ru/film/444/";

    aFive.innerText = "Матрица";
    aFive.href = "https://www.kinopoisk.ru/film/301/";

    aSix.innerText = "Области тьмы";
    aSix.href = "https://www.kinopoisk.ru/film/462606/";

    aSeven.innerText = "Законопослушный гражданин";
    aSeven.href = "https://www.kinopoisk.ru/film/406408/";

    aEight.innerText = "Не время умирать";
    aEight.href = "https://www.kinopoisk.ru/film/706019/";

    aNine.innerText = "Привидение";
    aNine.href = "https://www.kinopoisk.ru/film/1991/"

    aTen.innerText = "Джуманджи"
    aTen.href = "https://www.kinopoisk.ru/film/8161/";
}


function horror(){

    header.textContent = "Лучшие фильмы в жанре ужасы";
    img.style.display = "none";
    text.style.display = "none";
    buttonContainer.style.display = "none";

    show.style.display = "block";

    aOne.innerText = "Я - легенда";
    aOne.href = "https://www.kinopoisk.ru/film/195524/";

    aTwo.innerText = "Сонная лощина";
    aTwo.href = "https://www.kinopoisk.ru/film/5622/";

    aThree.innerText = "Мумия";
    aThree.href = "https://www.kinopoisk.ru/film/4484/";
    
    aFour.innerText = "Чужой";
    aFour.href = "https://www.kinopoisk.ru/film/386/";

    aFive.innerText = "Поворот не туда";
    aFive.href = "https://www.kinopoisk.ru/film/4901/";

    aSix.innerText = "От заката до рассвета";
    aSix.href = "https://www.kinopoisk.ru/film/4815/";

    aSeven.innerText = "Клаустрофобы";
    aSeven.href = "https://www.kinopoisk.ru/film/1065805/";

    aEight.innerText = "Доктор Сон";
    aEight.href = "https://www.kinopoisk.ru/film/1048255/";

    aNine.innerText = "Добро пожаловать в Зомбилэнд";
    aNine.href = "https://www.kinopoisk.ru/film/427122/";

    aTen.innerText = "Заклятие";
    aTen.href = "https://www.kinopoisk.ru/film/468994/";
}

