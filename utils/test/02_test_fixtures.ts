import test from 'ava'
import { baseline } from '@unional/fixture'
import fs from 'fs'
import path from 'path'

// basic usage

test('yada', async (t) => {
  baseline({ basePath: 'test', casesFolder: 'fixtures' }, (context) => {
  // use caseFolder + caseName to get input file
    fs.readFileSync(path.join(context.caseFolder, 'devices.json'), 'utf-8')
    console.log(context)
    t.pass()
  })
})
