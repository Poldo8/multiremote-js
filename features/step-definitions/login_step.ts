import { Given } from "cucumber";

Given(/^I am on the page$/, () => {
  browser.url("https://www.google.it/");
  myChromeBrowser.url("https://www.google.com/")
  myFirefoxBrowser.url("https://www.google.de/")
})