import { spawn } from 'child_process';

const selected = [
  'com.ankamagames.dofus.BuildInfos',
  'com.ankamagames.dofus.network.++',
  'com.ankamagames.jerakine.network.++',
].join(',');

const args = [
  '-jar', 'ffdec.jar',
  '-selectclass', selected,
  '-export', 'script', './output/', 'DofusInvoker.swf',
];

const cmd = spawn('java', args);

cmd.stdout.on('data', (chunk) => console.log(chunk.toString()));

cmd.stderr.on('data', (chunk) => console.log(`Error: ${chunk.toString()}`));

cmd.on('close', (code, signal) => console.log(`child process exited with code ${code}`));
