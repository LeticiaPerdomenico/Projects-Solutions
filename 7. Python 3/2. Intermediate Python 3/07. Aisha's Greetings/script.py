# Write your code below: 
#1
from contextlib import contextmanager

@contextmanager
def generic(card_type, sender_name, recipient_name):
#2
  card_file = open(card_type, "r")
  new_card_order = open(f"{sender_name}_generic.txt", "w")
#3
  try:
    new_card_order.write(f"Dear {recipient_name},\n")
    new_card_order.write(card_file.read()+"\n")
    new_card_order.write(f"\nSincerely, \n{sender_name} \n")
    yield new_card_order
#4
  finally:
    card_file.close()
    new_card_order.close()
#5
with generic('thankyou_card.txt', 'Mwenda', 'Amanda') as new_card:
  print('Card Generated! \n')
#6
with open('Mwenda_generic.txt', 'r') as new_card1:
  print(new_card1.read())
#7
class personalized:
#8
  def __init__(self, sender_name, recipient_name):
    self.personal_file = open(f"\n{sender_name}_personalized.txt", "w")
    self.sender_name = sender_name
    self.recipient_name = recipient_name
#9
  def __enter__(self):
    self.personal_file.write(f"\nDear {self.recipient_name},\n")
    return self.personal_file
#10
  def __exit__(self, exc_type, exc_value, Traceback):
    self.personal_file.write(f"\nSincerely \n{self.sender_name}")
    self.personal_file.close()
#11
with personalized("John", "Michael") as personalized_card:
  personalized_card.write("I am so proud of you! Being your friend for all these years has been nothing but a blessing. I don't say it often but I just wanted to let you know that you inspire me and I love you! All the best. Always.")
#12
with generic("happy_bday.txt","Josiah","Remy" ) as generic_card, personalized("Josiah","Esther") as personal2:
  personal2.write("Happy Birthday! I love you to the moon and back. Even though you’re a pain sometimes, you’re a pain I can’t live without. I am incredibly proud of you and grateful to have you as a sister. Cheers to 25!! You’re getting old!")