import os
from claude_api import Client

# Get Claude API key from environment variable
API_KEY = os.getenv('CLAUDE_API_KEY')

if not API_KEY:
    print("Error: Please set the CLAUDE_API_KEY environment variable.")
    exit(1)

client = Client(API_KEY)

prompt = input("Enter your prompt for Claude: ")

try:
    response = client.completion(prompt)
    print("Claude response:")
    print(response)
except Exception as e:
    print(f"Error communicating with Claude: {e}")
