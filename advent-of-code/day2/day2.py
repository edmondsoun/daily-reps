
# Part 1

def find_position(command_inputs):
    
    depth = 0
    horizontal_position = 0

    for command in command_inputs:
        command_components = command.split(' ')
        direction = command_components[0]
        distance = int(command_components[1])
        if direction == 'forward':
            horizontal_position += distance
        elif direction == 'down':
            depth += distance
        elif direction == 'up':
            depth -= distance

    return depth * horizontal_position


# Part 2

# DOCSTRING

def find_position_with_aim(command_inputs):
    
    depth = 0
    horizontal_position = 0
    aim = 0

    for command in command_inputs:
        command_components = command.split(' ')
        direction = command_components[0]
        distance = int(command_components[1])
        if direction == 'forward':
            horizontal_position += distance
            depth += (aim*distance)
        elif direction == 'down':
            aim += distance
        elif direction == 'up':
            aim -= distance

    return depth * horizontal_position
