export function hey(message: string): string {
  const isQuestion = /[?]$|[?](\s)+$/.test(message);
  const isYell = message.toUpperCase() === message && /[a-zA-Z]/.test(message);
  const isNothing = message === "" || /^(\s){2,}$/.test(message);
  const isYellingQuestion = isQuestion && isYell;

  switch (true) {
    case isYellingQuestion:
      return "Calm down, I know what I'm doing!";
    case isQuestion:
      return "Sure.";
    case isYell:
      return "Whoa, chill out!";
    case isNothing:
      return "Fine. Be that way!";
    default:
      return "Whatever.";
  }
}
