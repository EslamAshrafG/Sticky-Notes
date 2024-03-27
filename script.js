"use strict";
const main = document.querySelector("main");
const creatNoteBtn = document.querySelector(".creat-btn");

creatNoteBtn.addEventListener("click", () => {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");
  main.appendChild(noteDiv);

  const colors = ["cadetblue", "black", "white", "burlywood", "blue"];

  const colorsDiv = document.createElement("div");
  colorsDiv.classList.add("note-colors");
  noteDiv.appendChild(colorsDiv);

  for (let i = 0; i < colors.length; i++) {
    const colorSpan = document.createElement("span");
    colorSpan.classList.add("color");
    colorSpan.style.backgroundColor = colors[i];
    colorSpan.setAttribute("data-color", colors[i]);
    colorSpan.addEventListener("click", function (e) {
      const textarea = noteDiv.querySelector("textarea");
      textarea.style.backgroundColor = this.getAttribute("data-color");
      if (
        this.getAttribute("data-color") === "black" ||
        this.getAttribute("data-color") === "blue"
      ) {
        textarea.style.color = "white";
      } else if (
        this.getAttribute("data-color") === "white" ||
        this.getAttribute("data-color") === "cadetblue" ||
        this.getAttribute("data-color") === "burlywood"
      ) {
        textarea.style.color = "black";
      }
    });
    colorsDiv.appendChild(colorSpan);
  }

  const noteForm = document.createElement("form");
  noteDiv.appendChild(noteForm);
  const textArea = document.createElement("textarea");
  textArea.setAttribute("placeholder", "Your Note Here");
  noteForm.appendChild(textArea);

  const deleteNote = document.createElement("span");
  deleteNote.classList.add("delete-Btn");
  deleteNote.textContent = "x";
  noteDiv.appendChild(deleteNote);
  deleteNote.addEventListener("click", () => {
    main.removeChild(noteDiv);
  });
});
