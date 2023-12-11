#1
class School:
  #2
  def __init__(self, name, level, numberOfStudents):
    #3
    self.name = name
    self.level = level
    self.numberOfStudents = numberOfStudents
  #4
  def getName(self):
    return self.name
  def getLevel(self):
    return self.level
  def getNumberOfStudents(self):
    return self.numberOfStudents
  #5
  def setNumberOfStudents(self, newNumberOfStudents):
    self.numberOfStudents = newNumberOfStudents
  #6  
  def __repr__(self):
    return "A {level} school named {name} with {numberOfStudents} students".format(level = self.level, name = self.name, numberOfStudents = self.numberOfStudents)
#7
a = School("Codecademy", "high", 100)
print(a)
print(a.getName())
print(a.getLevel())
a.setNumberOfStudents(200)
print(a.getNumberOfStudents())
#8
class PrimarySchool(School):
  #9
  def __init__(self, name, numberOfStudents, pickupPolicy):
    #10
    super().__init__(name, 'primary', numberOfStudents)
    #11
    self.pickupPolicy = pickupPolicy
  #12
  def getPickupPolicy(self):
    return self.pickupPolicy
  #13  
  def __repr__(self):
    parentRepr = super().__repr__()
    return parentRepr + ". And our pickup Policy is: {pickupPolicy}".format(pickupPolicy = self.pickupPolicy)
#14    
b = PrimarySchool("Codecademy", 300, "Pickup Allowed")
print(b.getPickupPolicy())
print(b)
#15
class HighSchool(School):
  def __init__(self, name, numberOfStudents, sportsTeams):
    super().__init__(name, 'high', numberOfStudents)
    self.sportsTeams = sportsTeams
  def getSportsTeams(self):
    return self.sportsTeams
  def __repr__(self):
    parentRepr = super().__repr__()
    return parentRepr + ". And our sport teams are: {sportsTeams}".format(sportsTeams = self.sportsTeams)
#16    
c = HighSchool("Codecademy High", 500, ["Tennis", "Basketball"])
print(c.getSportsTeams())
print(c)