import re

# Function to validate URL
def validate_url(url):
    pattern = r'^(https?:\/\/)?([\w\-]+\.)+[a-zA-Z]{2,}(\/\S*)?$'
    
    if re.match(pattern, url):
        print("Valid URL")
    else:
        print("Invalid URL")

# Input from user
url = input("Enter URL: ")
validate_url(url)
