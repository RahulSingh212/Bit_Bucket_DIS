// const { response } = require('express');

let thePath = require('path');
let theRequest = require('request');
let theExpress = require('express');
let theHbs = require('hbs');
const theHttps = require('https');

let functionList = require('./apis/apiCaller');
const { response } = require('express');

let app = theExpress();

// Define paths for Express Configuration
let homePageDirectoryPath = thePath.join(__dirname, '../public');
let viewFolderDirectoryPath = thePath.join(__dirname, '../templates/views');
let partialsFolderDirectoryPath = thePath.join(__dirname, '../templates/partials');
let iconsFolderDirectoryPath = thePath.join(__dirname, '../public/icons');

app.set('view engine', 'hbs');
app.set('views', viewFolderDirectoryPath);
app.use(theExpress.static(iconsFolderDirectoryPath));
theHbs.registerPartials(partialsFolderDirectoryPath);

// Rendering the Pages
app.use(theExpress.static(homePageDirectoryPath));

let contestList = [123];

// // Continuous Progress in the raing of the User (API Call)
// theHttps.get('https://codeforces.com/api/user.rating?handle=rahulsinghrs20&api_key=a8f157ea3ef4ca3eb0ab6a66dcd3869c0bc7f55c&time=1648398608apiSig=123456183ab8aa0fa69ae43786ea2a523013489d16c1cbdc149a609f5d88a75cf4cf17ad20a0b7a73637d1c5c8c0211f24968b38b551dda7b89550b28f8dbdca6dffb8', (response) => {

//     let data = "";

//     response.on('data', (chunk) => {
//         data += chunk;
//     });

//     response.on('end', () => {
//         console.log(JSON.parse(data));
//     })
// }).on('error', (errorVal) => {
//     console.log("ErrorVal: " + errorVal.message);
// });

// // Coding Contest of all different websites within a given time range
// theHttps.get('https://clist.by/api/v1/contest/?username=ashishkamathi&api_key=03432ebf540ae8ced0bf78518b92d8a5a787e788&start__lt=2022-05-01%2006:00:00.000000&end__gt=2022-03-01%2006:00:00.000000&order_by=start&duration__lt=999999', (response) => {

//     let data = "";

//     response.on('data', (chunk) => {
//         data += chunk;
//     });

//     response.on('end', () => {
//         contestList.push(JSON.parse(data));
//         // console.log(JSON.parse(data));
//     })
// }).on('error', (errorVal) => {
//     console.log("ErrorVal: " + errorVal.message);
// });

// // Coding Contest of Codeforces within a given time range: Will depend upon the resourse_id
// theHttps.get('https://clist.by/api/v1/contest/?username=ashishkamathi&api_key=03432ebf540ae8ced0bf78518b92d8a5a787e788&resource__id=2&start__lt=2022-05-01%2006:00:00.000000&end__gt=2022-03-01%2006:00:00.000000&order_by=start&duration__lt=999999', (response) => {

//     let data = "";

//     response.on('data', (chunk) => {
//         data += chunk;
//     });

//     response.on('end', () => {
//         console.log(JSON.parse(data));
//     })
// }).on('error', (errorVal) => {
//     console.log("ErrorVal: " + errorVal.message);
// });

module.exports = {
    contestList
};


let url = 'https://clist.by/api/v1/contest/?username=ashishkamathi&api_key=03432ebf540ae8ced0bf78518b92d8a5a787e788&start__lt=2022-05-01%2006:00:00.000000&end__gt=2022-03-01%2006:00:00.000000&order_by=start&duration__lt=999999';
theRequest({url: url, json:true }, (errorVal, response) => {
    if (errorVal) {
        console.log('Unable to fetch the Data');
    }
    else {
        console.log(response.body.objects);
    }
});

// Home Screen
app.get('/', (request, response) => {
    response.render('homeScreen', {
        title: 'Bit Bucket Home Screen'
    });
});

// User Profile Screen
app.get('/userProfile', (request, response) => {
    response.render('profileScreen', {
        title: 'User Profile Screen'
    });
});

// Contests Screen
app.get('/contests', (request, response) => {
    response.render('contestsScreen', {
        title: 'All availale contests',
        cList: contestList
    });
});

// Group Chat Screen
app.get('/groupChats', (request, response) => {
    response.render('groupChatScreen', {
        title: 'contest Groups'
    });
});

// Website Information Screen
app.get('/info', (request, response) => {
    response.render('infoScreen', {
        title: 'Website Information'
    });
});

// module.exports = {
//     contestList
// };


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
