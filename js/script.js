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
                console.log(event)
                $(event).css('background', 'none')
                    // for (var i = 0; i < 2; i++) {
                    // $(this).css('background-color', 'red')

                // }
            }
            // Reveal the reverse of the selected card
    }

    var cardDeck1 = {}

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
