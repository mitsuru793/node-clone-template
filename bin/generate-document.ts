#!/usr/bin/env ts-node
import {CommandDocument} from "@mitsuru793/commander-document-generator"
import {program} from "../src"

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
