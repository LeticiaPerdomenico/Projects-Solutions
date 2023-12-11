#1
from roster import student_roster
from classroom_organizer import ClassroomOrganizer
import itertools
#1
students = iter(student_roster)
print(next(students))
print(next(students))
print(next(students))
print(next(students))
print(next(students))
print(next(students))
print(next(students))
print(next(students))
print(next(students))
print(next(students))

#4
y = ClassroomOrganizer()
print(y.student_combination())

#5
Student_Math_Science = y.get_students_with_subject("Math") + y.get_students_with_subject("Science")
print(Student_Math_Science)
print(list(itertools.combinations(Student_Math_Science, 4)))