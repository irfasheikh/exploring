document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'fry',
            img:  'images/fry.png'
        } ,
        {
            name: 'helloCat',
            img: 'images/hellocat.png'
        } ,
        {
            name: 'minion',
            img : 'images/minion.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.jpeg'
        },
        {
            name: 'shroom',
            img: 'images/shroom.jpeg'
        } ,
        {
            name:''
        }
    ]

    // create gameboard
    document.querySelector('.grid')

    function createBoard(){
        for (let i =0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank')
        }
    }


})