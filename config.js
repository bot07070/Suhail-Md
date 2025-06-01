const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_56_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDg2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDczLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgODksXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzNXVvcDR3L2NLZklMSk1tb1Z3VDhXeStaQkFVdDlNWHliMzU4UlcwWXNNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3allCQm5OeVQyZUZndFBSbDBrNUF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjg4NWE5MzE2LTJiZTgtNGY0ZS1hZDg2LWM3OWRlYmI4N2ZmOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICAyMTUsXG4gICAgICAxMTQsXG4gICAgICAyMzAsXG4gICAgICAxMDUsXG4gICAgICAyNixcbiAgICAgIDYxLFxuICAgICAgMTM4LFxuICAgICAgMTkwLFxuICAgICAgMzQsXG4gICAgICAxNjgsXG4gICAgICAxOTYsXG4gICAgICAxMDgsXG4gICAgICAxMTQsXG4gICAgICAyMTgsXG4gICAgICAzNixcbiAgICAgIDE4OCxcbiAgICAgIDI2LFxuICAgICAgMjEzLFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICA3NyxcbiAgICAgIDI0OSxcbiAgICAgIDExNyxcbiAgICAgIDI0NCxcbiAgICAgIDI0NyxcbiAgICAgIDIxNCxcbiAgICAgIDE3LFxuICAgICAgMTI4LFxuICAgICAgMjUzLFxuICAgICAgMjEyLFxuICAgICAgMTMxLFxuICAgICAgMSxcbiAgICAgIDcyLFxuICAgICAgMTI0LFxuICAgICAgMjIxLFxuICAgICAgMjI5LFxuICAgICAgMjI0LFxuICAgICAgNzcsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZjcrZFVDRUtUUjg4RUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVEVUaXd2THA0aE9sZ3ZCaXVyTG1tVytFM0ZrSHdkN0h1eWxqc20wUE5pSUV3UlRDYzdxZ25nSXdNWldKWHIrbmVjMTd0TlZRZlNmMFdsdG1BRmkzQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSnJsV2x1YVFrWGdpR2t6U1NzeUVnTGduWGtxL1NadFFKNU1kblFaN3hwQ2pvSjVYcDgyMkZ5WVVpdGMwSjVyZkViRUgvN1BFTjI2SVlaTTlPZkxxaUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjgyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0ODgyMjE4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlNZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1kLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRzNGSTAycUkvQ09CQnFKcys3T1FpcW1SUkp4am5nNmpOTTdwTXpBODQwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNZS5qc29uIjogIntcImtleURhdGFcIjpcImtVZzRwSzJxN09EamFJclllS01Sc1hMRHNQWHlTZzhCTTVGL0NHTGxIT0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4NjcxMTk2NDY1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1mLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM3QwY1kzKzJUT2kvc0hrMVE2NlVocndCaWhpdW9hWmkzOTRpNlcrVDdDaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNZy5qc29uIjogIntcImtleURhdGFcIjpcInVOeC9CbW5oK0VFY1FXdEtDcldnQ2F4Yi8zUU4ySnRQM1IvMjlTdFE4K2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4NzA5OTgxODczXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1oLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVGh6V3hMUmVGb1V2T3h2VXFma0hRYVJ2R3N3VmRld0ZUSkRMVjJNbmFzRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg3MTAwMDk4OTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTWkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4SElwSVptUlZPOG5iM1VLU3gycWZuSnQ3OXI0ZVIrTjU1OHRnUitNY1lrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzE0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1qLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOEduS3JuK0xVMHJRcWFlTThUV3lXa3B0aEZLNFVFd3ArYjZWbjk1ditvYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg3MTg0NzY2NTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxOFhwbE83ZFQ2Zm5hMm9jamVmeHplVmV3OEZtS3NFdkh0cm9idHB5K1U0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzE0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1sLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY2Jock0vZGdOQkFKbFc1QmZCdEhFMHdtVysvTkQ0WGxvUE1DalBobDY4RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxNDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODc2ODQzNzg5NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNbS5qc29uIjogIntcImtleURhdGFcIjpcIjRWeCtobTBqZHFpbUd6alcxWkNMdjNIOU1ZeldoQ1lUUEFMcXo5VmJzeHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4NzY4NDQyMDUwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1uLmpzb24iOiAie1wia2V5RGF0YVwiOlwidEJ5WC9ROVdqZmtzOU5BUkJEMHVFMFc4b1Q4cG82WURWRURaT0ZlakFPTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxNDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNby5qc29uIjogIntcImtleURhdGFcIjpcIjJGL05jcjFjei9MZ2hlZnJlNDMxaGJGU0VzbmtZblFrWVpudVJjZ1FMd0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4ODIyMTMzMDU1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
