document.addEventListener('DOMContentLoaded', function () {

    //UNITS:
    const OS1u1a = [
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

    const OS2u3b = [
        { lithuanian: "piktas", english: "angry" },
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
    const OS3u3a = [
        { lithuanian: "palikti", english: "abandon" },
        { lithuanian: "pasiekimas", english: "achievment" },
        { lithuanian: "susirūpinęs", english: "anxious about" },
        { lithuanian: "atvykti", english: "arrive" },
        { lithuanian: "pastangos", english: "attempt" },
        { lithuanian: "drąsa", english: "bravery" },
        { lithuanian: "iššūkis", english: "challenge" },
        { lithuanian: "vilkimas", english: "drag" },
        { lithuanian: "įranga", english: "equipment" },
        { lithuanian: "tyrinėtojas", english: "explorer" },
        { lithuanian: "tyrinėtojų grupės narys", english: "expedition member" },
        { lithuanian: "veidas", english: "face" },
        { lithuanian: "baimė", english: "fear" },
        { lithuanian: "pirmas", english: "first" },
        { lithuanian: "laisvas", english: "free" },
        { lithuanian: "draugiškas", english: "friendly" },
        { lithuanian: "užšalęs", english: "frozen" },
        { lithuanian: "hipodromas", english: "hippodrome" },
        { lithuanian: "ledas", english: "ice" },
        { lithuanian: "ledinis", english: "icy" },
        { lithuanian: "įprastas", english: "ordinary" },
        { lithuanian: "poliarinis", english: "polar" },
        { lithuanian: "rogės", english: "sledge" },
        { lithuanian: "stipriai įsiminti", english: "strongly freeze to mind" },
        { lithuanian: "atsargos", english: "supplies" },
        { lithuanian: "neįprastas", english: "unusual" }
        ];
        const OS3u3b = [
            { lithuanian: "alergija", english: "allergy" },
            { lithuanian: "nustebęs", english: "amazed" },
            { lithuanian: "rašyti prašymą dėl darbo", english: "apply" },
            { lithuanian: "derėtis", english: "bargain" },
            { lithuanian: "susidurti", english: "be faced (with)" },
            { lithuanian: "už(si)sakyti (vietą viešbutyje, stalą restorane), pirkti", english: "book" },
            { lithuanian: "skolintis", english: "borrow" },
            { lithuanian: "už(si)registruoti (pvz., į viešbutį)", english: "check in" },
            { lithuanian: "kopti, lipti", english: "climb" },
            { lithuanian: "nuspręsti, nutarti", english: "decide" },
            { lithuanian: "įgyti (savybę, įprotį)", english: "develop" },
            { lithuanian: "entuziazmo/energijos", english: "enthusiastic" },
            { lithuanian: "pralenkti, pranokti", english: "excel (at)" },
            { lithuanian: "patirti", english: "experience" },
            { lithuanian: "tirti, tyrinėti", english: "explore" },
            { lithuanian: "karštis", english: "fever" },
            { lithuanian: "įkvėptas", english: "inspired" },
            { lithuanian: "sužinoti", english: "find out" },
            { lithuanian: "skristi", english: "fly" },
            { lithuanian: "įdegti/nudegti saulėje", english: "get sunburnt" },
            { lithuanian: "liautis", english: "give up" },
            { lithuanian: "tapti (draugijos ir pan.) nariu, prisijungti", english: "join (in)" },
            { lithuanian: "kelionė", english: "journey" },
            { lithuanian: "tęstis", english: "last" },
            { lithuanian: "sužinoti", english: "learn (about sth)" },
            { lithuanian: "baigti mokyklą", english: "leave school" },
            { lithuanian: "paskolinti", english: "lend" },
            { lithuanian: "leisti", english: "let" },
            { lithuanian: "siūlyti", english: "offer" },
            { lithuanian: "besididžiuojantis", english: "proud of" },
            { lithuanian: "atidėti", english: "put off" },
            { lithuanian: "už(si)dėti, apsirengti, apsivilkti, užsimauti", english: "put on" },
            { lithuanian: "surinkti pinigų", english: "raise money" },
            { lithuanian: "išbėrimas", english: "rash" },
            { lithuanian: "nuoma", english: "rent" },
            { lithuanian: "varvanti nosis", english: "runny nose" },
            { lithuanian: "patenkintas", english: "satisfied with" },
            { lithuanian: "pasitikėjimas savimi", english: "self-confidence" },
            { lithuanian: "(pra)leisti", english: "spend" },
            { lithuanian: "pilvo diegliai", english: "stomach cramp" },
            { lithuanian: "pasisekti", english: "succeed (in)" },
            { lithuanian: "pasiimti metus akademinių atostogų universitete", english: "take a year out" },
            { lithuanian: "kelionė, išvyka", english: "trip" },
            { lithuanian: "būti savanoriu", english: "volunteer" },
            { lithuanian: "kelionė (jūra)", english: "voyage" },
            { lithuanian: "viešbučio užsakymas", english: "Booking a hotel" },
            { lithuanian: "atvykimas", english: "arrival" },
            { lithuanian: "užsiregistruoti", english: "check in" },
            { lithuanian: "patvirtinti", english: "confirm" },
            { lithuanian: "data, (mėnesio) diena", english: "date" },
            { lithuanian: "dvigulė lova", english: "double bed" },
            { lithuanian: "prijungtas", english: "en-suite" },
            { lithuanian: "išankstinis užsakymas (vietų viešbutyje ir pan.)", english: "reservation" },
            { lithuanian: "viengulė lova", english: "single bed" },
            { lithuanian: "vienvietis kambarys", english: "single room" },
            { lithuanian: "dvi viengulės lovos", english: "twin beds" },
            { lithuanian: "dvivietis kambarys", english: "twin room" },
            { lithuanian: "oro uosto ženklai", english: "Airport signs" },
            { lithuanian: "atvykimo salė", english: "arrivals hall" },
            { lithuanian: "bagažo atsiėmimo salė", english: "baggage hall" },
            { lithuanian: "registracijos vieta (oro uoste)", english: "check-in" },
            { lithuanian: "valiutos keitykla", english: "currency exchange" },
            { lithuanian: "muitinė", english: "customs" },
            { lithuanian: "išvykimo salė", english: "departures" },
            { lithuanian: "neapmuitinamos prekės", english: "duty free" },
            { lithuanian: "vartai", english: "gate" },
            { lithuanian: "informacija", english: "information" },
            { lithuanian: "pasų kontrolė", english: "passport control" },
            ];

    const units = [OS1u1a, OS2u3b, OS3u3a,OS3u3b]
    const unitnames = ['On Screen 1, 1a', 'On Screen 2, 3b','On Screen 3, 3a','On Screen 3, 3b'];


    var ui = 3;
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
    const leftarrow = document.getElementById('larrow');
    const rightarrow = document.getElementById('rarrow');
    const unitElement = document.getElementById('unit');

    function setUnit() {
        //unitElement.innerHTML = ui;
        console.log(ui)
    }

    leftarrow.addEventListener('click', scrollleft)
    rightarrow.addEventListener('click', scrollright)

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        card.classList.toggle('dark-mode');
        toggleIcon.classList.toggle('fa-moon');
        toggleIcon.classList.toggle('fa-sun');
    });

    function scrollleft() {
        if (ui > 0) {
            ui = ui - 1
        }
        setUnit()
        displayWord()
        unitElement.innerHTML = unitnames[ui];
    }

    function scrollright() {
        if (ui) {
            ui = ui + 1
        }
        setUnit()
        displayWord()
        unitElement.innerHTML = unitnames[ui];
    }

    function getRandomWord() {
        words = units[ui];
        return words[Math.floor(Math.random() * words.length)];
    }

    function displayWord() {
        currentWord = getRandomWord();
        questionElement.innerText = currentWord.lithuanian;
        resultElement.innerHTML = '';
        resultElement.classList.remove('correct', 'incorrect', 'minor-mistake');
        unitElement.innerHTML = unitnames[ui];
    }

    function checkAnswer() {
        const userAnswer = answerElement.value.trim().toLowerCase();
        const correctAnswer = currentWord.english.toLowerCase();
        let waittime=1000

        if (userAnswer === correctAnswer) {
            resultElement.innerHTML = '<span class="material-symbols-outlined">check</span> Correct!';
            resultElement.classList.add('correct');
        } else if (userAnswer.length === correctAnswer.length && isMinorMistake(userAnswer, correctAnswer)) {
            resultElement.innerHTML = '<span class="material-symbols-outlined">question_mark</span> Grammar mistake';
            resultElement.classList.add('minor-mistake');
            waittime=1500
        } else {
            resultElement.innerHTML = '<span class="material-symbols-outlined">close</span> Incorrect. Correct is '+correctAnswer;
            resultElement.classList.add('incorrect');
            waittime=2000
        }

        answerElement.value = '';

        // Delay before displaying the next word
        setTimeout(displayWord, waittime);
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
