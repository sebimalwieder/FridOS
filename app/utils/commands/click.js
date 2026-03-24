export const click = async (terminal) => {
  if (!terminal) return;
  terminal.writeln('Starting clicker game...');
  const score = await runClickerGame();
  terminal.writeln('Your score was: ' + score);
};

export const helpSummary = 'Starts a clicker game';
