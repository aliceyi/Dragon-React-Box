// custom-transformer.js
'use strict'

import { transform } from '@babel/core'
import jestPreset from 'babel-preset-jest'

export function process(src, filename) {
    const result = transform(src, {
        filename,
        presets: [jestPreset],
    })

    return result || src
}
