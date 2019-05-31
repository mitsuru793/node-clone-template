#!/usr/bin/env ts-node
const {CommandDocument} = require("@mitsuru793/commander-document-generator")
const {program} = require("../dist")

const doc = CommandDocument.parse(program)
const text = doc.render(`
{{#commands}}
### {{name}} {{{args.0.display}}}
{{{description}}}

{{#options}}
#### {{{flags}}}

{{description}}

{{/options}}
{{/commands}}
`)
console.log(text)
