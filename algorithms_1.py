'''

Write an algorithm that returns true if the given string is a palindrome. Otherwise, return
false.

'''


def palindrome_checker(string):

    string = string.lower()
    print(string == string[::-1])
    return string == string[::-1]


# Test cases

palindrome_checker('radar')
palindrome_checker('level')
palindrome_checker('Pencil')
palindrome_checker('a')


''' 

The time complexity of this function is O(n). This is due to comparing each element of the string to every element of its reverse.
Due to the nature of the problem it would not be possible to make this more efficient. 

The space complexity of this function is also O(n), with n representing the length of the string to be checked. 

'''