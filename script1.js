const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function updateDisplay(value) {
  if (display.textContent === "0" && !isNaN(value)) {
    display.textContent = value; // replace initial 0
  } else {
    display.textContent += value;
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("clear")) {
      display.textContent = "0";
    } else if (btn.classList.contains("delete")) {
      display.textContent = display.textContent.slice(0, -1) || "0";
    } else if (btn.classList.contains("equal")) {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = "Error";
      }
    } else if (btn.textContent === "%") {
      try {
        display.textContent = String(eval(display.textContent) / 100);
      } catch {
        display.textContent = "Error";
      }
    } else {
      updateDisplay(btn.textContent);
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if ((e.key >= "0" && e.key <= "9") || ["+", "-", "*", "/", "."].includes(e.key)) {
    updateDisplay(e.key);
  } else if (e.key === "Enter") {
    try {
      display.textContent = eval(display.textContent);
    } catch {
      display.textContent = "Error";
    }
  } else if (e.key === "Backspace") {
    display.textContent = display.textContent.slice(0, -1) || "0";
  } else if (e.key === "Escape") {
    display.textContent = "0";
  } else if (e.key === "%") {
    try {
      display.textContent = String(eval(display.textContent) / 100);
    } catch {
      display.textContent = "Error";
    }
  }
});