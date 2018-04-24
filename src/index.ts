import { spawn } from 'child_process';

const cmd = spawn('java', '-jar ffdec.jar -selectclass com.ankamagames.dofus.BuildInfos,com.ankamagames.dofus.network.++,com.ankamagames.jerakine.network.++  -export script ./output/ DofusInvoker.swf'.split(' '));

// const cmd = spawn('ls', ['-lh', '/usr']);

cmd.stdout.on('data', (chunk) => {
  console.log(`stdout: ${chunk}`);
});

cmd.stderr.on('data', (chunk) => {
  console.log(`stderr: ${chunk}`);
});

cmd.on('close', (code, signal) => {
  console.log(`child process exited with code ${code}`);
});
