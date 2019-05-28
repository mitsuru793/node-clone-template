import * as fs from 'fs-extra'

export default class Aliases {
  private items: { [key: string]: string }

  constructor(items: { [key: string]: string }) {
    this.items = items
  }

  static load(path): Aliases {
    let data = {}
    if (fs.existsSync(path)) {
      data = fs.readJSONSync(path)
    }
    return new Aliases(data)
  }

  save(path): Aliases {
    fs.ensureFileSync(path)
    fs.writeJsonSync(path, this.items)
    return this
  }

  add(name: string, repoPath: string): Aliases {
    this.items[name] = repoPath
    return this
  }

  findByName(name: string): string | null {
    return this.items[name]
  }

  maxNameLength(): number {
    let max = 0
    this.each(name => max = Math.max(max, name.length))
    return max
  }

  each(fn: (name: string, expanded: string) => void): Aliases {
    for (let [name, expanded] of Object.entries(this.items)) {
      fn(name, expanded)
    }
    return this
  }

  sort(): Aliases {
    const sorted = {}
    Object.keys(this.items).sort().forEach(title => {
      sorted[title] = this.items[title]
    })
    return new Aliases(sorted)
  }
}
