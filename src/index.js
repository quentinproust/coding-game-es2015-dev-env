import { io, log } from './Codingame';

const inputs = io.readline().split(' ');
const [width, height] = inputs.map(s => parseInt(s));

log(`width ${width}`);
log(`height ${height}`);
