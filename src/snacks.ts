import { boldConsoleText } from './animation.ts';


function printSnacks(snacks: string[]) {
    for (let i: number = 0; i < snacks.length; i++) {
        let bold: string = boldConsoleText(snacks[i]);
        console.log("Party, Party, Party - " + bold + " Time!");
    }
}

let snacks: string[] = ["Chips", "Cookies", "Cupcakes", "Crackers"]
printSnacks(snacks);