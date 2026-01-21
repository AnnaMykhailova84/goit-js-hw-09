const formData = {
  email: '',
  message: '',
};

const Storage_KEY = 'feedback-form-state';

const formEl = document.querySelector('form.feedback-form');

const emailEl = formEl.querySelector('input[type="email"]');
const messageEl = formEl.querySelector('textarea[name="message"]');

populateInput();

formEl.addEventListener('submit', formSubmit);

formEl.addEventListener('input', event => {
  formTextInput(event, formData);
});

function formSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  formEl.reset();

  localStorage.removeItem(Storage_KEY);
  formData.email = '';
  formData.message = '';
}

function formTextInput(event) {
  const inputText = event.target;

  if (inputText.name === 'email') {
    formData.email = inputText.value.trim();
  }

  if (inputText.name === 'message') {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(Storage_KEY, JSON.stringify(formData));
}

function populateInput() {
  const savedInfo = JSON.parse(localStorage.getItem(Storage_KEY));
  if (!savedInfo) return;

  formData.email = savedInfo.email;
  formData.message = savedInfo.message;

  emailEl.value = formData.email;
  messageEl.value = formData.message;
}
