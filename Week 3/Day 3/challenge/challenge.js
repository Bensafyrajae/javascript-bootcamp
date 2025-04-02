const libform = document.getElementById('libform');
const libButton = document.getElementById('lib-button');
const storySpan = document.getElementById('story');
const shuffleButton = document.getElementById('shuffle-button');

const stories = [];

libform.addEventListener('submit', (e) => {
  e.preventDefault();

  const noun = document.getElementById('noun').value.trim();
  const adjective = document.getElementById('adjective').value.trim();
  const person = document.getElementById('person').value.trim();
  const verb = document.getElementById('verb').value.trim();
  const place = document.getElementById('place').value.trim();

  if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
    alert("Please fill out all the fields.");
    return;
  }

  const story = `${person} went to a ${adjective} ${place} to ${verb} a ${noun}.`;

  storySpan.textContent = story;

  // save the story to shufle later
  stories.push(story);
});

shuffleButton.addEventListener('click', () => {
  if (stories.length === 0) {
    alert("Please generate a story first!");
    return;
  }

  // shuffle the story
  const randomIndex = Math.floor(Math.random() * stories.length);
  storySpan.textContent = stories[randomIndex];
});