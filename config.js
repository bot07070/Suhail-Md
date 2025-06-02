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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_58_06_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICA1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUyLFxuICAgICAgICAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAwLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MixcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICA0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDkxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDgsXG4gICAgICAgIDYzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDc5LFxuICAgICAgICA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI5LFxuICAgICAgICA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgNTksXG4gICAgICAgIDMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY2LFxuICAgICAgICA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwLFxuICAgICAgICA1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTExLFxuICAgICAgICA3NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJib0prZ2JQNis5OW5ZMEE2ektDMzFHSDlwQ0VoMDgrcmw5R1ZYUDBJc05jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRX3FlemVmRVRybUFnUzhIWXE0NjdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE0N2Q2NGVhLTZmMjItNDMzYS1iYzBhLWEwNzYyMWZjMDEyMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAyMDksXG4gICAgICAyMDgsXG4gICAgICAxODAsXG4gICAgICAxNTcsXG4gICAgICAxODUsXG4gICAgICAxODYsXG4gICAgICAyMixcbiAgICAgIDIyNCxcbiAgICAgIDM0LFxuICAgICAgMTIzLFxuICAgICAgMTgxLFxuICAgICAgMjEwLFxuICAgICAgMTY4LFxuICAgICAgMTcwLFxuICAgICAgMTQwLFxuICAgICAgOTcsXG4gICAgICAyMDEsXG4gICAgICA1NSxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDIxNyxcbiAgICAgIDI3LFxuICAgICAgODEsXG4gICAgICAxODEsXG4gICAgICAyMTEsXG4gICAgICAxNzgsXG4gICAgICAxODQsXG4gICAgICAyNDIsXG4gICAgICAyMjEsXG4gICAgICA2MSxcbiAgICAgIDI4LFxuICAgICAgMjI5LFxuICAgICAgMTYsXG4gICAgICAxMzEsXG4gICAgICA3NixcbiAgICAgIDE2NSxcbiAgICAgIDUzLFxuICAgICAgMjQ3LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT243K2RVQ0VNM0M5TUVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNkR1p3WTd2Y09ic3pud0hhc0IzY3ZEL2cyWGlzekExa21JTFhvZEFCcHRNZUQwdHdPeHJmVmRqajk4RTVjUFc4aUk1NUIrQ05xeldzRGRGckJTaUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjloMW9NenVPNHBNeis3UW5BZzRvOS80VU95alJaSW8zSXNQSm5QVnZ3Qm5DUU5Ra1RWaVV1aThJSXVUeVpNcEJiY1IyTjl0THpKVlFra0tpOEg0Ymh3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo4M0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDg4MzY2OTFcbn0iCn0="  // PUT your SESSION_ID 


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
