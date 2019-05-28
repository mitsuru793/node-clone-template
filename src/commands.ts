import * as fs from 'fs-extra'
import * as path from 'path'
import * as simpleGit from 'simple-git/promise'
import Aliases from "./Aliases"
import {expandPath} from "./util"

const cacheFile = expandPath('~/.cache/node-clone-template/aliases.json')

export async function cloneAndInit(repoPath: string, localPath: string) {
  const aliases = Aliases.load(cacheFile)
  const found = aliases.findByName(repoPath)
  if (found) {
    repoPath = found
  }

  fs.ensureDirSync(localPath)

  let git = await simpleGit()
  await git.clone(repoPath, localPath)
  fs.removeSync(path.join(localPath, '.git'))

  git = await simpleGit(localPath)
  await git.init()
  await git.addConfig('user.name', 'mitsuru793')
  await git.addConfig('user.email', '  mitsuru793@gmail.com')
  await git.add('.')
  await git.commit('setup with template')
}

export function addAlias(name: string, repoPath: string) {
  const aliases = Aliases.load(cacheFile)
  aliases.add(name, repoPath).save(cacheFile)
}

export function listAlias() {
  const aliases = Aliases.load(cacheFile).sort()
  const maxNameLength = aliases.maxNameLength()
  aliases.each((name, expanded) => {
    const paddedName = name.padEnd(maxNameLength, ' ')
    console.log(paddedName, expanded)
  })
}
