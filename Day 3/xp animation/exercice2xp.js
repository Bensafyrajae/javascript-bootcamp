

const myMove=()=> {
    const animateBox = document.getElementById('animate');
    const container = document.getElementById('container');
    let position = 0;

    const intervalId = setInterval(() => {
        position += 1;
        animateBox.style.left = position + 'px';

        if (position >= container.offsetWidth - animateBox.offsetWidth) {
            clearInterval(intervalId);
        }
    }, 1);
}