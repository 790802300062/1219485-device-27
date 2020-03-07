var popupWriteLink = document.querySelector(".write-us"),
    popupWrite = document.querySelector(".message"),
    userName = popupWrite.querySelector("[name=user-name]"),
    userEmail = popupWrite.querySelector("[name=user-email]"),
    popupWriteForm = popupWrite.querySelector("form"),
    popupMapLink = document.querySelector(".contacts-map"),
    popupMap = document.querySelector(".map"),
    popupWriteClose = document.querySelector(".about-btn-close"),
    popupMapClose = document.querySelector(".map-btn-close")

popupWriteLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("message-active");
  userName.focus();
})

popupWriteForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popupWrite.classList.remove("message-error");
    popupWrite.offsetWidth = popupWrite.offsetWidth;
    popupWrite.classList.add("message-error");
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWrite.classList.contains("message-active")) {
      popupWrite.classList.remove("message-active");
      popupWrite.classList.remove("message-error");
    }
  }
})

popupWriteClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("message-active");
  popupWrite.classList.remove("message-error");
})

popupMapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("map-active");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("map-active")) {
      popupMap.classList.remove("map-active");
    }
  }
})

popupMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("map-active");
})


