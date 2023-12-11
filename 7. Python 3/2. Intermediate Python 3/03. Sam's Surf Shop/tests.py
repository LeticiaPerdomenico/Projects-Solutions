# Write your code below:
#1
import surfshop
import unittest
import datetime
#2
class Project(unittest.TestCase):
  #3
  def setUp(self):
    self.cart = surfshop.ShoppingCart()
#4    
def test_add_surfboard(self):
        message = self.cart.add_surfboards(quantity=1)
        self.assertEqual(message, f'Successfully added 1 surfboard to cart!')
#5
def test_add_surfboards(self):
        #10
        for i in range(2, 5):
            with self.subTest(i=i):
                message = self.cart.add_surfboards(i)
                self.assertEqual(message, f'Successfully added {i} surfboards to cart!')
                self.cart = surfshop.ShoppingCart()
#9
@unittest.skip
#6
def test_add_too_many_surfboards(self):
        self.assertRaises(surfshop.TooManyBoardsError, self.cart.add_surfboards, 5)

    # commented out - test should not fail at the end of project
    # @unittest.expectedFailure
#7
def test_apply_locals_discount(self):
        self.cart.apply_locals_discount()
        self.assertTrue(self.cart.locals_discount)

#13
def test_add_invalid_checkout_date(self):
        date = datetime.datetime.now()
        self.assertRaises(surfshop.CheckoutDateError, self.cart.set_checkout_date, date)

#8
unittest.main()