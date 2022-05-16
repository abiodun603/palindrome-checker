const textInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
infoTxt = document.querySelector(".info-txt");
let filterInput;



textInput.addEventListener("keyup", () => {
  // the regex function below appect only A-Z, 0-9
  // character else return an empty strings for other character
  // removing spaces & all special character from entered value
  filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "")
  console.log(filterInput)
  if(filterInput){
    return checkBtn.classList.add("active");
  }

  checkBtn.classList.remove("active");
  infoTxt.style.display = "none";

})

checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.style.display = "block";
  textInput.value = ""


  if(filterInput != reverseInput){
    return infoTxt.innerHTML = `Yes, <span>${textInput.value}</span> isn't a palindrome`
  }
  return infoTxt.innerHTML = `Yes, <span>${textInput.value}</span> is a palindrome`
})

console.log(filterInput);

