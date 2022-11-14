export function isPangram(text: string) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  if (text.length > 0) {
    for (let i = 0; i < letters.length; i++) {
      if (!text.toLowerCase().includes(letters.charAt(i))) {
        return false;
      }
    }
    return true;
  }
  return false;
}
