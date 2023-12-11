#2
from roster import student_roster
import itertools
# Import modules above this line
class ClassroomOrganizer:
  #3
  def __init__(self):
    self.sorted_names = self._sort_alphabetically(student_roster)

  def _sort_alphabetically(self,students):
    names = []
    for student_info in students:
      name = student_info['name']
      names.append(name)
    return sorted(names)

#4
  def student_combination(self):
    res = list(itertools.combinations(self.sorted_names, 2))
    return res

  def get_students_with_subject(self, subject):
    selected_students = []
    for student in student_roster:
      if student['favorite_subject'] == subject:
        selected_students.append((student['name'], subject))
    return selected_students
#3
x = ClassroomOrganizer()
print(x.sorted_names)
x_iter = iter(x.sorted_names)
for i in range(10):
  print(next(x_iter))