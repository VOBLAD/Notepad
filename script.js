const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
selectFont = document.querySelector(".font select"),
selectFamily = document.querySelector(".family select")
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
    const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Сохранить как ${selectedFormat}`;
});

selectFont.addEventListener("change", () =>{
    const changeFont = selectFont.options[selectFont.selectedIndex].text;
    textarea.style.fontSize = changeFont + "px";
});

selectFamily.addEventListener("change", () =>{
    const changeFamily = selectFamily.value
    textarea.style.fontFamily = changeFamily                   
});

saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click();
});