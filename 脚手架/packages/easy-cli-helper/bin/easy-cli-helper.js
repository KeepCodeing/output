#!/usr/bin/env node

const { program } = require("commander");

const create = require("../lib/create");

program
  .name("easy-cli")
  .version("1.1.0")
  .command("create <template>")
  .description("创建模板")
  .action((template) => {
    create(template);
  });

program.parse(process.argv);
