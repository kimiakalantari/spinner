const symbols = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];
let delay = 100;
for (const symbol of symbols) {
  setTimeout(() => {
    process.stdout.write(symbol); // print the char here
  }, delay += 200); // <= 1s delay to make it noticeable. Can dial it down later.
}