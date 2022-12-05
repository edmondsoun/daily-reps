function findPosition(input) {

    let depth = 0;
    let horizontalPosition = 0;

    for (let command of input) {
        commands = command.split(' ');
        commandType = commands[0];
        distance = parseInt(commands[1]);
        if (commandType === 'forward') horizontalPosition += distance;
        if (commandType === 'up') depth -= distance;
        if (commandType === 'down') depth += distance;
    }

    console.log('depth:', depth, 'horizontal position:', horizontalPosition);
    return depth * horizontalPosition;

}