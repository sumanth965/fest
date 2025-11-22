const regionData = {
            unicorn: {
                title: 'Sky Sanctuaries',
                description: 'Floating cities of crystalline towers where Unicorns guard the knowledge of cosmic harmony and celestial magic.'
            },
            pegasus: {
                title: 'Star Paths',
                description: 'Sacred routes through the heavens where Pegasi ride the stellar winds, connecting realms and carrying messages across dimensions.'
            },
            dragon: {
                title: 'Flame Citadels',
                description: 'Magnificent volcanic fortresses deep within the world where Dragons preserve the primal fire and earth magic of creation.'
            }
        };

        function showRegionInfo(element, region) {
            const info = document.getElementById('region-info');
            const data = regionData[region];
            
            info.innerHTML = `<strong>${data.title}</strong><br><br>${data.description}`;
            info.classList.add('active');
        }

        // Hide info when clicking elsewhere
        document.addEventListener('click', function(e) {
            if (!e.target.classList.contains('region-circle')) {
                document.getElementById('region-info').classList.remove('active');
            }
        });

        // Add hover support for non-touch devices
        const circles = document.querySelectorAll('.region-circle');
        circles.forEach(circle => {
            circle.addEventListener('mouseenter', function() {
                const region = this.classList[1].replace('region-', '');
                showRegionInfo(this, region);
            });
        });