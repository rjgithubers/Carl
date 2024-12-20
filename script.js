if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(() => {
            console.log('Service Worker Registered');
        });
    });
}

async function fetchRandomDogImage() {
    try {
        
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        const imageUrl = data.message;

        const dogImageElement = document.getElementById('dog-image');
        dogImageElement.src = imageUrl;
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
}   
window.onload = fetchRandomDogImage;
