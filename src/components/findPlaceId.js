const axios = require('axios');

// Function to search for place ID using Google Places API
async function findPlaceId(query) {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json', {
      params: {
        input: query,
        inputtype: 'textquery',
        key: 'AIzaSyC9DZIJ-77Ydluh2ZGh7xWjLVrt2lt7tlk'
      },
    });

    const placeId = response.data.candidates[0].place_id;
    return placeId;
  } catch (error) {
    throw new Error('Error fetching place ID');
  }
}

// Test the function
const query = 'Cliffs of Moher';
findPlaceId(query)
  .then((placeId) => {
    console.log('Place ID:', placeId);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
