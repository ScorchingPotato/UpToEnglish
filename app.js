document.addEventListener('DOMContentLoaded', function () {

    //UNITS:
    const u1a = [
        { lithuanian: "nuostabus, nepaprastas", english: "amazing" },
        { lithuanian: "išvaizda", english: "appearance" },
        { lithuanian: "jaustis patogiai su kitais", english: "be comfortable with others" },
        { lithuanian: "tapti nematomu", english: "become invisible" },
        { lithuanian: "drąsus", english: "brave" },
        { lithuanian: "talentingas, protingas", english: "brilliant" },
        { lithuanian: "tapti, pasiversti", english: "change into" },
        { lithuanian: "personažas, veikėjas", english: "character" },
        { lithuanian: "sumanus, protingas", english: "clever" },
        { lithuanian: "kopti", english: "climb" },

        { lithuanian: "legvai", english: "easily" },
        { lithuanian: "skristi", english: "fly" },
        { lithuanian: "galaktika", english: "galaxy" },
        { lithuanian: "vaikinai, draugai", english: "guys" },
        { lithuanian: "girdėti", english: "hear" },
        { lithuanian: "didvyris, herojus", english: "hero" },
        { lithuanian: "didelis greitis", english: "high speed" },
        { lithuanian: "prisijungti", english: "join" },
        { lithuanian: "šokinėti", english: "jump" },
        { lithuanian: "vardas", english: "name" },

        { lithuanian: "beveik", english: "nearly" },
        { lithuanian: "Naujokas internete", english: "newbie" },
        { lithuanian: "neprisijungęs", english: "offline" },
        { lithuanian: "prisijungęs internete", english: "online" },
        { lithuanian: "našlaitis", english: "orphan" },
        { lithuanian: "tėvas, motina", english: "parent" },
        { lithuanian: "fizika", english: "Physics" },
        { lithuanian: "planeta", english: "planet" },
        { lithuanian: "policijos pareigūnas", english: "police officer" },
        { lithuanian: "postas internete", english: "post" },

        { lithuanian: "skaityti mintis", english: "read thoughts" },
        { lithuanian: "tikras, realus", english: "real" },
        { lithuanian: "mokslininkas", english: "scientist" },
        { lithuanian: "matyti", english: "see" },
        { lithuanian: "anksčiau prisijungęs narys", english: "senior" },
        { lithuanian: "drovus", english: "shy" },
        { lithuanian: "stiprus", english: "strong" },
    ]

    u3b = [
        { lithuanian: "pyktas", english: "angry" },
        { lithuanian: "apsmukęs", english: "baggy" },
        { lithuanian: "būti išsigandusiam", english: "be frightened of something" },
        { lithuanian: "būti patenkintam", english: "be satisfied with something" },
        { lithuanian: "diržas", english: "belt" },
        { lithuanian: "pūsti", english: "blow" },
        { lithuanian: "batai", english: "boots" },
        { lithuanian: "švelnus vėjelis", english: "breeze" },
        { lithuanian: "ryškus", english: "bright" },
        { lithuanian: "kasdieniai drabužiai", english: "casual clothes" },
        { lithuanian: "šaltas, vėsus", english: "chilly" },
        { lithuanian: "paltas", english: "coat" },
        { lithuanian: "vėsus", english: "cool" },
        { lithuanian: "suknelė", english: "dress" },
        { lithuanian: "dulksna", english: "drizzle" },
        { lithuanian: "sausra", english: "drought" },
        { lithuanian: "susijaudinęs", english: "excited" },
        { lithuanian: "į apačią išplatėjęs", english: "flared" },
        { lithuanian: "plokščiapadžiai bateliai", english: "flat shoes" },
        { lithuanian: "potvynis", english: "flood" },
        { lithuanian: "gėlėtas", english: "floral" },
        { lithuanian: "rūkas", english: "fog" },
        { lithuanian: "labai šalta", english: "freezing cold" },
        { lithuanian: "šaltis, speigas", english: "frost" },
        { lithuanian: "pirštinės", english: "gloves" },
        { lithuanian: "kruša", english: "hail" },//Pirmas Puslapis
        { lithuanian: "skrybėlė", english: "hat" },
        { lithuanian: "šilti drabužiai", english: "heavy clothes" },
        { lithuanian: "aukštakulniai batai", english: "high-heeled shoes" },
        { lithuanian: "striukė", english: "jacket" },
        { lithuanian: "džinsai", english: "jeans" },
        { lithuanian: "megztinis", english: "jumper" },
        { lithuanian: "leginsai", english: "leggings" },
        { lithuanian: "žaibas", english: "lightning" },
        { lithuanian: "taškuotas", english: "polka-dot" },
        { lithuanian: "pilti", english: "pour" },
        { lithuanian: "lietaus lašas", english: "raindrop" },
        { lithuanian: "jaučiasi palengvėjas", english: "relieved" },
        { lithuanian: "liūdnas", english: "sad" },
        { lithuanian: "patenkintas", english: "satisfied with something" },
        { lithuanian: "išsigąsdintas", english: "scared of" },
        { lithuanian: "šalikas", english: "scarf" },
        { lithuanian: "karštis, kaitrus", english: "scorching hot" },
        { lithuanian: "šviesti", english: "shine" },
        { lithuanian: "marškiniai", english: "shirt" },
        { lithuanian: "šortai", english: "shorts" },
        { lithuanian: "dušas", english: "shower" },
        { lithuanian: "sijonas", english: "skirt" },
        { lithuanian: "snigimas", english: "snowfall" },
        { lithuanian: "kojinės", english: "socks" },
        { lithuanian: "sportinė apranga", english: "sportswear" },
        { lithuanian: "kostiumas", english: "suit" },
        { lithuanian: "saulėtas", english: "sunny" },
        { lithuanian: "saulėtas laikotarpis", english: "sunny spells" },
        { lithuanian: "gražus saulėtas, giedra", english: "sunshine" },
        { lithuanian: "snustebęs", english: "surprised" },
        { lithuanian: "škotiškas languotas, audinys", english: "tartan" },
        { lithuanian: "temperatūra", english: "temperature" },
        { lithuanian: "griaustinis", english: "thunder" },//Antras Puslapis
        { lithuanian: "kaklaraištis", english: "tie" },
        { lithuanian: "labai atemptas", english: "tight-fitting" },
        { lithuanian: "pavargęs", english: "tired" },
        { lithuanian: "sportbačiai", english: "trainers" },
        { lithuanian: "marškinėliai", english: "T-shirt" },
        { lithuanian: "oro prognozė", english: "weather forecast" },
        { lithuanian: "susirūpinęs", english: "worried" },
        { lithuanian: "medžiagos", english: "materials" },
        { lithuanian: "medvilnė", english: "cotton" },
        { lithuanian: "džinsinis audinys", english: "denim" },
        { lithuanian: "sintetinis minkštas audinys", english: "fleece" },
        { lithuanian: "oda", english: "leather" },
        { lithuanian: "šilkas", english: "silk" },
        { lithuanian: "vilna", english: "wool" }
    ];

    const words = u3b;
        
    const skippedWords = [];

    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const resultElement = document.getElementById('result');

    let currentWord = {};
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const card = document.querySelector('.card');
    const container = document.querySelector(".container");
    const toggleIcon = document.getElementById('toggle-icon');

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        card.classList.toggle('dark-mode');
        toggleIcon.classList.toggle('fa-moon');
        toggleIcon.classList.toggle('fa-sun');
    });

    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function displayWord() {
        currentWord = getRandomWord();
        questionElement.innerText = currentWord.lithuanian;
        resultElement.innerHTML = '';
        resultElement.classList.remove('correct', 'incorrect', 'minor-mistake');
    }

    function checkAnswer() {
        const userAnswer = answerElement.value.trim().toLowerCase();
        const correctAnswer = currentWord.english.toLowerCase();

        if (userAnswer === correctAnswer) {
            resultElement.innerHTML = '<i class="fas fa-check"></i> Correct!';
            resultElement.classList.add('correct');
        } else if (userAnswer.length === correctAnswer.length && isMinorMistake(userAnswer, correctAnswer)) {
            resultElement.innerHTML = '<i class="fas fa-question"></i> Grammar mistake';
            resultElement.classList.add('minor-mistake');
        } else {
            resultElement.innerHTML = '<i class="fas fa-times"></i> Incorrect.';
            resultElement.classList.add('incorrect');
        }

        answerElement.value = '';

        // Delay before displaying the next word
        setTimeout(displayWord, 1000);
    }

    function isMinorMistake(userAnswer, correctAnswer) {
        let mistakeCount = 0;
        for (let i = 0; i < userAnswer.length; i++) {
            if (userAnswer[i] !== correctAnswer[i]) {
                mistakeCount++;
            }
        }
        return mistakeCount === 1;
    }

    displayWord();
    submitButton.addEventListener('click', checkAnswer);
    questionElement.addEventListener('click', displayWord)
});
