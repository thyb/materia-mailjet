import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import angularInline from 'rollup-plugin-angular-inline';

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'system'
    },
    plugins: [
        resolve({
            // pass custom options to the resolve plugin
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        angularInline({ include: './src/**/*.component.ts' }),
        typescript({
            typescript: require('typescript')
        })
    ],
    external: [
        'plugins-core',
        '@angular/core',
        '@angular/material'
    ]
}