
/**
 * Strips HTML tags from a string to return plain text.
 * This method uses the browser's built-in DOMParser, which is generally safer
 * and more reliable than using regular expressions for parsing HTML.
 * It correctly handles complex, nested, and even malformed HTML.
 *
 * @param html The string containing HTML.
 * @returns The plain text content of the HTML string.
 */
export const stripHtml = (html: string): string => {
  // Return an empty string if the input is falsy
  if (!html) {
    return '';
  }

  try {
    // Create a new DOMParser instance
    const doc = new DOMParser().parseFromString(html, 'text/html');
    
    // The parsed document's body will contain the content.
    // textContent recursively gets the content of all child nodes.
    return doc.body.textContent || "";
  } catch (e) {
    console.error("Error stripping HTML", e);
    // Fallback for environments where DOMParser might not be available
    // or if an error occurs. This regex is simple and less robust.
    return html.replace(/<[^>]*>/g, '');
  }
};
