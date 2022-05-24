export default function convert(value) {
  let r = "0x" + value[1] + value[2];
  let g = "0x" + value[3] + value[4];
  let b = "0x" + value[5] + value[6];
  return "rgb(" + +r + "," + +g + "," + +b + ")";
}