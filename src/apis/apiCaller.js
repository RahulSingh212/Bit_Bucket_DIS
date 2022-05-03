let thePath = require('path');
let theRequest = require('request');
let theExpress = require('express');
let theHbs = require('hbs');
const theHttps = require('https');

let appContests = require('../app');

let userProgressCalling = 'https://codeforces.com/api/user.rating?handle=rahulsinghrs20&api_key=a8f157ea3ef4ca3eb0ab6a66dcd3869c0bc7f55c&time=1648398608apiSig=123456183ab8aa0fa69ae43786ea2a523013489d16c1cbdc149a609f5d88a75cf4cf17ad20a0b7a73637d1c5c8c0211f24968b38b551dda7b89550b28f8dbdca6dffb8';

let allContestsCalling = 'https://clist.by/api/v1/contest/?username=ashishkamathi&api_key=03432ebf540ae8ced0bf78518b92d8a5a787e788&start__lt=2022-05-01%2006:00:00.000000&end__gt=2022-03-01%2006:00:00.000000&order_by=start&duration__lt=999999';

let contestOfSingleWebsite = 'https://clist.by/api/v1/contest/?username=ashishkamathi&api_key=03432ebf540ae8ced0bf78518b92d8a5a787e788&resource__id=2&start__lt=2022-05-01%2006:00:00.000000&end__gt=2022-03-01%2006:00:00.000000&order_by=start&duration__lt=999999';

// theHttps.get('https://clist.by/api/v1/contest/?username=ashishkamathi&api_key=03432ebf540ae8ced0bf78518b92d8a5a787e788&start__lt=2022-05-01%2006:00:00.000000&end__gt=2022-03-01%2006:00:00.000000&order_by=start&duration__lt=999999', (response) => {

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