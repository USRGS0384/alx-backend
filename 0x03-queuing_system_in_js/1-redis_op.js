import { createClient, print } from 'redis';

// Create a Redis client
const client = createClient();

// Event: Successfully connected to Redis
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Event: Error while connecting to Redis
client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

/**
 * Sets a key-value pair in Redis.
 * @param {string} schoolName - The key name.
 * @param {string} value - The value to set.
 */
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print); // Use redis.print for confirmation
}

/**
 * Displays the value of a key from Redis.
 * @param {string} schoolName - The key name.
 */
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, value) => {
    if (err) {
      console.error(err);
    } else {
      console.log(value);
    }
  });
}

// Example operations
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
