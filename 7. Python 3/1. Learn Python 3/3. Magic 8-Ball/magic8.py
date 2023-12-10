#4
import random
#1
name = ""
#2
question = "Am I going to be millionaire?"
#3
answer = ""
#5
random_number = random.randint(1, 11)
#print(random_number)
#6
if random_number == 1:
  answer = "Yes, definitely!"
#7
elif random_number == 2:
  answer = "It is decidedly so"
elif random_number == 3:
  answer = "Without a doubt"
elif random_number == 4:
  answer = "Reply hazy, try again"
elif random_number == 5:
  answer = "Ask again later"
elif random_number == 6:
  answer = "Better not tell you now"
elif random_number == 7:
  answer = "My sources say no"
elif random_number == 8:
  answer = "Outlook not so good"
elif random_number == 9:
  answer = "Very doubtful"
#12
elif random_number == 10:
  answer = "No"
elif random_number == 11:
  answer = "Maybe"
#8
else:
  answer = "Error"
#13
if name == "":
  #9
  print("Question: " + question)
else:
  #9
  print(name + " asks: " + question)
#14
if question == "":
  #9
  print("You must ask a question to get an answer.")
else:
  #10
  print("Magic 8-Ball's answer: " + answer)
