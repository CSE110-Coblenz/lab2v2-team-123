export let guestlist: string[] = ["LeBron James", "Nas", "Shohei Ohtani"]

function printGuests(guests: string[]) {
    for (let i: number = 0; i < guests.length; i++) {
        console.log(guests[i]);
    }
}

printGuests(guestlist);