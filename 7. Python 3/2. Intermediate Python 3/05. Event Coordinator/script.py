guests = {}
def read_guestlist(file_name):
  text_file = open(file_name,'r')
  while True:
    line_data = text_file.readline().strip().split(",")
    #1
    n = yield line_data
    #
    if n != None:
      line_data = n.split(',')
      name = line_data[0]
      age = int(line_data[1])
      guests[name] = age
      continue
    if len(line_data) < 2:
    # If no more lines, close file
      text_file.close()
      break
    name = line_data[0]
    age = int(line_data[1])
    guests[name] = age
#1
guest_list = read_guestlist('guest_list.txt')
for i in range(10):
  print(next(guest_list))
#2
guest_list.send("Jane, 35")
#3
for i in range(4):
  print(next(guest_list))
#4
guests_over_21 = (guest for guest in guests if guests[guest] >= 21)
print(list(guests_over_21))  
#5
def table_1():
  food = 'Chicken'
  table = 1
  for i in range(5):
    i += 1
    yield f'Food: {food}', 'Table 1', f'{i}'

def table_2():
  food = 'Beef'
  table = 2
  for i in range(5):
    i += 1
    yield f'Food: {food}', 'Table 2', f'{i}'

def table_3():
  food = 'Fish'
  table = 3
  for i in range(5):
    i += 1
    yield f'Food: {food}', 'Table 3', f'{i}'

def combined_tables():
  yield from table_1()
  yield from table_2()
  yield from table_3()

combined_tables = combined_tables()
#6
def assign_tables(guests):
  for i in guests.keys():
    yield (i, next(combined_tables))

assign_tables = assign_tables(guests)
for i in assign_tables:
  print(i)