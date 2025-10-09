export function boldConsoleText(feature: string): string {
    return `\x1b[1m${feature}\x1b[0m`;
}