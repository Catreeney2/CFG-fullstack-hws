'''

Write a function that takes in an unsorted array of any size. These elements are in the range
of 1 to n. In the input array one number is missing. Your function should return the missing
number.

If the input array contains a negative number or non-numeric value then return an error
with the correct error message.

'''


def missing_number(arr):

    for element in arr:
        if not isinstance(element, int):
            return 'Invalid input, non-numeric value detected'

    for num in arr:
        if num < 0:
            return 'Invalid input, negative number detected'


    n = len(arr)
    largest = max(arr)
    missing = []

    for i in range(1, largest + 1):
        if i not in arr:
            missing.append(i)

    if missing == []:
        return ('Nothing is missing')
    #print(missing)
    return 'The missing number is: ' + str(missing)


''' Test cases '''

print(missing_number([1, 2, 3, 4, 5]))  # nothing is missing
print(missing_number([4, 5, 1, 3, 5, 6]))  # 2 is missing
print(missing_number([1, 3, 7, 5, 6, 2]))  # 4 is missing
print(missing_number([4, 5, -1, 3, 5]))  # THROW ERROR Invalid input, negative value detected
print(missing_number(['a', 1, 2, 'b'])) # THROW ERROR Invalid input, non-numeric value detected


'''

The time complexity of this function is O(n) as it must iterate through every element of the array. 
This happens twice so the complexity might be O(2n) but this collapses to O(n). 

The space complexity is O(n) where n represents the largest value in the array. 

'''