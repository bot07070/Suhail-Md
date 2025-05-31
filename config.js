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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_09_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICA2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAzNixcbiAgICAgICAgMTI1LFxuICAgICAgICA1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgzLFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQyLFxuICAgICAgICA2NixcbiAgICAgICAgMTU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc5LFxuICAgICAgICA1NCxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNixcbiAgICAgICAgMTE4LFxuICAgICAgICA1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICA1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICA0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzLFxuICAgICAgICA3MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5xb1RzY3V4eXMzaGd3SlhTZnRUb2tqaCtCbVBQYndTSit3NmFEdTIyRUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQ3MTE2NjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MDYxNkJGNDlCNzIxQUQyQjEyQzQ3RUEzQ0ZGMTc1MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDg3MTg1NDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ1FyYW9uZUNSdi1NTlhpQlZvaG5RUVwiLFxuICBcInBob25lSWRcIjogXCIxODc0ZjZhYy03MDhiLTRkZjktOGUzYi1kOGRlNWQ5YjQ2MzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgOCxcbiAgICAgIDE1NixcbiAgICAgIDI0NixcbiAgICAgIDE3LFxuICAgICAgMjgsXG4gICAgICAyMjUsXG4gICAgICAxODksXG4gICAgICAxNTcsXG4gICAgICAxMyxcbiAgICAgIDc2LFxuICAgICAgMTE3LFxuICAgICAgMjM3LFxuICAgICAgMTM2LFxuICAgICAgOTEsXG4gICAgICAyMjAsXG4gICAgICAxMDAsXG4gICAgICAxNTMsXG4gICAgICAxODUsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDUyLFxuICAgICAgMjA2LFxuICAgICAgOTUsXG4gICAgICAxMzksXG4gICAgICAyMixcbiAgICAgIDEzMCxcbiAgICAgIDE4NixcbiAgICAgIDEsXG4gICAgICAxNTAsXG4gICAgICAxNjQsXG4gICAgICAyMDIsXG4gICAgICAxMSxcbiAgICAgIDgzLFxuICAgICAgNTAsXG4gICAgICAxNCxcbiAgICAgIDcxLFxuICAgICAgMTYzLFxuICAgICAgNixcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1g3K2RVQ0VNeW43Y0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIisvQTFoUXU3QlU2Q3d0WGVyb0FTQmRmcDhMdUJXVFRjM2lPT0VSSk5CQjVTY1czaEhyMjVtZE9mWXFCMm42MFE1YlAxT09XU3V5MzdZYVppRzk0MUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBYZHU3VzRtRmxkZTBYWWd6UkIyYnBkUFVwYWJJVURkMklHdWpGVlEwU1dZTUZ6ZHYvblRSbnBoRjNvdUFmSlVLSi9Rd014OXBsMkhnNVdHZHcyckNRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo4MEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDg3MTg1NDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJTWtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNZC5qc29uIjogIntcImtleURhdGFcIjpcIkczRkkwMnFJL0NPQkJxSnMrN09RaXFtUlJKeGpuZzZqTk03cE16QTg0MDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrVWc0cEsycTdPRGphSXJZZUtNUnNYTERzUFh5U2c4Qk01Ri9DR0xsSE9BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzEzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODY3MTE5NjQ2NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNZi5qc29uIjogIntcImtleURhdGFcIjpcIjN0MGNZMysyVE9pL3NIazFRNjZVaHJ3QmloaXVvYVppMzk0aTZXK1Q3Q2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTWcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1TngvQm1uaCtFRWNRV3RLQ3JXZ0NheGIvM1FOMkp0UDNSLzI5U3RROCtrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzEzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODcwOTk4MTg3M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNaC5qc29uIjogIntcImtleURhdGFcIjpcIlRoeld4TFJlRm9Vdk94dlVxZmtIUWFSdkdzd1ZkZXdGVEpETFYyTW5hc0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTQwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4NzEwMDA5ODk0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1pLmpzb24iOiAie1wia2V5RGF0YVwiOlwieEhJcElabVJWTzhuYjNVS1N4MnFmbkp0NzlyNGVSK041NTh0Z1IrTWNZaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNai5qc29uIjogIntcImtleURhdGFcIjpcIjhHbktybitMVTByUXFhZU04VFd5V2twdGhGSzRVRXdwK2I2Vm45NXYrb2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTQwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4NzE4NDc2NjU0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1rLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMThYcGxPN2RUNmZuYTJvY2plZnh6ZVZldzhGbUtzRXZIdHJvYnRweStVND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxNDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODcxODU0NzgwOVwifSIKfQ=="  // PUT your SESSION_ID 


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
