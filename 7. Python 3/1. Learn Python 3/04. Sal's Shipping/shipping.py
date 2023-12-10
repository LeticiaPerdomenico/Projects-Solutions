#1// #8
weight = 41.5
#2
#"Ground Shipping"
#4
cost_ground_premium = 125.00
#3
if weight <= 2:
  price = weight * 1.5 + 20
  print("The price for your shipping will be $" + str(price) + ".")
elif weight > 2 and weight <= 6:
  price = weight * 3 + 20
  print("The price for your shipping will be $" + str(price) + ".")
elif weight > 6 and weight <= 10:
  #3
  price = weight * 4 + 20
  print("The price for your shipping will be $" + str(price) + ".")
elif weight > 10:  
  price = weight * 4.75 + 20
  print("The price for your shipping will be $" + str(price) + ".")
else:
  print("Error.")
#5
print("Since you choose Ground Shipping Premium, the cost is $" + str(cost_ground_premium) + ".")
#6
#"Drone Shipping"
if weight <= 2:
  #7
  price = weight * 4.5
  print("The price for your shipping will be $" + str(price) + ".")
elif weight > 2 and weight <= 6:
  price = weight * 9
  print("The price for your shipping will be $" + str(price) + ".")
elif weight > 6 and weight <= 10:
  price = weight * 12
  print("The price for your shipping will be $" + str(price) + ".")
elif weight > 10:  
  price = weight * 14.25
  print("The price for your shipping will be $" + str(price) + ".")
else:
  print("Error.")