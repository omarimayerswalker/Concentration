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
            gamePlay.shuffle()
            alert("Select two cards untill you've matched them all!")
        },

        // Card Deck

        cardDeck: ["android",
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
            "diaspora",
            "dj",
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

        // Randomize cards
        shuffle: function() {
            // places random cards onto the board with display hidden
            console.log("random")
            // Selects random Card
            while (gamePlay.taken.length < 18){
            var randomCard = gamePlay.cardDeck[Math.floor(Math.random() * gamePlay.cardDeck.length)];
            gamePlay.taken.push(randomCard)
                for(i in gamePlay.taken){
                    if (i == randomCard){
                        gamePlay.taken.pop(i)
                    }
                        }
            }
            console.log(gamePlay.taken)
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
            console.log("Play Button")
            gamePlay.start();
            // trigger concentration()
        })
    }
