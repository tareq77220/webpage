 function checkFlag(event) {
            event.preventDefault();
            const userFlag = document.getElementById('flag').value.trim();
            const correctFlag = 'CTF{exif_m3tadata_fl4g}';
            const resultElement = document.getElementById('result');
            const submitButton = document.getElementById('submitBtn');

            if (userFlag === correctFlag) {
                if (!sessionStorage.getItem('exif_points_awarded')) {
                    let exifPoints = parseInt(sessionStorage.getItem('exif_points')) || 0;
                    exifPoints += 100; 
                    sessionStorage.setItem('exif_points', exifPoints);
                    sessionStorage.setItem('exif_points_awarded', 'true');

                    document.getElementById('points').textContent = `Points: ${exifPoints}`;

                    let mainPoints = parseInt(sessionStorage.getItem('points')) || 0;
                    mainPoints += 100; 
                    sessionStorage.setItem('points', mainPoints);
                    document.getElementById('main-points').textContent = `Main Points: ${mainPoints}`;
                }

                resultElement.textContent = 'Congratulations! You found the flag: CTF{exif_m3tadata_fl4g}';
                resultElement.style.color = '#00ff00';

                document.getElementById('flag').disabled = true;
                submitButton.disabled = true;
            } else {
                resultElement.textContent = 'Incorrect flag. Try again.';
                resultElement.style.color = '#ff0000';
            }
        }

        function initPoints() {
            let exifPoints = parseInt(sessionStorage.getItem('exif_points')) || 0;
            document.getElementById('points').textContent = `Points: ${exifPoints}`;
        }

        window.onload = function() {
            initPoints();

            let mainPoints = parseInt(sessionStorage.getItem('points')) || 0;
            document.getElementById('main-points').textContent = `Main Points: ${mainPoints}`;
        };