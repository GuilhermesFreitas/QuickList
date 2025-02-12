document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  const listGroup = document.querySelector(".list-group");

  button.addEventListener("click", () => {
    const itemText = input.value.trim();
    if (itemText === "") return;

    const listItem = document.createElement("li");
    listItem.classList.add("list-content");

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const span = document.createElement("span");
    span.textContent = itemText;

    label.appendChild(checkbox);
    label.appendChild(span);

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./public/images/bin.svg";
    deleteIcon.alt = `Excluir ${itemText}`;
    deleteIcon.style.cursor = "pointer";
    deleteIcon.addEventListener("click", () => {
      listItem.remove();
    });

    listItem.appendChild(label);
    listItem.appendChild(deleteIcon);
    listGroup.appendChild(listItem);

    input.value = "";
    input.focus();
  });

  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      button.click();
    }
  });
});
