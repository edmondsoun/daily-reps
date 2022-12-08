    
# PART 1

with open('input3.txt') as file:
    lines = [line.strip() for line in file]

priority_list = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
    "A": 27,
    "B": 28,
    "C": 29,
    "D": 30,
    "E": 31,
    "F": 32,
    "G": 33,
    "H": 34,
    "I": 35,
    "J": 36,
    "K": 37,
    "L": 38,
    "M": 39,
    "N": 40,
    "O": 41,
    "P": 42,
    "Q": 43,
    "R": 44,
    "S": 45,
    "T": 46,
    "U": 47,
    "V": 48,
    "W": 49,
    "X": 50,
    "Y": 51,
    "Z": 52
}

def split_line(string):
    first_half, second_half = string[:len(string)//2], string[len(string)//2:]
    return (first_half,second_half)

def find_repeat_char(line_halves):
    first_half = {*line_halves[0]}

    for char in line_halves[1]:
        if char in first_half:
            return char
        
def sum_priorities():
    total = 0
    
    for line in lines:
        line_halves = split_line(line)
        repeat_char = find_repeat_char(line_halves)
        char_priority = priority_list[repeat_char]
        total = total + char_priority
        
    return total

print(sum_priorities())

# PART 2

with open('input3.txt') as file:
    grouped_lines = []
    
    count = 0
    index = 0
    
    for line in file:
        if count == 0:
            grouped_lines.append([])
        grouped_lines[index].append(line.strip())
        count += 1
        if count == 3:
            count = 0
            index += 1
            
def sum_common_item_priorities(grouped_items):
    
    total = 0
    
    for group in grouped_items:
        first = {*group[0]}
        second = {*group[1]}
        for char in group[2]: 
            if char in first and char in second:
                total += priority_list[char]
                break
    
    return total
                

print(sum_common_item_priorities(grouped_lines))