const root = document.querySelector(".slideshow");

if (root) {
    const slides = [...root.querySelectorAll("img")];
    const toggle = root.querySelector('[data-action="toggle"]');
    const intervalMs = Number(root.dataset.interval) || 5000;
    let index = slides.findIndex((img) => !img.hidden);
    if (index < 0) {
        index = 0;
    }
    let timer = null;

    function show(next) {
        if (slides.length === 0) {
            return;
        }
        index = (next + slides.length) % slides.length;
        slides.forEach((img, i) => {
            img.hidden = i !== index;
        });
    }

    function play() {
        stopTimer();
        timer = window.setInterval(() => show(index + 1), intervalMs);
        if (toggle) {
            toggle.textContent = "Pause";
        }
    }

    function stopTimer() {
        if (timer !== null) {
            window.clearInterval(timer);
            timer = null;
        }
    }

    function pause() {
        stopTimer();
        if (toggle) {
            toggle.textContent = "Play";
        }
    }

    root.addEventListener("click", (event) => {
        const button = event.target.closest("button");
        if (!button || !root.contains(button)) {
            return;
        }
        const action = button.dataset.action;
        if (action === "prev") {
            show(index - 1);
            if (timer !== null) {
                play();
            }
        } else if (action === "next") {
            show(index + 1);
            if (timer !== null) {
                play();
            }
        } else if (action === "toggle") {
            if (timer !== null) {
                pause();
            } else {
                play();
            }
        }
    });

    play();
}
