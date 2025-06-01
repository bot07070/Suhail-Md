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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_41_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDYyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTExLFxuICAgICAgICA5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUxLFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg4LFxuICAgICAgICA0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjExLFxuICAgICAgICA3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDAsXG4gICAgICAgIDY0LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIxLFxuICAgICAgICA0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDcwLFxuICAgICAgICA3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDksXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrdHZRQ3ZSdnpYajRiUWZjbDA1YXRCWElic0lUTkppdzNJUjNsZkEwR1FzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiNi1GX0o4SVJVaU1LMEhfNzJUZ0F3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY0ZDI5N2YxLTdjZTMtNDI5Yi04M2M2LWQ2MjJiZDhiMmYwOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICA3NSxcbiAgICAgIDI2LFxuICAgICAgMjQsXG4gICAgICAxNDcsXG4gICAgICAxNDAsXG4gICAgICAyMyxcbiAgICAgIDczLFxuICAgICAgMzIsXG4gICAgICAxMTMsXG4gICAgICAxNTQsXG4gICAgICAxMTMsXG4gICAgICAxMzIsXG4gICAgICAyMzgsXG4gICAgICA0MyxcbiAgICAgIDEzLFxuICAgICAgMTMxLFxuICAgICAgMTYwLFxuICAgICAgMjAwLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgMTMyLFxuICAgICAgMTYwLFxuICAgICAgNjIsXG4gICAgICA2LFxuICAgICAgMTQzLFxuICAgICAgMjYsXG4gICAgICA0MSxcbiAgICAgIDY2LFxuICAgICAgMTAwLFxuICAgICAgMjI5LFxuICAgICAgOTcsXG4gICAgICAyMzUsXG4gICAgICAxNjUsXG4gICAgICAyNTAsXG4gICAgICA3NixcbiAgICAgIDkwLFxuICAgICAgOTcsXG4gICAgICA0LFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYjcrZFVDRU5TVThjRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRFN5QnpZM3pqa1Q0alNnUWh3YnRLcDFQQjRYTXlNL1NVNWRKcEF5UGxaZ2V5ZW1FVVdDOS85WjZwZUdwRjhqd3RJT0hWNTQ1M0lnb2xsRzBFQnloQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUG8rMHgyNnNRSXp6dlBIRUxZcU10TU5QaTI0REhCZytDc2g0aW4xbGJyek4vUGJPdGRHOGl5UzBQczRqM3pFR2Jza21UU2NuUVBkTDR5d0M1dnlnZ1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjgxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0ODc4MTY1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlNZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1kLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRzNGSTAycUkvQ09CQnFKcys3T1FpcW1SUkp4am5nNmpOTTdwTXpBODQwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNZS5qc29uIjogIntcImtleURhdGFcIjpcImtVZzRwSzJxN09EamFJclllS01Sc1hMRHNQWHlTZzhCTTVGL0NHTGxIT0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4NjcxMTk2NDY1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1mLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM3QwY1kzKzJUT2kvc0hrMVE2NlVocndCaWhpdW9hWmkzOTRpNlcrVDdDaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNZy5qc29uIjogIntcImtleURhdGFcIjpcInVOeC9CbW5oK0VFY1FXdEtDcldnQ2F4Yi8zUU4ySnRQM1IvMjlTdFE4K2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4NzA5OTgxODczXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1oLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVGh6V3hMUmVGb1V2T3h2VXFma0hRYVJ2R3N3VmRld0ZUSkRMVjJNbmFzRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg3MTAwMDk4OTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTWkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4SElwSVptUlZPOG5iM1VLU3gycWZuSnQ3OXI0ZVIrTjU1OHRnUitNY1lrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzE0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1qLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOEduS3JuK0xVMHJRcWFlTThUV3lXa3B0aEZLNFVFd3ArYjZWbjk1ditvYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg3MTg0NzY2NTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxOFhwbE83ZFQ2Zm5hMm9jamVmeHplVmV3OEZtS3NFdkh0cm9idHB5K1U0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzE0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1sLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY2Jock0vZGdOQkFKbFc1QmZCdEhFMHdtVysvTkQ0WGxvUE1DalBobDY4RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxNDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODc2ODQzNzg5NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNbS5qc29uIjogIntcImtleURhdGFcIjpcIjRWeCtobTBqZHFpbUd6alcxWkNMdjNIOU1ZeldoQ1lUUEFMcXo5VmJzeHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4NzY4NDQyMDUwXCJ9Igp9"  // PUT your SESSION_ID 


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
