// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JqY0x4ZVlMTWVoQjhoUUpPTTJ5dllmMGpjbVRSUWlUNFd4eHFtK2NtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHRkT0I5eVV4WTV2K1NEYk1aelc2S3NBQW55Y0JZa3ZEL3JQczVHTFJqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTy9Xb25kS0piQzM5UUxaeXVkSkNIWlN0NEdVYUFPRzJVYXA1UFNkb0Z3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZT1djSk8yd2szTVYwMlFPekZ1OEkxbWN2dHZuamZBUUpnUENpVUNrSUI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9JUmFCT1hEcDRCOWVRc3pRbWtWOHdqb09ZUzF3SlhJTnpnNUtQQzRQWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtFQk93K3BTSFBUa1VndU1KNlBoSmdGNHYzOEV2SWt4MUlaWDdkemtXVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNMU0xQcEJuWnZZTFJ0VURPcS9KY3RJM2tWS015Qm03MmpvT2dxejAyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDVHbktOYkVGeHp5ZkIwWnlHZUF0ZC9scTRORGNFNEI0K1d0QzdiSGlFND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYycUFOYXNLdzRtVm9xVGxtc1lzU0gwQ1JmOTRHQktCTVVFdDBTRm1uWUVpYkR1TVVKWGNydUpBSFB5T1dDNE1ycytMSzMybkVzU3MyZ2JVVHorZ0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJGQTd0YVFDbm1qMEtySi94U1I4M05VWGVxNXNrcndBNG9vbnBOMTJxOTZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiMjU0NzA3NzI2NzIyOjc3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRlIG1vcmVoIiwibGlkIjoiMjcxMzg2Njg1NzQzMTE1Ojc3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTZ4NjZzSEVQclRsY0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicGdpZ0pLcHdFeEhPS0VqT1piaTNpOHFPQ0hnWm1IdEdVaXg0YjRYZFNBZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVDQ2Q3lkdVhMeVFSam5SVCtQQzR1MzVNRHlqMXJkYld0NGlDSFU1VnBIZTVtdmEwV24xVkNPaytFTjBFMFgvZkMzN1lva1lBMjdwWUxKL0IzcjVSQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Ilk3T1E1dGpYeHFIRUcwRVVWR09hazdnUkJ6RWpQY3RBaW9SSmltTWFLaWZaODFEdlFvVThlNDlBY01OSzQ5K2RZS2VnUVF6UjVqQncvcFdWb0tDMENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA3NzI2NzIyOjc3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFZSW9DU3FjQk1SemloSXptVzR0NHZLamdoNEdaaDdSbElzZUcrRjNVZ0kifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTM3OTU4MiwibGFzdFByb3BIYXNoIjoiMUs0aEg0In0=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "GURU_TECH.KE",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254707726722",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
