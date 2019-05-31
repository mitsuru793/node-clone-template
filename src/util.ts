import * as path from 'path'

export function expandPath(filepath: string) {
  if (filepath[0] === '~') {
    return path.join(process.env.HOME as string, filepath.slice(1))
  }
  return filepath
}
