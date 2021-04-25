// to do - make the dropdowns work
const dropBtn = document.querySelectorAll(".dropbtn");
const dropContent = document.querySelectorAll(".dropdown-content");
// dropContent[i].classList.toggle('hidden');

for (let i = 0; i < dropBtn.length; i++) {
    dropBtn[i].addEventListener('click', (e) => {
        if (e.target === dropBtn[i]) {
            dropContent[i].classList.toggle('hidden');
        } else if (e.target !== dropBtn[i]) {
            dropContent[i].classList.add('hidden');
        }
    })
}
