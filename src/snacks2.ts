let snacks: string[] = ["chips", "soda", "cookies"];

function printSnacks(x: string[]) {
    for (let i: number = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}

const message = printSnacks(snacks);
// why is this not working