  var link = document.querySelector(".form__find");
  var form = document.querySelector(".form");
  
  var dateBeg = form.querySelector("[name=date-beg]");
  var dateEnd = form.querySelector("[name=date-end]");
  var countAdult = form.querySelector("[name=count-adult]");
  var countChild = form.querySelector("[name=count-child]");

  var storageDateBeg = localStorage.getItem("dateBeg");
  var storageDateEnd = localStorage.getItem("dateEnd");
  var storageCountAdult = localStorage.getItem("countAdult");
  var storageCountChild = localStorage.getItem("countChild");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.remove("form-error");
    form.classList.toggle("form-show");
    if (storageDateBeg) {
      dateBeg.value = storageDateBeg;
    }
    if (storageDateBeg) {
      dateEnd.value = storageDateEnd;
    }
    if (storageCountAdult) {
      countAdult.value = storageCountAdult;
    }
    if (storageCountChild) {
      countChild.value = storageCountChild;
    }
  });

  form.addEventListener("submit", function(event) {   
    if (!dateBeg.value || !dateEnd.value || !countAdult.value || !countChild.value) {
      event.preventDefault();
      form.classList.remove("form-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("form-error");
    } else {
      if (countAdult.value <= 0 || countChild.value <= 0) {
        event.preventDefault();
        form.classList.remove("form-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("form-error");
      }
      localStorage.setItem("dateBeg", dateBeg.value);
      localStorage.setItem("dateEnd", dateEnd.value);
      localStorage.setItem("countAdult", countAdult.value);
      localStorage.setItem("countChild", countChild.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (form.classList.contains("form-show")) {
        form.classList.remove("form-show");
        form.classList.remove("form-error");
      }
    }
  });