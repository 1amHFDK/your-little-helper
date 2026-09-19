/* =========================================
   НАСТРОЙКИ
========================================= */

const TYPING_SPEED = 35;
const START_DELAY = 900;
const LONG_PRESS_TIME = 650;
const WAIT_EGG_TIME = 12000;


/* =========================================
   ПЕРВАЯ ЧАСТЬ ДИАЛОГА
========================================= */

const beforeGame = [

    {
        text: "О... ты пришла.",
        state: "calm"
    },

    {
        text: "Я уже начал думать, что ты передумаешь.",
        state: "thinking"
    },

    {
        text: "Хотя.. наверное, я бы всё равно подождал.",
        state: "happy"
    },

    {
        text: "Забавно.",
        state: "calm"
    },

    {
        text: "Я даже не знаю, с чего начать.",
        state: "thinking"
    },

    {
        text: "Наверное, с самого простого.",
        state: "calm"
    },

    {
        text: "Тебе совсем не обязательно сегодня быть сильной.",
        state: "serious"
    },

    {
        text: "Можно просто остановиться.",
        state: "calm"
    },

    {
        text: "Выдохнуть.",
        state: "thinking"
    },

    {
        text: "И хотя бы ненадолго перестать думать обо всём сразу.",
        state: "calm"
    },

    {
        text: "Ты ведь иногда слишком много от себя требуешь.",
        state: "serious"
    },

    {
        text: "Слишком много думаешь о том, правильно ли всё делаешь.",
        state: "thinking"
    },

    {
        text: "Сравниваешь себя с другими.",
        state: "sad"
    },

    {
        text: "Переживаешь из-за того, что ещё не успела.",
        state: "serious"
    },

    {
        text: "А потом забываешь посмотреть на то, сколько уже сделала.",
        state: "calm"
    },

    {
        text: "Я это замечаю.",
        state: "happy"
    },

    {
        text: "Даже если ты сама этого не замечаешь.",
        state: "happy"
    },

    {
        text: "И знаешь..",
        state: "thinking"
    },

    {
        text: "тебе не нужно выбаривать право на отдых.",
        state: "serious"
    },

    {
        text: "Не нужно быть идеальной, чтобы тебя любили.",
        state: "calm"
    },

    {
        text: "Не нужно постоянно улыбаться, чтобы рядом с тобой было хорошо.",
        state: "happy"
    },

    {
        text: "Можно иногда сказать: «я устала».",
        state: "calm"
    },

    {
        text: "И занешь, можно ничего не объяснять.",
        state: "thinking"
    },

    {
        text: "Можно просто остаться рядом.",
        state: "happy"
    },

    {
        text: "Вот как сейчас.",
        state: "calm"
    },

    {
        text: "Поэтому давай сегодня никуда не торопиться.",
        state: "happy"
    },

    {
        text: "У меня для тебя кое-что есть.",
        state: "thinking"
    },

    {
        text: "Ничего особенного.",
        state: "happy"
    },

    {
        text: "Просто маленькая игра.",
        state: "calm"
    },

    {
        text: "Эй, попробуешь собрать несколько фраз?",
        state: "happy"
    }

];


/* =========================================
   ВТОРАЯ ЧАСТЬ ДИАЛОГА
========================================= */

const afterGame = [

    {
        text: "Ты посмотри, получилось.",
        state: "happy"
    },

    {
        text: "Я знал, что ты справишься.",
        state: "happy"
    },

    {
        text: "Хотя некоторые слова я специально поставил не туда.",
        state: "thinking"
    },

    {
        text: "Не дуйся.",
        state: "happy"
    },

    {
        text: "Ты знала, с кем встречаешься.",
        state: "calm"
    },

    {
        text: "Мм.. не суть.",
        state: "happy"
    },

    {
        text: "Но если серьёзно.",
        state: "thinking"
    },

    {
        text: "всё, что там было написано, я неоднократко пытался донести до тебя.",
        state: "serious"
    },

    {
        text: "Ты можешь отдыхать.",
        state: "calm"
    },

    {
        text: "Можешь ошибаться.",
        state: "calm"
    },

    {
        text: "Можешь не знать, что делать дальше.",
        state: "thinking"
    },

    {
        text: "И всё равно оставаться собой.",
        state: "happy"
    },

    {
        text: "Мне кажется, это довольно веская причина никуда не спешить.",
        state: "calm"
    },

    {
        text: "Уже поздно.",
        state: "thinking"
    },

    {
        text: "Но.. я хочу ещё немножко побыть с тобой.",
        state: "sad"
    },

    {
        text: "Посмотри наверх!",
        state: "happy"
    },

    {
        text: "Там есть кое-что ещё.",
        state: "calm"
    },

    {
        text: "И это больше, нежели игра.",
        state: "thinking"
    }

];


const dialogue = [
    ...beforeGame,
    ...afterGame
];

const GAME_START = beforeGame.length;


/* =========================================
   ЭЛЕМЕНТЫ
========================================= */

const scene =
    document.getElementById("scene");

const character =
    document.getElementById("character");

const characterImage =
    document.getElementById("characterImage");

const pixelCanvas =
    document.getElementById("pixelCanvas");

const pixelContext =
    pixelCanvas
        ? pixelCanvas.getContext("2d")
        : null;


const dialogueBox =
    document.getElementById("dialogue");

const dialogueText =
    document.getElementById("dialogueText");

const dialogueNumber =
    document.getElementById("dialogueNumber");

const continueIndicator =
    document.getElementById("continueIndicator");


const phraseScreen =
    document.getElementById("phraseScreen");

const phraseProgress =
    document.getElementById("phraseProgress");

const wordBank =
    document.getElementById("wordBank");

const assembled =
    document.getElementById("assembled");

const phraseResult =
    document.getElementById("phraseResult");

const phraseNext =
    document.getElementById("phraseNext");


const starsScreen =
    document.getElementById("starsScreen");

const starsLayer =
    document.getElementById("starsLayer");

const starsMessage =
    document.getElementById("starsMessage");

const starsHint =
    document.getElementById("starsHint");

const starsFinish =
    document.getElementById("starsFinish");


const finalScreen =
    document.getElementById("finalScreen");

const restartBtn =
    document.getElementById("restartBtn");


const visitLabel =
    document.getElementById("visitLabel");


const eggToast =
    document.getElementById("eggToast");

const eggText =
    document.getElementById("eggText");


const hugOverlay =
    document.getElementById("hugOverlay");

const hugText =
    document.getElementById("hugText");


const music =
    document.getElementById("music");

const musicControl =
    document.getElementById("musicControl");

const musicLabel =
    document.getElementById("musicLabel");


if (music) {
    music.volume = 0.4;
}


/* =========================================
   СОСТОЯНИЕ
========================================= */

let currentIndex = 0;

let phase = "dialogue";

let isTyping = false;

let typingInterval = null;

let currentText = "";

let currentLetter = 0;


let clickCount = 0;

let hugShown = false;

let holdTimer = null;

let longPressTriggered = false;

let musicEnabled = false;

let pixelRevealStarted = false;

let waitTimer = null;

let eggTimeout = null;


/* =========================================
   СОСТОЯНИЕ ИГРЫ
========================================= */

let phraseIndex = 0;

let phraseWords = [];

let phraseSolved = false;


/* =========================================
   СОСТОЯНИЕ ЗВЁЗД
========================================= */

let starClicks = 0;

let starUsed = new Set();


/* =========================================
   ВИЗИТЫ
========================================= */

try {

    const visits =
        Number(
            localStorage.getItem(
                "girlSiteVisits"
            ) || 0
        ) + 1;

    localStorage.setItem(
        "girlSiteVisits",
        visits
    );


    if (visitLabel) {

        if (visits === 1) {

            visitLabel.textContent =
                "первый визит";

        } else if (visits === 2) {

            visitLabel.textContent =
                "снова ты";

        } else {

            visitLabel.textContent =
                `ты вернулась · ${visits}`;

        }

    }

} catch (error) {

    if (visitLabel) {
        visitLabel.textContent = "";
    }

}


/* =========================================
   ПАСХАЛКИ
========================================= */

const eggs = {

    clicks: [

        "Ты.. на меня смотришь?",

        "Я заметил.",

        "Мне начинает казаться, что тебе здесь нравится.",

        "Ладно-ладно. Можешь ещё немного."

    ],


    musicOn: [

        "Так лучше.",

        "Теперь здесь стало немного уютнее.",

        "Неплохая песня, не правда ли?"

    ],


    musicOff: [

        "Оу(((.",

        "Ну.. иногда тишина тоже к месту."

    ],


    wait: [

        "Ты никуда не торопишься? Безумно рад.",

        "Мне казалось, ты уже нажмёшь дальше.",

        "Спасибо, что ты со мной."

    ],


    empty: [

        "Там ничего нет, лол.",

        "Ты реально проверила даже пустое место?",

        "Не-а. Но попытка милая!"

    ],


    rare: [

        "Если ты это увидела - значит, сегодня тебе повезло.",

        "Псс.. я вообще-то рад, что ты здесь.",

        "Это было случайно.. наверное."

    ],


    reload:
        "Ты вернулась и я ценю это."

};


function showEgg(
    text,
    duration = 2500
) {

    if (!eggToast || !eggText) {
        return;
    }


    clearTimeout(eggTimeout);


    eggText.textContent = text;


    eggToast.classList.add(
        "visible"
    );


    eggTimeout = setTimeout(() => {

        eggToast.classList.remove(
            "visible"
        );

    }, duration);

}


function randomItem(list) {

    return list[
        Math.floor(
            Math.random() * list.length
        )
    ];

}


function resetWaitEgg() {

    clearTimeout(waitTimer);


    if (phase !== "dialogue") {
        return;
    }


    waitTimer = setTimeout(() => {

        showEgg(
            randomItem(
                eggs.wait
            ),
            3200
        );

    }, WAIT_EGG_TIME);

}


/* =========================================
   ПЕЧАТЬ ТЕКСТА
========================================= */

function finishTyping() {

    if (!isTyping) {
        return;
    }


    clearInterval(
        typingInterval
    );


    typingInterval = null;


    dialogueText.textContent =
        currentText;


    currentLetter =
        currentText.length;


    isTyping = false;


    if (continueIndicator) {

        continueIndicator.classList.add(
            "visible"
        );

    }

}


function typeText(text) {

    clearInterval(
        typingInterval
    );


    currentText = text;

    currentLetter = 0;

    isTyping = true;


    dialogueText.textContent = "";


    if (continueIndicator) {

        continueIndicator.classList.remove(
            "visible"
        );

    }


    typingInterval =
        setInterval(() => {

            if (
                currentLetter >=
                currentText.length
            ) {

                finishTyping();

                return;
            }


            dialogueText.textContent +=
                currentText[
                    currentLetter
                ];


            currentLetter++;


            if (
                currentLetter >=
                currentText.length
            ) {

                finishTyping();

            }

        }, TYPING_SPEED);


    resetWaitEgg();

}


/* =========================================
   СОСТОЯНИЕ ПЕРСОНАЖА
========================================= */

function setCharacterState(state) {

    if (!character) {
        return;
    }


    character.classList.remove(

        "calm",

        "thinking",

        "serious",

        "happy",

        "sad"

    );


    character.classList.add(
        state
    );

}


function animateCharacter() {

    if (!character) {
        return;
    }


    character.classList.add(
        "clicked"
    );


    setTimeout(() => {

        character.classList.remove(
            "clicked"
        );

    }, 180);

}


/* =========================================
   ДИАЛОГ
========================================= */

function showDialogue(index) {

    if (phase !== "dialogue") {
        return;
    }


    if (!dialogue[index]) {

        startStars();

        return;
    }


    currentIndex = index;


    const item =
        dialogue[index];


    if (dialogueNumber) {

        dialogueNumber.textContent =
            String(index + 1)
                .padStart(2, "0");

    }


    setCharacterState(
        item.state
    );


    if (dialogueText) {

        dialogueText.classList.add(
            "changing"
        );


        setTimeout(() => {

            dialogueText.classList.remove(
                "changing"
            );


            typeText(
                item.text
            );

        }, 120);

    } else {

        typeText(
            item.text
        );

    }

}


/* =========================================
   СЛЕДУЮЩАЯ РЕПЛИКА
========================================= */

function nextDialogue() {

    if (
        phase !== "dialogue" ||
        hugShown
    ) {
        return;
    }


    clearTimeout(
        waitTimer
    );


    animateCharacter();


    /*
        Если текст ещё печатается —
        первый клик заканчивает его.
    */

    if (isTyping) {

        finishTyping();


        currentIndex++;


        /*
            После последней реплики
            первой части запускаем игру.
        */

        if (
            currentIndex ===
            GAME_START
        ) {

            startPhraseGame();

            return;
        }


        if (
            currentIndex >=
            dialogue.length
        ) {

            startStars();

            return;
        }


        showDialogue(
            currentIndex
        );


        return;
    }


    /*
        Обычный клик
    */

    clickCount++;


    /*
        Простые пасхалки
    */

    if (clickCount === 7) {

        showEgg(
            eggs.clicks[0]
        );

    }


    if (clickCount === 12) {

        showEgg(
            eggs.clicks[1]
        );

    }


    if (clickCount === 18) {

        showEgg(
            eggs.clicks[2]
        );

    }


    /*
        Очень редкая фраза
    */

    if (
        clickCount > 20 &&
        Math.random() < 0.08
    ) {

        showEgg(
            randomItem(
                eggs.rare
            ),
            3000
        );

    }


    currentIndex++;


    /*
        Переход в игру
    */

    if (
        currentIndex ===
        GAME_START
    ) {

        startPhraseGame();

        return;
    }


    /*
        Переход к звёздам
    */

    if (
        currentIndex >=
        dialogue.length
    ) {

        startStars();

        return;
    }


    showDialogue(
        currentIndex
    );

}


/* =========================================
   ИГРА «СОБЕРИ ФРАЗУ»
========================================= */

const phrases = [

    [
        "ты",
        "не",
        "должна",
        "себя",
        "корить"
    ],

    [
        "я",
        "рядом",
        "с",
        "тобой"
    ],

    [
        "ты",
        "можешь",
        "немного",
        "отдохнуть"
    ],

    [
        "тебе",
        "не",
        "нужно",
        "быть",
        "сильной",
        "всегда"
    ],

    [
        "я",
        "всё",
        "равно",
        "останусь",
        "рядом"
    ],

    [
        "ты",
        "можешь",
        "остаться",
        "ещё",
        "немного"
    ]

];


function shuffle(array) {

    const copy = [
        ...array
    ];


    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];

    }


    return copy;

}


function startPhraseGame() {

    phase = "phrase";


    clearTimeout(
        waitTimer
    );


    if (dialogueBox) {

        dialogueBox.style.opacity =
            "0";

    }


    if (character) {

        character.style.pointerEvents =
            "none";

    }


    phraseScreen.classList.add(
        "visible"
    );


    phraseScreen.setAttribute(
        "aria-hidden",
        "false"
    );


    phraseIndex = 0;

    phraseSolved = false;


    loadPhrase();

}


function loadPhrase() {

    phraseSolved = false;

    phraseWords = [];


    phraseResult.textContent =
        "";

    phraseResult.className =
        "phrase-result";


    assembled.innerHTML =
        "";


    phraseNext.hidden =
        true;


    phraseProgress.textContent =
        `${String(
            phraseIndex + 1
        ).padStart(2, "0")} / ${String(
            phrases.length
        ).padStart(2, "0")}`;


    const shuffled =
        shuffle(
            phrases[
                phraseIndex
            ]
        );


    wordBank.innerHTML =
        "";


    shuffled.forEach(
        (word, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "word";


            button.textContent =
                word;


            button.dataset.word =
                word;


            button.dataset.id =
                index;


            button.addEventListener(
                "click",
                () => {

                    chooseWord(
                        button
                    );

                }
            );


            wordBank.appendChild(
                button
            );

        }
    );

}


function chooseWord(button) {

    if (
        phraseSolved ||
        button.classList.contains(
            "used"
        )
    ) {
        return;
    }


    const expected =
        phrases[
            phraseIndex
        ][
            phraseWords.length
        ];


    const chosen =
        button.dataset.word;


    /*
        Неправильное слово
    */

    if (
        chosen !== expected
    ) {

        phraseResult.textContent =
            "не совсем... попробуй ещё раз";


        phraseResult.className =
            "phrase-result bad";


        button.animate(

            [
                {
                    transform:
                        "translateX(0)"
                },

                {
                    transform:
                        "translateX(-4px)"
                },

                {
                    transform:
                        "translateX(4px)"
                },

                {
                    transform:
                        "translateX(0)"
                }

            ],

            {
                duration: 220
            }

        );


        return;
    }


    /*
        Правильное слово
    */

    phraseWords.push(
        chosen
    );


    button.classList.add(
        "used"
    );


    const wordElement =
        document.createElement(
            "span"
        );


    wordElement.textContent =
        chosen;


    assembled.appendChild(
        wordElement
    );


    /*
        Фраза закончена
    */

    if (
        phraseWords.length ===
        phrases[
            phraseIndex
        ].length
    ) {

        phraseSolved = true;


        phraseResult.textContent =
            "получилось.";


        phraseResult.className =
            "phrase-result good";


        phraseNext.hidden =
            false;

    }

}


/*
    Следующая фраза
*/

phraseNext.addEventListener(
    "click",
    () => {

        if (!phraseSolved) {
            return;
        }


        phraseIndex++;


        if (
            phraseIndex >=
            phrases.length
        ) {

            finishPhraseGame();

        } else {

            loadPhrase();

        }

    }
);


function finishPhraseGame() {

    phraseScreen.classList.remove(
        "visible"
    );


    phraseScreen.setAttribute(
        "aria-hidden",
        "true"
    );


    if (dialogueBox) {

        dialogueBox.style.opacity =
            "";

    }


    if (character) {

        character.style.pointerEvents =
            "auto";

    }


    phase = "dialogue";


    currentIndex =
        GAME_START;


    showDialogue(
        currentIndex
    );

}


/* =========================================
   ЗВЁЗДНОЕ НЕБО
========================================= */

const starPhrases = [

    "Загадай желание, пока этого не сделай я!.",

    "Интересно, а звёзды тоже скучают?",

    "Ты можешь смотреть на них сколько угодно. Они только твои.",

    "Сегодня одна звезда выглядит подозрительно.. знакомо?",

    "Ты тоже иногда смотришь на небо просто так?",

    "Нашла меня!",

    "Некоторые вещи красивее, когда ими ни с кем не нужно делиться.",

    "Пожалуй, это место можно оставить только нам.",

    "Если станет грустно - просто посмотри наверх.",

    "Я буду скучать за этим местом."

];


function startStars() {

    phase = "stars";


    clearTimeout(
        waitTimer
    );


    clearInterval(
        typingInterval
    );


    if (dialogueBox) {

        dialogueBox.style.opacity =
            "0";

    }


    if (character) {

        character.style.opacity =
            "0";

    }


    if (musicControl) {

        musicControl.style.zIndex =
            "90";

    }


    scene.classList.add(
        "night"
    );


    starsScreen.classList.add(
        "visible"
    );


    starsScreen.setAttribute(
        "aria-hidden",
        "false"
    );


    starClicks = 0;

    starUsed =
        new Set();


    starsMessage.classList.remove(
        "visible"
    );


    starsMessage.textContent =
        "";


    starsFinish.classList.remove(
        "visible"
    );


    starsHint.textContent =
        "Нажми на несколько звёзд.";


    createStars();

}


function createStars() {

    starsLayer.innerHTML = "";

    /*
        Общее количество звёзд.
        Большая часть — декоративные.
    */
    const starCount = 110;

    /*
        Примерно каждая 8-я звезда —
        интерактивная.

        Именно интерактивные звёзды:
        - крупнее;
        - ярче;
        - имеют свечение;
        - слегка пульсируют;
        - имеют увеличенную область нажатия.
    */
    const clickableEvery = 8;

    for (let index = 0; index < starCount; index++) {

        const star =
            document.createElement("button");

        /*
            Только некоторые звёзды можно нажимать
            для продвижения.
        */
        const isClickable =
            index % clickableEvery === 0;

        if (isClickable) {

            star.className =
                "star clickable";

            /*
                Увеличиваем реальную область клика.
            */
            star.style.width = "2px";
            star.style.height = "2px";

            /*
                Делаем интерактивную звезду
                заметнее обычных.
            *
            star.style.opacity = "1";

            star.style.zIndex = "5";

            /*
                Небольшое свечение.
            */
            star.style.filter =
                "drop-shadow(0 0 5px rgba(255,255,255,.9))";

            /*
                Делаем понятный визуальный символ.
                Если твой CSS уже рисует звезду через
                pseudo-element, этот символ можно убрать.
            */
            star.textContent = "✦";

            star.style.fontSize = "4px";
            star.style.lineHeight = "4px";
            star.style.color = "white";

            /*
                Курсор показывает игроку,
                что звезда интерактивная.
            */
            star.style.cursor = "pointer";

            /*
                Пульсация интерактивной звезды.
            */
            star.style.animationName =
                "starClickablePulse";

        } else {

            star.className =
                "star";

            /*
                Обычные звёзды остаются
                маленькими и менее заметными.
            */
            const opacity =
                0.2 + Math.random() * 0.45;

            star.style.opacity =
                opacity.toFixed(2);
        }


        /*
            Распределяем звёзды по всему экрану.
        */
        const x =
            2 + Math.random() * 96;

        const y =
            2 + Math.random() * 96;

        star.style.left =
            `${x}%`;

        star.style.top =
            `${y}%`;


        /*
            У каждой звезды своя скорость
            и фаза мерцания.
        */
        const duration =
            3.5 + Math.random() * 5;

        const delay =
            Math.random() * -8;

        star.style.animationDuration =
            `${duration.toFixed(2)}s`;

        star.style.animationDelay =
            `${delay.toFixed(2)}s`;


        /*
            Доступность.
        */
        star.setAttribute(
            "aria-label",
            isClickable
                ? "нажать на звезду"
                : "звезда"
        );


        /*
            Если звезда интерактивная —
            добавляем обработчик клика.
        */
        if (isClickable) {

            star.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();


                    /*
                        Нельзя нажать одну и ту же
                        звезду повторно.
                    */
                    if (
                        starUsed.has(index)
                    ) {
                        return;
                    }


                    starUsed.add(index);

                    starClicks++;


                    /*
                        Показываем очередную фразу.
                    */
                    const message =
                        starPhrases[
                            (starClicks - 1) %
                            starPhrases.length
                        ];


                    starsMessage.textContent =
                        message;


                    starsMessage.classList.remove(
                        "visible"
                    );


                    requestAnimationFrame(() => {

                        starsMessage.classList.add(
                            "visible"
                        );

                    });


                    /*
                        Большая анимация
                        при нажатии.
                    */
                    star.animate(

                        [
                            {
                                transform:
                                    "scale(1)",
                                opacity: 1
                            },

                            {
                                transform:
                                    "scale(2.8)",
                                opacity: 1
                            },

                            {
                                transform:
                                    "scale(1.4)",
                                opacity: .9
                            },

                            {
                                transform:
                                    "scale(1)",
                                opacity: .7
                            }
                        ],

                        {
                            duration: 650,
                            easing: "ease-out"
                        }

                    );


                    /*
                        После нажатия звезда
                        становится менее заметной.
                    */
                    star.style.filter =
                        "drop-shadow(0 0 2px rgba(255,255,255,.5))";


                    /*
                        После пяти найденных звёзд
                        разрешаем завершить сцену.
                    */
                    if (
                        starClicks >= 5
                    ) {

                        starsHint.textContent =
                            "Кажется, этого уже достаточно.";


                        starsFinish.classList.add(
                            "visible"
                        );

                    }

                }
            );

        }


        /*
            Добавляем звезду на слой.
        */
        starsLayer.appendChild(
            star
        );

    }

}


/* =========================================
   ЗАКОНЧИТЬ ЗВЁЗДНУЮ СЦЕНУ
========================================= */

starsFinish.addEventListener(
    "click",
    () => {

        starsFinish.classList.remove(
            "visible"
        );


        starsMessage.classList.remove(
            "visible"
        );


        setTimeout(() => {

            starsScreen.classList.remove(
                "visible"
            );


            starsScreen.setAttribute(
                "aria-hidden",
                "true"
            );


            finalScreen.classList.add(
                "visible"
            );


            phase = "final";

        }, 700);

    }
);


/* =========================================
   РЕСТАРТ
========================================= */

function resetSite() {

    clearInterval(
        typingInterval
    );


    clearTimeout(
        holdTimer
    );


    clearTimeout(
        waitTimer
    );


    clearTimeout(
        eggTimeout
    );


    currentIndex = 0;

    phase = "dialogue";

    isTyping = false;

    currentText = "";

    currentLetter = 0;


    clickCount = 0;

    hugShown = false;

    longPressTriggered = false;


    phraseIndex = 0;

    phraseSolved = false;

    phraseWords = [];


    starClicks = 0;

    starUsed =
        new Set();


    if (dialogueText) {

        dialogueText.textContent =
            "";

    }


    if (continueIndicator) {

        continueIndicator.classList.remove(
            "visible"
        );

    }


    if (phraseScreen) {

        phraseScreen.classList.remove(
            "visible"
        );

    }


    if (starsScreen) {

        starsScreen.classList.remove(
            "visible"
        );

    }


    if (finalScreen) {

        finalScreen.classList.remove(
            "visible"
        );

    }


    if (hugOverlay) {

        hugOverlay.classList.remove(
            "visible"
        );

    }


    if (eggToast) {

        eggToast.classList.remove(
            "visible"
        );

    }


    if (dialogueBox) {

        dialogueBox.style.opacity =
            "";

    }


    if (character) {

        character.style.opacity =
            "";

        character.style.pointerEvents =
            "auto";

        character.classList.remove(
            "finished",
            "clicked"
        );

    }


    scene.classList.remove(
        "night"
    );


    if (musicControl) {

        musicControl.style.zIndex =
            "30";

    }


    showDialogue(0);

}


restartBtn.addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        event.stopPropagation();

        resetSite();

    }
);


/* =========================================
   МУЗЫКА
========================================= */

async function enableMusic() {

    if (!music) {
        return;
    }


    try {

        await music.play();


        musicEnabled =
            true;


        if (musicControl) {

            musicControl.classList.add(
                "playing"
            );

        }


        if (musicLabel) {

            musicLabel.textContent =
                "без музыки";

        }


        showEgg(
            randomItem(
                eggs.musicOn
            ),
            2400
        );


    } catch (error) {

        musicEnabled =
            false;


        if (musicLabel) {

            musicLabel.textContent =
                "музыка";

        }

    }

}


function disableMusic() {

    if (!music) {
        return;
    }


    music.pause();


    try {

        music.currentTime =
            0;

    } catch (error) {}


    musicEnabled =
        false;


    if (musicControl) {

        musicControl.classList.remove(
            "playing"
        );

    }


    if (musicLabel) {

        musicLabel.textContent =
            "музыка";

    }


    if (
        phase === "dialogue"
    ) {

        showEgg(
            randomItem(
                eggs.musicOff
            ),
            2400
        );

    }

}


function toggleMusic(event) {

    event.preventDefault();

    event.stopPropagation();


    if (musicEnabled) {

        disableMusic();

    } else {

        enableMusic();

    }

}


musicControl.addEventListener(
    "click",
    toggleMusic
);


/* =========================================
   ПАСХАЛКА ПРИ ПОВТОРНОМ ВХОДЕ
========================================= */

try {

    const visits =
        Number(
            localStorage.getItem(
                "girlSiteVisits"
            ) || 1
        );


    if (visits >= 2) {

        setTimeout(() => {

            showEgg(
                eggs.reload,
                3000
            );

        }, 2200);

    }

} catch (error) {}


/* =========================================
   КЛИК ПО ПУСТОМУ МЕСТУ
========================================= */

scene.addEventListener(
    "click",
    (event) => {

        if (
            phase !== "dialogue"
        ) {
            return;
        }


        const target =
            event.target;


        if (
            target === scene ||
            target === visitLabel
        ) {

            if (
                Math.random() < .55
            ) {

                showEgg(
                    randomItem(
                        eggs.empty
                    ),
                    2300
                );

            }

        }

    }
);


/* =========================================
   LONG PRESS = ОБЪЯТИЯ
========================================= */

function startHold(event) {

    if (
        phase !== "dialogue" ||
        hugShown
    ) {
        return;
    }


    if (
        event &&
        event.pointerType === "mouse" &&
        event.button !== 0
    ) {
        return;
    }


    clearTimeout(
        holdTimer
    );


    longPressTriggered =
        false;


    holdTimer =
        setTimeout(() => {

            longPressTriggered =
                true;


            hugShown =
                true;


            if (hugText) {

                hugText.textContent =
                    "Иди обниму.";

            }


            if (hugOverlay) {

                hugOverlay.classList.add(
                    "visible"
                );

            }


            setTimeout(() => {

                if (
                    hugShown &&
                    hugText
                ) {

                    hugText.textContent =
                        "Вот так-то лучше.";

                }

            }, 1400);


            setTimeout(
                closeHug,
                3000
            );


        }, LONG_PRESS_TIME);

}


function endHold() {

    clearTimeout(
        holdTimer
    );


    holdTimer =
        null;

}


function closeHug() {

    clearTimeout(
        holdTimer
    );


    holdTimer =
        null;


    if (hugOverlay) {

        hugOverlay.classList.remove(
            "visible"
        );

    }


    hugShown =
        false;

}


/* =========================================
   ПЕРСОНАЖ — POINTER EVENTS
========================================= */

if (character) {

    character.addEventListener(
        "pointerdown",
        (event) => {

            event.preventDefault();


            try {

                character.setPointerCapture(
                    event.pointerId
                );

            } catch (error) {}


            startHold(
                event
            );

        }
    );


    character.addEventListener(
        "pointerup",
        (event) => {

            event.preventDefault();

            endHold();

        }
    );


    character.addEventListener(
        "pointercancel",
        endHold
    );


    character.addEventListener(
        "lostpointercapture",
        endHold
    );


    character.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            event.stopPropagation();


            if (
                longPressTriggered
            ) {

                longPressTriggered =
                    false;

                return;

            }


            nextDialogue();

        }
    );


    character.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                nextDialogue();

            }

        }
    );

}


/* =========================================
   PIXEL REVEAL
========================================= */

function pixelReveal() {

    if (

        pixelRevealStarted ||

        !character ||

        !characterImage ||

        !pixelCanvas ||

        !pixelContext

    ) {

        return;

    }


    pixelRevealStarted =
        true;


    character.classList.add(
        "loading"
    );


    const image =
        new Image();


    image.onload = () => {

        const rect =
            character.getBoundingClientRect();


        const width =
            Math.round(
                rect.width
            );


        const height =
            Math.round(
                rect.height
            );


        if (
            width <= 0 ||
            height <= 0
        ) {

            character.classList.remove(
                "loading"
            );

            return;

        }


        const dpr =
            window.devicePixelRatio ||
            1;


        pixelCanvas.width =
            width * dpr;


        pixelCanvas.height =
            height * dpr;


        pixelCanvas.style.width =
            width + "px";


        pixelCanvas.style.height =
            height + "px";


        pixelContext.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );


        const tempCanvas =
            document.createElement(
                "canvas"
            );


        tempCanvas.width =
            width;


        tempCanvas.height =
            height;


        const tempContext =
            tempCanvas.getContext(
                "2d"
            );


        if (!tempContext) {

            character.classList.remove(
                "loading"
            );

            return;

        }


        tempContext.drawImage(

            image,

            0,
            0,
            image.naturalWidth,
            image.naturalHeight,

            0,
            0,
            width,
            height

        );


        const pixelSize =
            12;


        const columns =
            Math.ceil(
                width /
                pixelSize
            );


        const rows =
            Math.ceil(
                height /
                pixelSize
            );


        const pixels = [];


        for (
            let y = 0;
            y < rows;
            y++
        ) {

            for (
                let x = 0;
                x < columns;
                x++
            ) {

                pixels.push({

                    x:
                        x * pixelSize,

                    y:
                        y * pixelSize

                });

            }

        }


        /*
            Перемешиваем пиксели
        */

        for (
            let i =
                pixels.length - 1;

            i > 0;

            i--
        ) {

            const j =
                Math.floor(
                    Math.random() *
                    (i + 1)
                );


            [
                pixels[i],
                pixels[j]
            ] = [

                pixels[j],
                pixels[i]

            ];

        }


        pixelContext.clearRect(

            0,
            0,
            width,
            height

        );


        let currentPixel =
            0;


        const interval =
            setInterval(() => {

                for (
                    let i = 0;

                    i < 10 &&
                    currentPixel <
                    pixels.length;

                    i++
                ) {

                    const pixel =
                        pixels[
                            currentPixel++
                        ];


                    pixelContext.drawImage(

                        tempCanvas,

                        pixel.x,
                        pixel.y,
                        pixelSize,
                        pixelSize,

                        pixel.x,
                        pixel.y,
                        pixelSize,
                        pixelSize

                    );

                }


                if (
                    currentPixel >=
                    pixels.length
                ) {

                    clearInterval(
                        interval
                    );


                    setTimeout(() => {

                        pixelCanvas.classList.add(
                            "hidden"
                        );


                        character.classList.remove(
                            "loading"
                        );


                        character.classList.add(
                            "loaded"
                        );

                    }, 350);

                }

            }, 16);

    };


    image.onerror = () => {

        character.classList.remove(
            "loading"
        );


        character.classList.add(
            "loaded"
        );

    };


    image.src =
        characterImage.src;

}


/* =========================================
   ЗАПУСК
========================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            pixelReveal,
            300
        );


        setTimeout(
            () => {

                showDialogue(0);

            },
            1800
        );

    }
);
