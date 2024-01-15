import { BMOSettings } from "src/main";

export async function getPrompt(settings: BMOSettings) {

    if (settings.prompt.trim() === '') {
        return;
    }

    const promptFilePath = settings.promptFolderPath + '/' + settings.prompt;
    console.log(`Prompt file path: ${promptFilePath}`);

    try {
        // Await the reading of the file and return its content
        const content = await app.vault.adapter.read(promptFilePath);
        // Remove YAML front matter if present
        const cleanedContent = content.replace(/---[\s\S]+?---/, '').trim();
        return cleanedContent;
    } catch (error) {
        console.error(`Error reading file ${promptFilePath}:`, error);
        return null; 
    }
}
