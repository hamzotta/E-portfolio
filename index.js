// template_s3chdi9
// service_2ebmmyk
// user_JtdrlmrJTeKNlkTZM
let isModalOpen = false;
let constrastToggle;

const scaleFactor = 1 / 20;
const scaleFactor2 = 1 / 5;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const xRot = event.clientX * scaleFactor2;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${xRot * boolInt}deg)`;
  }
}

function toggleContrast(){
    constrastToggle = !constrastToggle
    if (constrastToggle) {
        document.body.classList += "dark-theme"    
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
      .sendForm(
        'service_2ebmmyk',
        'template_q7twcig',
        event.target,
        "YxWMIPNtHziRuILKW"
    ).then(() => { 
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    })     .catch(() => {
        alert(
          "The email service is temporarly unavailable. Please contact me directly at alexfarkasbusiness@gmail.com"
        );
      });
  }

  function toggleModal() {
    scrollTo(100, 0);
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";}