var n = prompt("enter number");
n = parseInt(n);
for (var num = 1; num <= n; num = num + 1) {
  if (num % 2 == 0) {
    console.log(num);
  }
}
