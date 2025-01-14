// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

document.getElementById('sendButton').addEventListener('click', function () {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
    
      // Basic validation
      if (!name || !email || !message) {
        alert('Error: Please fill out all fields.');
        return;
      }
    
      // Simulating successful message sending
      const isMessageSent = Math.random() > 0.5; // Simulate success/failure
    
      if (isMessageSent) {
        alert('Message sent successfully!');
      } else {
        alert('Error: Message could not be sent.');
      }
    });
function showMessage(platform) {
  alert(`The ${platform} profile is not available right now. Stay tuned!`);
}
 