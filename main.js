

const box = document.querySelector('.box');

// box.addEventListener('click', () => {
//     console.log(this);
// }); // it will display window()

box.addEventListener('click', function () {

    let first = 'opening';
    let second = 'open';

    if (this.classList.contains(first)) { 
        [first, second] = [second, first];
    }

    this.classList.toggle(first);

        setTimeout(() => {
          console.log(this);
           this.classList.toggle(second);
        }, 500);
    
}); // it will display my <div> with .box class