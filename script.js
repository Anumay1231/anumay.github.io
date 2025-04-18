
const toggle = document.getElementById('neebu-toggle');
const chat = document.getElementById('neebu-chat');
const input = document.getElementById('neebu-input');
const response = document.getElementById('neebu-response');

toggle.onclick = () => {
  chat.classList.toggle('hidden');
};

const answers = {
  hobby: "Kicking code by day, footballs by night ⚽",
  fact: "Litraly knows too much about laptops. Ask him what laptop you should buy — I dare you.",
  job: "Building AI that cracks jokes. Basically me — but with a better salary.",
  comfort: "More ice cream. Always more. 🍦",
  warning: "Passive aggression enjoyer. Approach with ice cream or a good meme."
};

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const val = input.value.toLowerCase();
    let reply = "Hmm... I didn’t get that. Try asking about hobby, fact, job, comfort, or warning!";

    if (val.includes("hobby")) reply = answers.hobby;
    else if (val.includes("fact")) reply = answers.fact;
    else if (val.includes("job")) reply = answers.job;
    else if (val.includes("comfort")) reply = answers.comfort;
    else if (val.includes("warning")) reply = answers.warning;

    response.textContent = reply;
    input.value = "";
  }
});
