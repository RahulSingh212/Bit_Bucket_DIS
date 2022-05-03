// let theRequest = require('request');

// let userProgressCalling = 'https://codeforces.com/api/user.rating?handle=rahulsinghrs20&api_key=a8f157ea3ef4ca3eb0ab6a66dcd3869c0bc7f55c&time=1648398608apiSig=123456183ab8aa0fa69ae43786ea2a523013489d16c1cbdc149a609f5d88a75cf4cf17ad20a0b7a73637d1c5c8c0211f24968b38b551dda7b89550b28f8dbdca6dffb8';

// let allContestsCalling = 'https://clist.by/api/v1/contest/?username=ashishkamathi&api_key=03432ebf540ae8ced0bf78518b92d8a5a787e788&start__lt=2022-05-01%2006:00:00.000000&end__gt=2022-03-01%2006:00:00.000000&order_by=start&duration__lt=999999';

// let contestOfSingleWebsite = 'https://clist.by/api/v1/contest/?username=ashishkamathi&api_key=03432ebf540ae8ced0bf78518b92d8a5a787e788&resource__id=2&start__lt=2022-05-01%2006:00:00.000000&end__gt=2022-03-01%2006:00:00.000000&order_by=start&duration__lt=999999';

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

