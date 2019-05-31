# Clone Template

This clones a repository as template and initialize it.

# Installation

```
$ yarn add clone-template
```

# commands

The following is sub command.

```
clone-template clone https://github.com/mitsuru793/node-clone-template new-project-path
```

## clone <repository-path>

Clone repository as template and initialize it.
<repository-path> is url or ssh.


For example, 
* https://github.com/mitsuru793/node-clone-template
* git@github.com:mitsuru793/node-clone-template.git
  

## alias-add <name>

Alias is expanded to <repository-path> when clone.
 
 For example, 
```
$ clone-template alias-add ruby https://github.com/mitsuru793/ruby-template
$ clone-template clone ruby new-project-path
```

## alias-list 
List aliases.

