const sendBtn = document.querySelector(".sendbtn");

const sentMsg = document.querySelector(".sent")

sendBtn.addEventListener("click", ()=> {
    sentMsg.style.display = "flex"
    sentMsg.style.justifyContent = "center"
    sentMsg.style.alignItems = "center"
})