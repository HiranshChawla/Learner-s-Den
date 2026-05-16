//building up on the cpp recursion code and writing simple matrix visuals, the final js code is as follows: 
//recursively solving tower of hanoi

let steps = 0;

function display(A, B, C, n) {

    console.log();

    for (let i = n - 1; i >= 0; i--) {

        let a = A[i] !== undefined ? A[i] : '-';
        let b = B[i] !== undefined ? B[i] : '-';
        let c = C[i] !== undefined ? C[i] : '-';

        console.log(`${a} ${b} ${c}`);
    }

    console.log("A B C");
    console.log("----------");
}

function tower(n, a, b, c) {

    // BASE CASE
    if (n === 1) {

        let disk = a.pop();
        c.push(disk);

        steps++;

        console.log(`Step ${steps}: Move Disk ${disk}`);

        display(A, B, C, totalDisks);

        return;
    }

    // recursively moving n-1 disks from 1st to 2nd rod using 3rd rod
    tower(n - 1, a, c, b);

    // move largest disk from 1st to 3rd rod
    let disk = a.pop();
    c.push(disk);

    steps++;

    console.log(`Step ${steps}: Move Disk ${disk}`);

    display(A, B, C, totalDisks);

    // recursively placing n-1 disks from 2nd to 3rd rod
    tower(n - 1, b, a, c);
}

// number of disks
let totalDisks = 3;

// initial rods
let A = [];
let B = [];
let C = [];

for (let i = totalDisks; i >= 1; i--) {
    A.push(i);
}

// initial display
console.log("\nInitial State:");
display(A, B, C, totalDisks);

// function call and output
tower(totalDisks, A, B, C);

console.log(`\nTotal steps: ${steps}`);
