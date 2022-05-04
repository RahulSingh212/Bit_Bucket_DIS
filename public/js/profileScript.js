var xValues = [];
var yValues = [0];

let codeForcesTextField = document.querySelector('#cdUserNameTF');
let codeForcesEnterButton = document.querySelector('#acceptCFuserNameBtn');

let cfUserNamePtag = document.querySelector('#pCFuserName');
let cfNumberOfContestsPtag = document.querySelector('#pCFnumberOfContests');
let cfHighestRatingPtag = document.querySelector('#pCFhigestRating');
let cfBestGlobalRankPtag = document.querySelector('#pCFbestGlobalRank');
let cfTotalProblemSolvedPtag = document.querySelector('#pCFtotalProblemsSolved');

// Div Containers
let codeForcesInfoContainer = document.querySelector('#codeForceDivContainer');
codeForcesInfoContainer.style.display = "none";

let userProgressList;
let userHighestRating = 0;
let userCurrentRating = 0;
let totalNumberOfProblemsSolved = 0; // has to be solved using another api call
let bestGlobalRanking = 999999;
let currentGlobalRanking = 0;
let numberOfContests = 0;



let codeForcesUserName = `kunalsrv20`;

let fetchUserProgressAPIcall = function() {
    let url1 = `https://codeforces.com/api/user.rating?handle=${codeForcesUserName}&api_key=a8f157ea3ef4ca3eb0ab6a66dcd3869c0bc7f55c&time=1648398608apiSig=123456183ab8aa0fa69ae43786ea2a523013489d16c1cbdc149a609f5d88a75cf4cf17ad20a0b7a73637d1c5c8c0211f24968b38b551dda7b89550b28f8dbdca6dffb8`;

    fetch(url1).then((response) => {
        response.json().then((data) => {
          if (data.error) {
            console.log('error found');
            console.log(data.error);
          }
          else {
              userProgressList = data.result;
              // console.log(userProgressList);
              updateContestAxes();
          }
        })
      });
}

let updateContestAxes = function() {
    xValues = [];
    yValues = [0];
    userHighestRating = 0;
    userCurrentRating = 0;
    totalNumberOfProblemsSolved = 0;
    bestGlobalRanking = 999999;
    currentGlobalRanking = 0;
    numberOfContests = 0;


    xValues.push(new Date((userProgressList[0].ratingUpdateTimeSeconds-11700)*1000).toDateString());
    for (let i = 0; i < userProgressList.length; i++) {
        yValues.push(userProgressList[i].newRating);
        xValues.push(new Date(userProgressList[i].ratingUpdateTimeSeconds * 1000).toDateString());

        userHighestRating = Math.max(userHighestRating, userProgressList[i].newRating);
        userCurrentRating = userProgressList[i].newRating;

        bestGlobalRanking = Math.min(bestGlobalRanking, userProgressList[i].rank);
        currentGlobalRanking = userProgressList[i].rank;
    }
    numberOfContests = userProgressList.length;

    updatePtagsOfUserInfoCodeForces();

    showRatingLineGraph();
}

let showRatingLineGraph = function() {
    new Chart("myChart", {
        type: "line",
        data: {
          labels: xValues,
          datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
          }]
        },
        options: {
          legend: {display: false},
          scales: {
            yAxes: [{ticks: {min: 0, max: (userHighestRating + 200)}}],
          }
        }
      });
}

let updatePtagsOfUserInfoCodeForces = function() {
    cfUserNamePtag.innerText = codeForcesUserName;
    cfNumberOfContestsPtag.innerText = numberOfContests;
    cfHighestRatingPtag.innerText = userHighestRating;
    cfBestGlobalRankPtag.innerText = bestGlobalRanking;

    codeForcesInfoContainer.style.display = "flex";
    codeForcesInfoContainer.classList.add('userInfoContainer');    
};

let retriveUserCodeForcesData = function() {
    if (codeForcesTextField.value.length <= 1) {
        return;
    }

    codeForcesUserName = codeForcesTextField.value;
    codeForcesTextField.value = "";

    fetchUserProgressAPIcall();
}

codeForcesEnterButton.addEventListener('click', retriveUserCodeForcesData);