let delay = 100;
let animation = ['|', '/', '-', '\\'];

for (let i = 0; i < 10; i++) {
  for (let frame = 0; frame < animation.length; frame++) {
    setTimeout(() => {
      process.stdout.write(`\r${animation[frame]}   `);
    }, delay + (frame * 200));
  };
  delay += 800;
};

/* ALTERNATE METHOD

const loop = 9;
let delay = 100;

for (let i = 0; i < loop; i++) {
  setTimeout(() => process.stdout.write('\r|   '), delay);
  setTimeout(() => process.stdout.write('\r/   '), delay + 200);
  setTimeout(() => process.stdout.write('\r-   '), delay + 400);
  setTimeout(() => process.stdout.write('\r\\   '), delay + 600);
  delay += 800;
}
setTimeout(() => process.stdout.write('\n'), delay);

*/
