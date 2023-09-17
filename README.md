# Code Interpreter

Welcome to the Code Assistant project! This tool helps users get code corrections, completions, and explanations for their code. Simply provide the repository github link and problem description, and the Code Assistant will generate a helpful response.

## Getting Started

To use the Code Assistant, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/your-username/code-assistant.git
    ````
2. Install the necessary dependencies using npm.
   ````bash
   npm install
    ````
3. Set up your API key by creating a .env file in the project root directory and adding your OpenAI API key.
````bash
REACT_APP_API_KEY=your-api-key-here
````
4. Start the development server.
````bash
npm start
````
5. Access the Code Assistant frontend at http://localhost:3000 in your web browser.


## How It Works
The Code Assistant uses the OpenAI GPT-3.5 Turbo model to understand and provide responses to code and problem descriptions. When you submit a request, it sends the code and description to the OpenAI API and displays the response on the landing page.


## Usage
1. Enter your code in the input field.
2. Describe the problem you're facing in the provided text area.
3. Click the "Submit" button.
4. The Code Assistant will provide a helpful response, including code corrections and explanations.

## Scope
The current version of the Code Assistant utilizes the OpenAI GPT-3.5 Turbo model, which may incur costs for API usage beyond the free tier. However, we are actively working on expanding the project's capabilities:

Fine-Tuned Model: We are in the process of developing our own fine-tuned language model specifically designed for code assistance. This model will provide improved accuracy and efficiency while reducing dependency on external APIs.

## Future Aspects
I have ambitious plans for the future of the Code Assistant:

Enhanced Language Support: I aim to support multiple programming languages and technologies, catering to a broader audience of developers.

Integration with IDEs: We plan to develop plugins and extensions that seamlessly integrate the Code Assistant into popular integrated development environments (IDEs).

## Screenshots

1. **Login with Google OAuth:**

   ![Screenshot 1](https://github.com/code-inhub/MeChatSocketIO/assets/95998892/6da20f76-d21c-4cf7-9340-c0bacbebc94f)
   
   ![Screenshot 2](https://github.com/code-inhub/MeChatSocketIO/assets/95998892/39e15413-5ae9-4ee7-b277-6fced8dba9d6)

2. **Chat Interface:**

   ![Screenshot 3](https://github.com/code-inhub/MeChatSocketIO/assets/95998892/0d304e31-d0f3-4a77-9dd9-c1c98dfbf872)

3. **User Profile:**

   ![Screenshot 4](https://github.com/code-inhub/MeChatSocketIO/assets/95998892/8e089ecb-89c1-487e-9ec6-2acf73added0)

4. **Message History:**

   ![Screenshot 5](https://github.com/code-inhub/MeChatSocketIO/assets/95998892/f902aa85-a9c5-4173-8a27-dcd05a7f68fe)

5. **Online Status Indicators(at the top-middle):**
   
   ![Online Status](https://github.com/code-inhub/MeChatSocketIO/assets/95998892/ab2449a8-8f6d-4454-890e-85a65c05ffe2)
