const footer = document.createElement("footer");

document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerHTML = `© Anna Baker ${thisYear}`;

footer.appendChild(copyright);
const skills = ["HTML", "CSS", "JavaScript", "GitHub"];

const skillsSection = document.getElementById("Skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}
const messageForm = document.querySelector(
    'form[name="leave_message"]'
);

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");

    newMessage.innerHTML = "<a></a> <span></span>";

    const nameLink = newMessage.querySelector("a");
    nameLink.href = "mailto:" + usersEmail;
    nameLink.innerText = usersName;

    newMessage.querySelector("span").innerText = usersMessage;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});