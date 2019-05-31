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
  
Commit log of The initialized project will be the following. Take name and e-mail from global git config.

```
$ git log
commit 240d58467db3e8f4b1de46ee273739c257ddf043 (HEAD -> master)
Author: mitsuru793 <mitsuru793@gmail.com>
Date:   Fri May 31 19:28:09 2019 +0900

    setup with template
```

## alias-add <name>

Alias is expanded to <repository-path> when clone.
 
 For example, 
```
$ clone-template alias-add ruby https://github.com/mitsuru793/ruby-template
$ clone-template clone ruby new-project-path
```

## alias-list 
List aliases.

```
$ clone-template alias-list
php    https://github.com/mitsuru793/boilerplate-php
ts-cli https://github.com/mitsuru793/boilerplate-typescript
```
