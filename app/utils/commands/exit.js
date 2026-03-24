export const helpSummary = 'Exits the terminal';

export const exit = async (terminal) => {
  terminal.writeln('Ciao!');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  window.close();
};
