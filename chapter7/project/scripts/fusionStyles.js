function goodLuck() {
  alert('Good Luck!')
}

function haveWeMet() {
  var customerName = document.getElementById('customer-name').value
  var metPTag = document.getElementById('have-we-met')
  metPTag.innerHTML = 'Have we met before, ' + customerName + '?'
}

function goodChoice() {
  var goodChoice = document.getElementById('good-choice')
  goodChoice.innerHTML = 'Good choice'
  goodChoice.style.backgroundColor = 'Purple'
  goodChoice.style.color = 'Yellow'
}

function ratingChoice() {
  var rating = document.getElementById('rating').value
  var ratingText = document.getElementById('rating-text')
  if(rating <= 4) {
    ratingText.innerHTML = 'Are you sure?'
  } else if (rating >= 6) {
    ratingText.innerHTML = 'Great'
  }
}

function getItRight() {
  alert('Get it right this time!')
  document.getElementsByTagName('body')[0].style.backgroundColor = '#99FFFF'
}

function submitSurvey(ev) {
  var phoneNumber = document.getElementById('phone-number').value
  var formFeedback = document.getElementById('submit-feedback')
  if(phoneNumber === '') {
    formFeedback.innerHTML = 'Tricked you--phone number is required!'
    formFeedback.style.backgroundColor = 'Gray'
    formFeedback.style.color = 'Red'
    ev.preventDefault()
  } else {
    formFeedback.innerHTML = 'Thanks--can I call you tomorrow?'
    formFeedback.style.backgroundColor = 'Gray'
    formFeedback.style.Color = 'Green'
  }
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
