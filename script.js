function openEnvelope() {
    document.querySelector('.envelope-top').style.transform = 'rotateX(180deg)';
    setTimeout(() => {
        document.getElementById('message').style.display = 'block';
    }, 500);

    setTimeout(() => {
        document.querySelector('.burn-effect').classList.add('burn');
    }, 1500);
}
