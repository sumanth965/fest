        function castMessage() {
            const messageInput = document.getElementById('messageInput');
            const creatureSelect = document.getElementById('creatureSelect');
            const messageOutput = document.getElementById('messageOutput');
            const message = messageInput.value.trim();

            if (!message) {
                messageOutput.textContent = '✨ Please enter a message to cast...';
                return;
            }

            const creature = creatureSelect.value;
            let transmission = '';

            if (creature === 'unicorn') {
                transmission = `🌟 Telepathic Transmission: "${message}" has been sent across infinite minds...`;
            } else if (creature === 'pegasus') {
                transmission = `📜 Star-Script Delivery: "${message}" is being carried on the winds of starlight...`;
            } else if (creature === 'dragon') {
                transmission = `🔥 Resonant Echo: "${message}" reverberates through the world's core...`;
            }

            messageOutput.textContent = transmission;
            messageInput.value = '';
        }

        document.getElementById('messageInput').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                castMessage();
            }
        });
