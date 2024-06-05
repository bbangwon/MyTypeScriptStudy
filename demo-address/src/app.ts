const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyCH2lhuw3aRTXCdZNKlt6WrN8l2xOZHlDk';

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    // send this to Google's API!

}



form.addEventListener('submit', searchAddressHandler);
    
    
