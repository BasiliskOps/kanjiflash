const kanji = document.querySelector('.kanji')
const meaning = document.querySelector('.meaning')
const checkButton = document.querySelector('.check')
const nextButton = document.querySelector('.next')
const nxt = document.getElementById('go')

words = {
    死: 'Death',
    再生: 'Rebirth',
    幽霊: 'Haunted',
    勝利: 'Victory',
    雪辱: 'Revenge',
    悪魔: 'Demon',
    名誉と愛のために: 'For Honor and Love',
    思い: 'Desire',
    天命: 'Destiny',
    再鍛造: 'Reforged',
    人懐かしい: 'Alone',
    シューゲイザー: 'Shoegaze',
    メタル: 'Metal',
    パンク: 'Punk',
    ポストハードコア: 'Post-Hardcore',
    大作: 'Epic',
    歌謡: 'Ballad',
    ドリームポップ: 'Dream Pop',
    デスコア: 'Deathcore',
    亡霊: 'Ghost',
    ローファイ: 'Lo-fi',
    儚い: 'Ephemeral',
    絶望: 'Desperation',
    ファイナルファンタジー: 'Final Fantasy',
    ライトニング: 'Lightning',
    レイン: 'Rain'
}

data = Object.entries(words)

function getRandomWord() {
    randomKanji = data[Math.floor(Math.random() * data.length)]
    kanji.innerHTML = `<h3>${randomKanji[0]}</h3>`
    meaning.innerHTML = `<h3>${randomKanji[1]}</h3>`
}


checkButton.addEventListener('click', function() {
    if (meaning.style.display == 'block')
        meaning.style.display = 'none'
    else meaning.style.display = 'block'
})

nextButton.addEventListener('click', function() {
    getRandomWord()
})

nxt.addEventListener('keydown', event => {
    if (event.key == "ArrowRight") {
        event.preventDefault()
        document.getElementById('go').click()
    }
})

nxt.addEventListener('keydown', event => {
    if (event.key == "ArrowLeft") {
        event.preventDefault()
        document.getElementById('go').click()
    }
    console.log('keydown')
})