const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const input = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";


const formDataLocal = localStorage.getItem(localStorageKey);

if (formDataLocal) {
    textarea.value = JSON.parse(formDataLocal).message;
    input.value = JSON.parse(formDataLocal).email;
    formData.email = input.value;
    formData.message = textarea.value;
}


form.addEventListener("input", (evt) => {
    formData.email = input.value.trim();
    formData.message = textarea.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (input.value && textarea.value) {
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        form.reset();
    } else {
        alert('Fill please all fields');
    }
});