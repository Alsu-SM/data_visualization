
function getNOK(...args: number[]): number {
	for (var x = args[0], i = 1; i < args.length; i++) {
    var y = args[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
}

export default getNOK;
