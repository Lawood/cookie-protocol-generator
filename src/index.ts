<<<<<<< HEAD
import * as child_process from "typed-child_process";

const ls = child_process('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data:any) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data:any) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code:any) => {
  console.log(`child process exited with code ${code}`);
});
=======
console.log('test');
>>>>>>> f32d7369d830bd483dac50a9726a959483eeb4a3
