let readNotifications = document.getElementById('btnNotifications');
let section = document.querySelector('section');

readNotifications.addEventListener('click', () => {
    console.log(section)
    section.classList.toggle('toggle-btn');
})