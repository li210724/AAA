"use strict";

// see https://github.com/serverless/serverless/blob/master/README_CN.md#how-to-install-a-service

exports.main_handler = (event, context, callback) => {
  let argv = process.argv;
  argv[2] = process.env.cmd;
  argv[3] = "--user";
  argv[4] = process.env.user;
  argv[5] = "--password";
  argv[6] = process.env.password;
  argv[7] = "--appid"
  argv[8] = process.env.appid;
  console.log(argv.join(" "));
  prcess.env.tasks=1;
  if (!process.env.tasks) {
    callback(null, "必须单独指定任务");
  } else {
    require("./AutoSignMachine.js").run(argv);
    callback(null, "触发任务执行成功");
  }
};
