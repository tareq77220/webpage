function checkFlag(event) {
            event.preventDefault();
            const userFlag = document.getElementById('flag').value.trim();
            const correctFlag = 'CTF{stegano_i$_$hit}';
            const result = document.getElementById('result');
            const pointsDisplay = document.getElementById('points');
            const challenge3Link = document.getElementById('challenge5-link');

            if (userFlag === correctFlag) {
                result.textContent = 'Correct! Well done.';
                result.style.color = '#00ff00';

                let points = parseInt(sessionStorage.getItem('points')) || 0;
                points += 200;
                sessionStorage.setItem('points', points);
                pointsDisplay.textContent = `Points: ${points}`;

                sessionStorage.setItem('challenge5Completed', true);

                challenge3Link.textContent = 'Challenge 5 Completed';
                challenge3Link.style.color = '#00ff00'; 
            } else {
                result.textContent = 'Incorrect flag. Try again.';
                result.style.color = '#ff0000';
            }
        }

        function initChallengeStatus() {
            const challenge3Completed = sessionStorage.getItem('challenge5Completed');
            const challenge3Link = document.getElementById('challenge5-link');

            if (challenge3Completed) {
                challenge3Link.textContent = 'Challenge 5 Completed';
                challenge3Link.style.color = '#00ff00'; 
            }
        }

        function initPoints() {
            let points = parseInt(sessionStorage.getItem('points')) || 0;
            const pointsDisplay = document.getElementById('points');
            pointsDisplay.textContent = `Points: ${points}`;
        }

        window.onload = function() {
            initPoints();
            initChallengeStatus();
        };