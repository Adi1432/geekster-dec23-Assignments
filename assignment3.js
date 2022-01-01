var num = prompt("enter the number");
num = parseInt(num);
var count = 0;
for (var i = 2; i <= Math.sqrt(num); i = i + 1) {
  if (num % i == 0) {
    count = count + 1;
  }
}
if (count > 0) {
  alert("given number is not prime");
} else {
  alert("given number is prime");
}
