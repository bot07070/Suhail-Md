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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_46_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM5LFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYwLFxuICAgICAgICA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODksXG4gICAgICAgIDQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDczLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MixcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkwLFxuICAgICAgICA2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmlubUxJWWpOMEdEcXVrendVN1hWOTJrc2Z2Z0tsSVhUMWowai93TTVTRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDcxMTY2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI2MjNFRkQwNjYxQkQzREM5NTdFNDcyMUY0REZENDhDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0ODcxMDAxNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvQkpvT3U4VFJWbWtya19yWlVPdDdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRjYmIwMzU3LTcxM2MtNGViOC05ZTlhLWI3MzYxMTRmNjI2MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICAxMjksXG4gICAgICAxMTgsXG4gICAgICAyMjYsXG4gICAgICAyNDgsXG4gICAgICAyMzYsXG4gICAgICAxODIsXG4gICAgICAxMzgsXG4gICAgICAxOTUsXG4gICAgICA4NSxcbiAgICAgIDI0MyxcbiAgICAgIDIzNCxcbiAgICAgIDYsXG4gICAgICA4MCxcbiAgICAgIDkwLFxuICAgICAgMTE5LFxuICAgICAgMzgsXG4gICAgICAxOSxcbiAgICAgIDE1MCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICA2NCxcbiAgICAgIDIwMyxcbiAgICAgIDE2NixcbiAgICAgIDM2LFxuICAgICAgMTM0LFxuICAgICAgMTg0LFxuICAgICAgMTcwLFxuICAgICAgMTE5LFxuICAgICAgODUsXG4gICAgICAxODMsXG4gICAgICAxOTUsXG4gICAgICA3MCxcbiAgICAgIDM4LFxuICAgICAgNjksXG4gICAgICAxNTcsXG4gICAgICAyMTgsXG4gICAgICAxNTEsXG4gICAgICAyMjIsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09UNytkVUNFUGZrN01FR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4MklTM1JPRXJwc2xuTnV6UVo5Sm95a1ZlbTQ2S0V2Ui9FL0xybk80RnM1OGs5bWdldFFFWjdhMFhYQUhZNUhzb1lmQmJIa3hBbWtra2pXYXNxTGhCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1T0lqa1ROelVhSzdEYlhsczRhSS9QcDYvS0hXU1F0Y2xlSjNmbTVkNEpCSmM1YWZsN0JKalo0bno1NmpOckpMZnFHYVhmZTEvWDJSdEtTdFVnc2JoQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NzlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4NzEwMDExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSU1pXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHM0ZJMDJxSS9DT0JCcUpzKzdPUWlxbVJSSnhqbmc2ak5NN3BNekE4NDA0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzEzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1lLmpzb24iOiAie1wia2V5RGF0YVwiOlwia1VnNHBLMnE3T0RqYUlyWWVLTVJzWExEc1BYeVNnOEJNNUYvQ0dMbEhPQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg2NzExOTY0NjVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTWYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzdDBjWTMrMlRPaS9zSGsxUTY2VWhyd0JpaGl1b2FaaTM5NGk2VytUN0NrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzEzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1nLmpzb24iOiAie1wia2V5RGF0YVwiOlwidU54L0JtbmgrRUVjUVd0S0NyV2dDYXhiLzNRTjJKdFAzUi8yOVN0UTgraz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg3MDk5ODE4NzNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUaHpXeExSZUZvVXZPeHZVcWZrSFFhUnZHc3dWZGV3RlRKRExWMk1uYXNFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzE0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODcxMDAwOTg5NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNaS5qc29uIjogIntcImtleURhdGFcIjpcInhISXBJWm1SVk84bmIzVUtTeDJxZm5KdDc5cjRlUitONTU4dGdSK01jWWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTQwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg3MTAwMTY1NjBcIn0iCn0="  // PUT your SESSION_ID 


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
