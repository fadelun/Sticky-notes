const allMargin = ["2px", "1.5%", "3px", "-1px", "-2%"];
const allRotate = ["5deg", "-4deg", "2deg", "-3deg", "-2deg"];
const allColors = ["E9C46A", "06D6A0", "118AB2", "EB886F", "EF476F"];
const btn = document.querySelector("button");
const modal = document.querySelector(".modal");
const exit = document.querySelector(".exit");
const allNotes = document.querySelector(".all-notes");

// klik button untuk memunculkan note baru
btn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// klik exit untuk keluar
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
      // function untuk memodifikasi note
      styleNote(allNotes.lastChild);

      inputText.value = " ";
      modal.style.display = "none";
    }
  }
});

const styleNote = (note) => {
  const randomNum = Math.floor(Math.random() * allMargin.length);
  const randomNum02 = Math.floor(Math.random() * allColors.length);
  // set margin
  const marginSet = allMargin.filter((m, i) => i == randomNum);
  note.style.marginLeft = marginSet;
  // set warna
  const colorSet = allColors.filter((m, i) => i == randomNum02);
  note.style.backgroundColor = "#" + colorSet;
  // set rotate
  const rotateSet = allRotate.filter((m, i) => i == randomNum02);
  note.style.transform = `rotate(${rotateSet})`;
};

// const scales = allRotate.filter((s, i) => i == 0);
// allColors.forEach((m) => console.log(m));
