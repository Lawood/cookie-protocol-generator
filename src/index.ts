import * as child_process from 'child_process';

const ls = child_process.execSync('ls');

console.log(ls.toString());
