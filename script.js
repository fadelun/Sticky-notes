const allMargin = ["2px", "1.5%", "3px", "-1px", "-2%"];
const allScale = ["5deg", "-4deg", "2deg", "-3deg", "-2deg"];
const allColors = ["E9C46A", "06D6A0", "118AB2", "EB886F", "EF476F"];
const btn = document.querySelector("button");
const modal = document.querySelector(".modal");
const exit = document.querySelector(".exit");
const allNotes = document.querySelector(".all-notes");

// const notes = document.getElementsByClassName("note");

btn.addEventListener("click", () => {
  modal.style.display = "flex";
});

exit.addEventListener("click", () => {
  inputText = "";
  modal.style.display = "none";
});

window.addEventListener("keydown", (event) => {
  if (modal.style.display == "flex") {
    let inputText = document.querySelector("textarea");

    if (event.key == "Enter") {
      const note = `<div class="note">
                      <p>
                      ${inputText.value}
                      </p>      
                      </div>`;

      allNotes.innerHTML += note;
      styleNote(allNotes.lastChild);

      inputText.value = " ";
      modal.style.display = "none";
    }
  }
});

const styleNote = (note) => {
  // const marginSet = allMargin.map((margin, i) => margin, i).filter((margin, i) => Math.floor(Math.random() * 3) == i);

  const randomNum = Math.floor(Math.random() * 4);
  // const randomNum02 = Math.floor(Math.random() * 4);

  const marginSet = allMargin.filter((m, i) => i == randomNum);
  note.style.marginLeft = marginSet;

  // allMargin.map((m, i) => {
  //   if (i == randomNum) {
  //     note.style.marginLeft = m;
  //   }
  // });

  const colorSet = allColors.filter((m, i) => i == randomNum);
  note.style.backgroundColor = "#" + colorSet;

  // allColors.map((m, i) => {
  //   if (i == randomNum02) {
  //     console.log(i);
  //     note.style.backgroundColor = "#" + m;
  //   }
  // });

  const scaleSet = allScale.filter((m, i) => i == randomNum);
  note.style.transform = `rotate(${scaleSet})`;

  // allScale.map((m, i) => {
  //   if (i == randomNum02) {
  //     console.log(i);
  //     note.style.transform = `rotate(${m})`;
  //   }
  // });
};

// const scales = allScale.filter((s, i) => i == 0);
allColors.forEach((m) => console.log(m));
