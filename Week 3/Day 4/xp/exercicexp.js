document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.canvas');
    const colors = document.querySelectorAll('.color');
    const clearButton = document.getElementById('clear');
    let selectedColor = 'red';
    let isDrawing = false;

    for (let i = 0; i < 20 * 20; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    }

    colors.forEach(color => {
        color.addEventListener('click', () => {
            colors.forEach(c => c.classList.remove('selected'));
            color.classList.add('selected');
            selectedColor = color.dataset.color;
        });
    });

    canvas.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('pixel')) {
            isDrawing = true;
            e.target.style.backgroundColor = selectedColor;
        }
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    canvas.addEventListener('mouseover', (e) => {
        if (isDrawing && e.target.classList.contains('pixel')) {
            e.target.style.backgroundColor = selectedColor;
        }
    });

    clearButton.addEventListener('click', () => {
        document.querySelectorAll('.pixel').forEach(pixel => {
            pixel.style.backgroundColor = 'white';
        });
    });

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});
