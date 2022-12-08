with open('input4.txt') as file:
    lines = [line.strip() for line in file]

# PART 1
# How many ranges overlap in full?


def convert_to_integer(list):

    id_ranges = []

    for line in list:
        line = line.split(",")
        id_pairs = []
        for number in line:
            pair = number.split("-")
            id_pairs.append(pair)
        id_ranges.append(id_pairs)

    return id_ranges


def compare_ranges(list):

    total = 0

    for pair in list:
        if int(pair[0][0]) >= int(pair[1][0]):
            if int(pair[0][1]) <= int(pair[1][1]):
                total += 1
                continue
        if int(pair[0][0]) <= int(pair[1][0]):
            if int(pair[0][1]) >= int(pair[1][1]):
                total += 1
                continue

    return total


def controller():
    id_ranges = convert_to_integer(lines)
    return compare_ranges(id_ranges)


print("Overlap in full:", controller())

# PART 2
# How many ranges overlap at all?

def compare_partial_ranges(list):

    total = 0

    for pair in list:
        #Full overlap:
        if int(pair[0][0]) >= int(pair[1][0]):
            if int(pair[0][1]) <= int(pair[1][1]):
                total += 1
                continue
        if int(pair[0][0]) <= int(pair[1][0]):
            if int(pair[0][1]) >= int(pair[1][1]):
                total += 1
                continue
        #Partial overlap:
        if int(pair[0][0]) >= int(pair[1][0]):
            if int(pair[0][0]) <= int(pair[1][1]):
                total += 1
                continue
        if int(pair[0][1]) <= int(pair[1][1]):
            if int(pair[0][1]) >= int(pair[1][0]):
                total += 1
                continue
        
    return total
                
def controllerTwo():
    id_ranges = convert_to_integer(lines)
    return compare_partial_ranges(id_ranges)

print("Overlap in part:", controllerTwo())
