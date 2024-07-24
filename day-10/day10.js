// Task 1: Click event to change paragraph text
const changeTextButton = document.getElementById('changeTextButton');
const textParagraph = document.getElementById('textParagraph');

changeTextButton.addEventListener('click', () => {
    textParagraph.textContent = 'The text has been changed!';
});

// Task 2: Double-click event to toggle image visibility
const toggleImage = document.getElementById('toggleImage');

toggleImage.addEventListener('dblclick', () => {
    toggleImage.classList.toggle('hidden');
});

// Task 3 & 4: Mouseover and mouseout events
const hoverElement = document.getElementById('hoverElement');

hoverElement.addEventListener('mouseover', () => {
    hoverElement.style.backgroundColor = 'lightgreen';
});

hoverElement.addEventListener('mouseout', () => {
    hoverElement.style.backgroundColor = 'lightblue';
});

// Task 5: Keydown event to log key pressed
const keyInput = document.getElementById('keyInput');

keyInput.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Task 6: Keyup event to display input value
const displayInput = document.getElementById('displayInput');

keyInput.addEventListener('keyup', () => {
    displayInput.textContent = `Typed value: ${keyInput.value}`;
});

// Task 7: Submit event to prevent form submission and log data
const exampleForm = document.getElementById('exampleForm');

exampleForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(`Form submitted with data - Name: ${exampleForm.name.value}, Email: ${exampleForm.email.value}`);
});

// Task 8: Change event to display selected dropdown value
const dropdown = document.getElementById('dropdown');
const selectedValue = document.getElementById('selectedValue');

dropdown.addEventListener('change', () => {
    selectedValue.textContent = `Selected value: ${dropdown.value}`;
});

// Task 9 & 10: Event delegation for list items
const itemList = document.getElementById('itemList');
const addItemButton = document.getElementById('addItemButton');

itemList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

addItemButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});
