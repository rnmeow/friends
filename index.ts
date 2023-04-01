import { parse } from 'https://deno.land/std@0.182.0/yaml/mod.ts'
import { join } from 'https://deno.land/std@0.182.0/path/mod.ts'

const data = parse(await Deno.readTextFile(join(Deno.cwd(), 'src/links.yml')))

try {
  await Deno.mkdir(join(Deno.cwd(), 'dist'), { recursive: true })
  await Deno.writeTextFile(join(Deno.cwd(), 'dist/links.json'), JSON.stringify(data))
} catch (err) {
  console.error(`FATAL: ${err}`)
  Deno.exit(1)
}

console.log('YAML file successfully parsed and saved as JSON.')
