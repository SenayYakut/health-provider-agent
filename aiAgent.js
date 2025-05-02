require('dotenv').config();
const axios = require('axios');

// Simulate healthcare provider data
const mockProviders = [
  {
    name: 'Dr. Smith',
    language: 'Spanish',
    location: 'San Francisco',
    insurance: 'Blue Cross',
  },
  {
    name: 'Dr. Lee',
    language: 'English',
    location: 'San Francisco',
    insurance: 'Aetna',
  },
  // Add more mock data here
];

// Function to match providers with AI's response
function matchProviders(aiResponse, providers) {
  const query = aiResponse.toLowerCase();

  // Filter providers based on language, location, and insurance
  return providers.filter((provider) => {
    return (
      query.includes(provider.language.toLowerCase()) &&
      query.includes(provider.location.toLowerCase()) &&
      query.includes(provider.insurance.toLowerCase())
    );
  });
}

// Function to get AI's response
async function getProviderRecommendation(query) {
  // Simulate an AI response for now
  return `I recommend searching for a dermatologist who speaks Spanish and accepts Blue Cross in San Francisco.`;
}

// Main function to run the agent
async function main() {
  const userQuery =
    'I need a dermatologist who speaks Spanish and accepts Blue Cross in San Francisco.';
  const aiResponse = await getProviderRecommendation(userQuery);
  console.log('AI Response:', aiResponse);

  // Match the AI response with actual providers
  const matchedProviders = matchProviders(aiResponse, mockProviders);

  console.log('Matched Providers:', matchedProviders);
}

// Run the main function
main();
