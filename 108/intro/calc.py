"""
author: Yadiel Diaz
system: simple python calc
"""

#imports
from display import print_menu, print_header

#global vars

#direct instructions
print_header()
print_menu()

option = input("Select an option: ")

num1 = float(input("Please provide num1: "))
num2 = float(input("Please provide num2: "))

if option == "1":
    res = num1 + num2

elif option == "2":
    res = num1 - num2

elif option == "3":
    res = num1 * num2

elif option == "4":
    if num2 == 0:
        print("Error: Zero division is not allowed")
        res = "Error"
    else:
        res = num1/num2

option2 = input("How many times do you want to print result: ")

print(f"The result is: {res} " * int(option2))