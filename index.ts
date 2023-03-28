import { parse } from 'https://deno.land/std@0.181.0/yaml/mod.ts'
import { join } from 'https://deno.land/std@0.181.0/path/mod.ts'

const data = parse(await Deno.readTextFile(join(Deno.cwd(), 'src/links.yml')))

await Deno.mkdir(join(Deno.cwd(), 'dist'), { recursive: true })
await Deno.writeTextFile(join(Deno.cwd(), 'dist/links.json'), JSON.stringify(data))
