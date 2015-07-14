    // Player Moves

    var playerMoves = {
        twoCards: [],
        cardCounter: null,
        cardSelect: $('.card').on('click', function(event) {
            event.preventDefault()
            playerMoves.twoCards.push(event.target.id)
            playerMoves.reveal(event.target)
        }),
        cardHighlight:
        //Card Highlighter
            $('.card').hover(function() {
            $(this).addClass('highlight')
        }, function() {
            $(this).removeClass('highlight')
        }),
        reveal: function(event) {
            // Reveal the reverse of the selected card
            console.log(event)
            $(event).css('background', 'none')
                // for (var i = 0; i < 2; i++) {
                // $(this).css('background-color', 'red')

            // }
        }
    }

    // Store card fronts
    var gamePlay = {
        // Play button triggers alert to play
        start: function() {
            gamePlay.arrangeBoard()
            alert("Select two cards untill you've matched them all!")
        },

        // Card Deck

        cardDeck1: ["android",
            "angular",
            "antergos",
            "arch",
            "backbone",
            "bitcoin",
            "bower",
            "C",
            "C++",
            "chakra",
            "clementine",
            "coffee",
            "copyleft",
            "csharp",
            "css3",
            "dart",
            "debian",
            "diaspora"
        ],

        cardDeck2: ["dj",
            "django",
            "docker",
            "dogecoin",
            "drupal",
            "elementary",
            "emacs",
            "fluxbox",
            "freebsd",
            "gentoo",
            "gimp",
            "git",
            "gnome",
            "gnu",
            "golang",
            "grunt",
            "html5",
            "js"
        ],
        // Taken cards
        taken: [],

        // Card positions in DOM

        boardPosition: ["r1c1", // 0
            "r1c2", //  1
            "r1c3", //  2
            "r1c4", //  3
            "r1c5", //  4
            "r1c6", //  5
            "r1c7", //  6
            "r1c8", //  7
            "r1c9", //  8

            "r2c1", //  9
            "r2c2", // 10
            "r2c3", // 11
            "r2c4", // 12
            "r2c5", // 13
            "r2c6", // 14
            "r2c7", // 15
            "r2c8", // 16
            "r2c9", // 17

            "r3c1", // 18
            "r3c2", // 19
            "r3c3", // 20
            "r3c4", // 21
            "r3c5", // 22
            "r3c6", // 23
            "r3c7", // 24
            "r3c8", // 25
            "r3c9", // 26

            "r3c1", // 27
            "r3c2", // 28
            "r3c3", // 29
            "r3c4", // 30
            "r3c5", // 31
            "r3c6", // 32
            "r3c7", // 33
            "r3c8", // 34
            "r3c9", // 35
        ],

        fullBoard: [],
        shuffledBoard: [],

        arrangeBoard: function() {
            gamePlay.fullBoard = gamePlay.cardDeck1.concat(gamePlay.cardDeck1)
            console.log(gamePlay.fullBoard)
            return gamePlay.shuffle(gamePlay.fullBoard)
            // console.log(gamePlay.fullBoard)
        },

        shuffle: function(o) {
            for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
            gamePlay.shuffledBoard = o
            console.log(gamePlay.shuffledBoard)
            return gamePlay.shuffledBoard
        }

    }

    // Buttons

    var buttons = {
        reset:
        // Reset button: complete
            $('#reset').on('click', function(event) {
            event.preventDefault()
            window.location.reload()
        }),

        play:
        // Play button
            $('#play').on('click', function(event) {
            event.preventDefault()
                // console.log("Play Button")
            gamePlay.start();
            // trigger concentration()
        })
    }
