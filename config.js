const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'EN4gzDSA#vc9qCLxoVOH9d9eV5A9rvZqz9_2Y1BQe33NXMayvqOo' : process.env.SESSION_ID, 
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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' : process.env.GITHUB_AUTH_TOKEN,  //🛑 Github token එක දැමීමේදී ghp_  කොටස ඉවර් කර දමන්න.  
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'Thinu-98' : process.env.GITHUB_USER_NAME, // 🛑 Github user name එක ගද්දි ඔයාලා token එක ගත්ත Github එකේ user name එක දාන්න අනිවාරෙන්
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT, 


//🛑 Github token එක දැමීමේදී ghp_  කොටස ඉවර් කර දමන්න.
//🛑 Github user name එක ගද්දි ඔයාලා token එක ගත්ත Github එකේ user name එක දාන්න අනිවාරෙන්

};
