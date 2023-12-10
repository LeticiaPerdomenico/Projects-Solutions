letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 4, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]
#1
letters_to_points = {key:value for key, value in zip(letters, points)}
#2
letters_to_points[" "] = 0
print(letters_to_points)
#3
def score_word(word):
  #4
  point_total = 0
  #5
  for letter in word: 
    point_total += letters_to_points.get(letter, 0)
  #6
  return point_total
#7
brownie_points = score_word("BROWNIE")
#8
print(brownie_points)
#9
player_to_words = {"player1": ["BLUE", "TENNIS", "EXIT"], "wordNerd": ["EARTH", "EYES", "MACHINE"], "Lexi Con": ["ERASER", "BELLY", "HUSKY"], "Prof Reader": ["ZAP", "COMA", "PERIOD"]}
#10
player_to_points = {}
#11
for player, words in player_to_words.items():
  player_points = 0
  #12
  for word in words:
    player_points += score_word(word)
  #13  
  player_to_points[player] = player_points
#14  
print(player_to_points)