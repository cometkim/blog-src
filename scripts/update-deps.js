const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const pkgPath = resolve(__dirname, '..', 'package.json')
const pkgFile = readFileSync(pkgPath, 'utf8')
const pkg = JSON.parse(pkgFile)

const deps = Object.keys(pkg.dependencies)
const devDeps = Object.keys(pkg.devDependencies)

execSync(`yarn add ${deps.join(' ')}`, (err, stdout, stderr) => {
    if (err) {
        console.error(stderr)
        throw err
    }
    console.log(stdout)
})

execSync(`yarn add --dev ${devDeps.join(' ')}`, (err, stdout, stderr) => {
    if (err) {
        console.error(stderr)
        throw err
    }
    console.log(stdout)
})