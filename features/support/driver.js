export const driver = require("selenium-webdriver");
//export const browser = new driver.Builder().forBrowser("firefox").build();




export const browser = new driver.Builder().   
      usingServer('http://localhost:4444/wd/hub').forBrowser("chrome").build(); 
 