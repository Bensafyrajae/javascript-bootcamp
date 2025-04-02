const container = document.getElementById('container');
console.log(container);

const lists = document.querySelectorAll('.list');
const pete = lists[0].querySelector('li:nth-child(2)');
pete.textContent = 'Richard';

const secondList = lists[1];
const secondItem = secondList.querySelector('li:nth-child(2)');
secondItem.remove();

lists.forEach(list => {
    const firstItem = list.querySelector('li');
    firstItem.textContent = 'rajae'; 
});

lists.forEach(list => {
    list.classList.add('student_list');
});

const firstList = lists[0];
firstList.classList.add('university', 'attendance');

container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';

const danItem = secondList.querySelector('li:nth-child(3)');
danItem.style.display = 'none';

const richardItem = lists[0].querySelector('li:nth-child(2)');
richardItem.classList.add('richard');

if (container.style.backgroundColor === 'lightblue') {
    const users = Array.from(lists[0].children).map(item => item.textContent);
    alert(`Bonjour ${users[0]} et ${users[1]}`);
}
