    // Player Moves

var playerMoves = {
        twoCards: [],
        cardSelect: 
    $('.card').on('click', function(event) {
        event.preventDefault()
        console.log("Card Select")
    }),
        cardHighlight:
        //Card Highlighter
            $('.card').on('mouseover', function(event) {
            event.preventDefault()
                console.log("Card Highlighter")
                // selected cards are placed in an array
                // if statement will prevent player from selecting
                // more than 2 cards
        })
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
