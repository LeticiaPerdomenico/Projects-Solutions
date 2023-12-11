from nile import get_distance, format_price, SHIPPING_PRICES
from test import test_function

# Define calculate_shipping_cost() here:
#1//#7
def calculate_shipping_cost(from_coords, to_coords, shipping_type = 'Overnight'):
  #2
  from_lat, from_long = from_coords
  to_lat, to_long = to_coords
  #3
  distance = get_distance(*from_coords, *to_coords)
  #4
  shipping_rate = SHIPPING_PRICES[shipping_type]
  #5
  price = distance * shipping_rate
  #6
  return format_price(price)
# Test the function by calling 
#8
test_function(calculate_shipping_cost)

# Define calculate_driver_cost() here
#9
def calculate_driver_cost(distance, *drivers):
  #10
  cheapest_driver = None
  cheapest_driver_price = None
  #11
  for driver in drivers:
    #12
    driver_time = distance / driver.speed
    #13
    price_for_driver = driver.salary * driver_time
    #14
    if cheapest_driver is None:
      cheapest_driver = driver
      cheapest_driver_price = price_for_driver
    #15  
    elif price_for_driver < cheapest_driver_price:
      cheapest_driver = driver
      cheapest_driver_price = price_for_driver
  #16    
  return cheapest_driver_price, cheapest_driver    

# Test the function by calling 
test_function(calculate_driver_cost)

# Define calculate_money_made() here
#17
def calculate_money_made(**trips):
  #18
  total_money_made = 0
  #19
  for trip_id, trip in trips.items():
    #20
    trip_revenue = trip.cost - trip.driver.cost
    #21
    total_money_made += trip_revenue
  #22  
  return total_money_made

# Test the function by calling 
#23
test_function(calculate_money_made)
