import * as fs from 'fs';
import { SmartBuffer, SmartBufferOptions} from 'smart-buffer';
import tag from "./tag";

const data = fs.readFileSync("./DofusInvoker.swf");
const buffer = SmartBuffer.fromBuffer(data);

console.log(String.fromCharCode(buffer.readUInt8(), buffer.readUInt8(), buffer.readUInt8()) ,buffer.readUInt8(), buffer.readUInt32LE());
const size = byteArrayToInt(buffer.readBuffer(5));
console.log("size="+size, buffer.readUInt8(), buffer.readUInt8(), buffer.readUInt8(), buffer.readUInt8(), buffer.readUInt16LE(),buffer.readUInt16LE());
var t;
while(buffer.remaining()>50){
    t = new tag(buffer);
    if (t.type == 82)
        console.log(JSON.stringify(t,null, 2));
}
function byteArrayToInt(buffer: any) 
{
    var value = 0;
    for (var i = 0; i < 4; i++) {
        var shift = (4 - 1 - i) * 8;
        value += (buffer[i] & 0x000000FF) << shift;
    }
    return value;
}