import fs from "fs";
import path from "path";
import Mustache from "mustache";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const renderTemplate = async (templateName, data, options = {}) => {
  try {
    const mustacheExtension = options.mustacheExtension || true;
    if (mustacheExtension) {
      templateName = templateName + ".mustache";
    }
    let templatePath = path.join(__dirname, templateName);
    templatePath = templatePath.replace(
      "/node_modules/@nelreina/mustache-template",
      ""
    );
    const template = await fs.promises.readFile(templatePath, "utf8");
    return Mustache.render(template, data);
  } catch (error) {
    throw error;
  }
};
