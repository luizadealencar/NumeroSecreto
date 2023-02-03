const elementoChute=document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recongnition = new SpeechRecognition();
recongnition.lang = 'pt-Br'
recongnition.start()
recongnition.addEventListener('result', onSpeak)
function onSpeak(e){
    chute=e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
    finalizaComGameOver(chute)
}
function exibeChuteNaTela(chute){
    elementoChute.innerHTML=`
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}
function finalizaComGameOver(chute) {
    if(chute === 'game over') {
        document.body.innerHTML = `
            <h2>GAME OVER</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</buttton>
        `
        document.body.style.backgroundColor = 'red'
    }
}
recongnition.addEventListener('end', () => recongnition.start())