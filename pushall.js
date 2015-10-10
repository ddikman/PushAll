#! /usr/bin/env node
var shell = require("shelljs");

var userArgs = process.argv.slice(2);
if(userArgs.length > 1)
{
  console.log("Invalid number of arguments given, expected only a single message argument:");
  console.log(userArgs);
  process.exit(1);
}

var commitMessage = userArgs[0];
if(commitMessage[0] != '"')
  commitMessage = '"' + commitMessage + '"';

shell.exec("git add -A && git commit -m " + commitMessage + " && git push");
