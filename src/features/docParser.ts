

export class DocParser {

    constructor(private readonly filename: string) {
    }


    public async parseText(text: string): Promise<string> {
      return new Promise<string>((resolve) => {
        // Add bold
        const replacement = "document.getElementById('playground');"
        const find_regex = /document\.getElementById\(\S+\);/gi;
        const new_text = text.replace(find_regex, replacement)
        resolve(new_text);
      });
    }
}
