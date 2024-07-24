// Task 1: Select an HTML element by its ID and change its text content.
document.addEventListener('DOMContentLoaded', () => {
    let h1i = document.getElementById("h1");
    if (h1i) h1i.innerText = "Not hello";
});

// Task 2: Select an HTML element by its class and change its background color.
document.addEventListener('DOMContentLoaded', () => {
    let h1c = document.getElementsByClassName("red");
    if (h1c.length > 0) h1c[0].style.color = "red";
});

// Task 3: Create a new div element with some text content and append it to the body.
document.addEventListener('DOMContentLoaded', () => {
    let newDiv = document.createElement('div');
    newDiv.textContent = 'This is a new div element.';
    document.body.appendChild(newDiv);
});

// Task 4: Create a new li element and add it to an existing ul list.
document.addEventListener('DOMContentLoaded', () => {
    let newLi = document.createElement('li');
    newLi.textContent = 'This is the new list item';
    let ul = document.getElementsByTagName('ul');
    if (ul.length > 0) ul[0].appendChild(newLi);
});

// Task 5: Select an HTML element and remove it from the DOM.
document.addEventListener('DOMContentLoaded', () => {
    let h1i = document.getElementById("h1");
    if (h1i) h1i.remove();
});

// Task 6: Remove the last child of a specific HTML element.
document.addEventListener('DOMContentLoaded', () => {
    let body = document.getElementsByTagName('body')[0];
    if (body.lastChild) body.removeChild(body.lastChild);
});

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.addEventListener('DOMContentLoaded', () => {
    let img = document.getElementsByClassName("example-image")[0];
    if (img) img.src = "new-image-url.jpg";
});

// Task 8: Add and remove a CSS class to/from an HTML element.
document.addEventListener('DOMContentLoaded', () => {
    let element = document.getElementById("example-element");
    if (element) {
        element.classList.add("new-class");
        element.classList.remove("old-class");
    }
});

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementsByTagName('button')[0];
    let p = document.getElementsByTagName('p')[0];
    if (button && p) {
        button.onclick = () => { p.innerText = "Button kyu dabaya bahdware"; };
    }
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
document.addEventListener('DOMContentLoaded', () => {
    let hover = document.getElementById('hover');
    if (hover) {
        hover.addEventListener('mouseover', () => {
            hover.style.borderColor = "red";
        });
        hover.addEventListener('mouseout', () => {
            hover.style.borderColor = ""; 
        });
    }
});

