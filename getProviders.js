const fs = require('fs');

// Function to load and filter mock providers
function getMockProviders({ specialty, insurance, language, zipCode }) {
  const rawData = fs.readFileSync('mockProviders.json');
  const providers = JSON.parse(rawData);

  const results = providers.filter((provider) => {
    return (
      provider.specialty === specialty &&
      provider.insurance === insurance &&
      provider.language === language &&
      provider.location.zip === zipCode
    );
  });

  results.forEach((provider, index) => {
    console.log(
      `${index + 1}. ${provider.name} - ${provider.specialty} - ${
        provider.language
      }`
    );
  });

  if (results.length === 0) {
    console.log('No matching providers found.');
  }
}

// Example usage
getMockProviders({
  specialty: 'Dermatology',
  insurance: 'Blue Cross',
  language: 'Spanish',
  zipCode: '94103',
});
