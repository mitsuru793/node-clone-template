import * as program from 'commander'
import {addAlias, cloneAndInit, listAlias} from "./commands"

const desc = program.description
// @ts-ignore
program.description = (str, argsDescription) => {
  desc(str.trim(), argsDescription)
}

program
  .version('0.1.0')

program
  .command('clone <repository-path> <local-path>')
  .description(`
Clone repository as template and initialize it.
<repository-path> is url or ssh.
  For example, 
  * https://github.com/mitsuru793/node-clone-template
  * git@github.com:mitsuru793/node-clone-template.git
  `)
  .action(cloneAndInit)

program
  .command('alias-add <name> <repository-path>')
  .description(`
Alias is expanded to <repository-path> when clone.
  For example, 
  $ clone-template alias-add ruby https://github.com/mitsuru793/ruby-template
  $ clone-template clone ruby new-project-path
`)
  .action(addAlias)

program
  .command('alias-list')
  .description('List aliases.')
  .action(listAlias)

program.parse(process.argv)
