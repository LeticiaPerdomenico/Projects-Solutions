#1
import csv
#2
compromised_users = []
#3
with open('passwords.csv') as password_file:
  #4
  password_csv = csv.DictReader(password_file)
  #5
  for password_row in password_csv:
    #6/7
    #print(password_row['Username'])
    #7
    compromised_users.append(password_row['Username'])
#print(compromised_users)
#8
with open('compromised_users.txt', 'w') as compromised_user_file:
  #9
  for compromised_user in compromised_users:
    #10/11
    compromised_user_file.write(compromised_user)
#12
import json
#13
with open('boss_message.json', 'w') as boss_message:
  #14
  boss_message_dict = {"recipient": "The Boss", "message": "Mission Success"}
  #15
  json.dump(boss_message_dict, boss_message)
#16
with open('new_passwords.csv', 'w') as new_passwords_obj:
  #17
  slash_null_sig = """
   _  _     ___   __  ____             
/ )( \   / __) /  \(_  _)            
) \/ (  ( (_ \(  O ) )(              
\____/   \___/ \__/ (__)             
 _  _   __    ___  __ _  ____  ____  
/ )( \ / _\  / __)(  / )(  __)(    \ 
) __ (/    \( (__  )  (  ) _)  ) D ( 
\_)(_/\_/\_/ \___)(__\_)(____)(____/ 
        ____  __     __   ____  _  _ 
 ___   / ___)(  )   / _\ / ___)/ )( \
(___)  \___ \/ (_/\/    \\___ \) __ (
       (____/\____/\_/\_/(____/\_)(_/
 __ _  _  _  __    __                
(  ( \/ )( \(  )  (  )               
/    /) \/ (/ (_/\/ (_/\             
\_)__)\____/\____/\____/
"""
  #18
  new_passwords_obj.write(slash_null_sig)