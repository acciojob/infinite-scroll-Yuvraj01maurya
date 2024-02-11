//your code here!
document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById('infi-list');
    
    function addMoreItems() {
        for (let i = 0; i < 10; i++) {
            const li = document.createElement('li');
            li.textContent = `List item ${list.children.length + i + 1}`;
            list.appendChild(li);
        }
    }
    
    addMoreItems(); // Add 10 list items by default
    
    window.addEventListener('scroll', function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            addMoreItems(); // Add more items when user reaches the end of the list
        }
    });
});

