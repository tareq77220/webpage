 let points = 0;

        function checkFlags(event) {
            event.preventDefault();
            const userFlag1 = document.getElementById('flag1').value.trim();
            const userFlag2 = document.getElementById('flag2').value.trim();
            const correctFlag1 = 'ctfa{terrific_traffic}';
            const correctFlag2 = 'ctfa{HTTP_31337}';
            const result = document.getElementById('result');
            const pointsDisplay = document.getElementById('points');

            if (userFlag1 === correctFlag1 && userFlag2 === correctFlag2) {
                result.textContent = 'Both flags are correct! Well done.';
                result.style.color = '#00ff00';
                points += 100; 
                pointsDisplay.textContent = `Points: ${points}`;

                let mainPoints = parseInt(sessionStorage.getItem('points')) || 0;
                mainPoints += 100;
                sessionStorage.setItem('points', mainPoints);
            } else if (userFlag1 === correctFlag1 || userFlag2 === correctFlag2) {
                result.textContent = 'One flag is correct. Keep trying!';
                result.style.color = '#ffff00';
                points += 50; 
                pointsDisplay.textContent = `Points: ${points}`;

                let mainPoints = parseInt(sessionStorage.getItem('points')) || 0;
                mainPoints += 50;
                sessionStorage.setItem('points', mainPoints);
            } else {
                result.textContent = 'Both flags are incorrect. Try again.';
                result.style.color = '#ff0000';
            }
        }

        function loadPoints() {
            let mainPoints = parseInt(sessionStorage.getItem('points')) || 0;
            document.getElementById('points').textContent = `Points: ${mainPoints}`;
        }

        document.addEventListener('DOMContentLoaded', loadPoints);