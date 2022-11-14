# DRAWN INPUT
[87,7,82,21,47,88,12,
 71,24,35,10,90,4,97,
 30,55,36,74,19,50,23,
 46,13,44,69,27,2,0,
 37,33,99,49,77,15,89,
 98,31,51,22,96,73,94,
 95,18,52,78,32,83,85,
 54,75,84,59,25,76,45,
 20,48,9,28,39,70,63,
 56,5,68,61,26,58,92,
 67,53,43,62,17,81,80,
 66,91,93,41,64,14,8,
 57,38,34,16,42,11,86,
 72,40,65,79,6,3,29,
 60,1]

# every time a square is filled on a board, have that board check itself for the following conditions:
# - do I have five or more entried filled?
# - if so, identify what block of five the chip is on (i.e. indexes 0 - 4) and check those for win condition
#   + identify position of chip and check cooresponding pieces five above and below for win condition
#   + if win condition isn't met, continue

class BingoCard:
    """"Class to contain structure of bingo card and win condition logic."""
    
    def __init__(self, card_input):
        """Create bingo card from 25 pre-randomized numeric inputs."""
        self.card = card_input
        self.has_won = False
        
    def __repr__(self):
        return f"This is the bingo card: {self.card}"
    
