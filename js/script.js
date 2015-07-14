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
        },
        // Place card fronts into divs with display: hidden
        shuffle: function() {

        }
    }

    // Store card fronts
    var cardDeck1 = {
        card01: null,
        card02: null,
        card03: null,
        card04: null,
        card05: null,
        card06: null,
        card07: null,
        card08: null,
        card09: null,
        card10: null,
        card11: null,
        card12: null,
        card13: null,
        card14: null,
        card15: null,
        card16: null,
        card17: null,
        card18: null,
        card19: null,
        card20: null,
        card21: null,
        card22: null,
        card23: null,
        card24: null,
        card25: null,
        card26: null,
        card27: null,
        card28: null,
        card29: null,
        card30: null,
        card31: null,
        card32: null,
        card33: null,
        card34: null,
        card35: null,
        card36: null
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
                // trigger concentration()
        })
    }
