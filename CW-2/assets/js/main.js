class Form {
  constructor(formButton, closeIcon, modal, body, contactForm) {
    this.formButton = formButton;
    this.closeIcon = closeIcon;
    this.modal = modal;
    this.body = body;
    this.contactForm = contactForm;
    this.openForm();
    this.closeForm();
    this.submitForm();
  }

  openForm() {
    this.formButton.addEventListener("click", () => {
      this.modal.classList.add("display");
      this.body.classList.add("hide");
    });
  }

  closeForm() {
    this.closeIcon.addEventListener("click", () => {
      this.modal.classList.remove("display");
      this.body.classList.remove("hide");
    });
  }

  submitForm() {
    this.contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
      };

      try {
        const response = await axios.post(
          "https://tripadvisor-clone-api.herokuapp.com/form",
          data
        );
        console.log(response.data);
        if (response.status === 200) {
          alert("An email has been sent !");
        } else {
          alert("Bad request");
        }
      } catch (error) {
        console.error(error.message);
      }
    });
  }
}

const form = new Form(
  document.querySelector("#openForm"),
  document.querySelector("#closeForm"),
  document.querySelector("#modal"),
  document.querySelector(".body"),
  document.querySelector(".contact-form")
);
