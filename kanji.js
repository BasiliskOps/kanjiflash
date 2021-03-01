const kanji = document.querySelector('.kanji')
const meaning = document.querySelector('.meaning')
const checkButton = document.querySelector('.check')
const nextButton = document.querySelector('.next')

words = {
    死: 'Death',
    再生: 'Rebirth',
    幽霊: 'Haunted',
    勝利: 'Victory',
    雪辱: 'Revenge',
    悪魔: 'Demon'
}

data = Object.entries(words)

function getRandomWord() {
    randomKanji = data[Math.floor(Math.random() * data.length)]
    kanji.innerHTML = `<h3>${randomKanji[0]}</h3>`
    meaning.innerHTML = `<h3>${randomKanji[1]}</h3>`
}

checkButton.addEventListener('click', function() {
    meaning.style.display = 'block'
})

nextButton.addEventListener('click', function() {
    getRandomWord()
})