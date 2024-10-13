    const apiKey = '************************************************************************************************************************'; // This is Paid API key

        async function sendMessage() {
            const inputField = document.getElementById('input');
            const message = inputField.value;
            appendMessage('User: ' + message);
            inputField.value = '';

            const response = await fetch('https://api.openai.com/v1/chat/completions', { // This is OpenAI URL Link
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                        model: 'gpt-4', // This is the OpenAI model which I have used in my project
                        messages: [{ role: 'user', content: message }] // Correct format for messages
                    })
                });

            const data = await response.json();
            console.log(data);
            appendMessage('AI: ' + data.choices[0].message.content); // This is the API response structure
        }

        function appendMessage(msg) {
            const messagesDiv = document.getElementById('messages');
            const messageElement = document.createElement('div');
            messageElement.textContent = msg;
            messagesDiv.appendChild(messageElement);
            messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the bottom
        }