const commandModules = import.meta.glob('./commands/*.js', { eager: true });

const commands = {};
for (const [path, module] of Object.entries(commandModules)) {
  const name = path.match(/\.\/commands\/(.+)\.js$/)[1];
  if (name.startsWith('_')) continue;

  const handler = module[name] || module.default;
  if (typeof handler === 'function') {
    commands[name] = handler;
  }
}

export const commandHandler = async (terminal, commandBuffer = '') => {
  if (!commandBuffer.length) return;
  if (!terminal) throw new Error('Terminal is required');

  const sanitizedCommandBuffer = commandBuffer.trim().toLowerCase();
  const [command, ...args] = sanitizedCommandBuffer.split(' ');

  if (command.length === 1 && /[a-zA-Z]/.test(command)) {
    commands.alphabet(terminal, command[0]);
    return;
  }

  if (/[0-9]+(\+|\*|\/|\-){1}[0-9]/.test(command)) {
    commands.math(terminal, command);
    return;
  }

  if (/[0-9]/.test(command)) {
    commands.number(terminal, command);
    return;
  }

  try {
    await commands[command](terminal, ...args);
  } catch (error) {
    terminal.writeln(`Command not found: ${command.toUpperCase()}`);
  }
};
