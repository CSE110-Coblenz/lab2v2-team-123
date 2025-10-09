import { boldConsoleText } from './animation.ts';

let music: string[] = ["pop", "rap", "country"];

export function printMusic(x: string[]) {
    for (let i: number = 0; i < x.length; i++) {
        let bold: string = boldConsoleText(x[i]);
        console.log(bold);
    }
}

//const message2 = printMusic(music);
//