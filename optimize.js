// Disable developer tools shortcuts and right-click
document.addEventListener('keydown', (event) => {
    const blockedKeys = ['F12', 'I', 'J', 'U'];
    const ctrlShift = event.ctrlKey && event.shiftKey;

    if (event.key === 'F12' || 
       (ctrlShift && blockedKeys.includes(event.key)) || 
       (event.ctrlKey)) {
        event.preventDefault();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    console.log('Next button clicked');
    nextPage();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    console.log('Previous button clicked');
    previousPage();
});