// Fonction pour jouer le son
function playSound(e) {
    let key;
    
    // Si c'est un événement clavier
    if (e.type === 'keydown') {
      key = e.keyCode;
    } 
    // Si c'est un événement clic
    else if (e.type === 'click') {
      key = e.target.getAttribute('data-key');
    }
    
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    
    if (!audio) return; // si aucune audio trouvée, stop
    
    audio.currentTime = 0; // rewind to start
    audio.play();
  }
  
  // Ajouter écouteur d'événement clavier
  window.addEventListener('keydown', playSound);
  
  // Ajouter écouteur d'événement click
  const buttons = document.querySelectorAll('.drum');
  buttons.forEach(button => button.addEventListener('click', playSound));
  