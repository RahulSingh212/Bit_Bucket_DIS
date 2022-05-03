let contestDivContainer = document.querySelector("#contestMainDiv");
let contestTableContainer = document.querySelector("#contestMainTable");

let contestName = "sdkfa;lskdnf";
let contestDate = "hvjhvj";
let contestDuration = "hvkhvj";
let contestOrganizer = "njhvjh";
let contestStartInLeft = "bjhvjh";
let contestDivision = "";
let contestCalender = "";
let contestLink = "";

let tableRowContest = `
    <tr>
    <td>${contestName}</td>
    <td>${contestDate}</td>
    <td>${contestDuration}</td>
    <td>${contestOrganizer}</td>
    <td>${contestStartInLeft}</td>
    <td>${contestDivision}</td>
    <td>${contestCalender}</td>
    <td>${contestLink}</td>
    </tr>
`;

let rowNew = contestTableContainer.insertRow(0);
rowNew.innerHTML = tableRowContest;


let button = document.getElementsByClassName("dropbtn");
button[0].addEventListener("click", displayBlock);
let isClicked = 0;

function displayBlock() {
  isClicked ^= 1;
  if (isClicked == 1)
    document.getElementsByClassName("dropdown-content")[0].style.display =
      "block";
  else
    document.getElementsByClassName("dropdown-content")[0].style.display =
      "none";
}

