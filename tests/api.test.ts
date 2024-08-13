import { test, expect } from '@playwright/test';

test('Create a new user and verify', async ({ request }) => {
  const userData = {
    name: 'Taylor Swift',
    email: `taylorswiftt${Date.now()}@yahoo.com`,
    gender: 'female',
    status: 'active',
  };

  // Create a new user
  const createUserResponse = await request.post('https://gorest.co.in/public/v2/users', {
    headers: {
      'Authorization': `Bearer 2a35c8ea5cba1bdddad2e0cc85deaa807cc9fc29c8f60360d2a3fa91a1db0737`,
      'Content-Type': 'application/json',
    },
    data: userData,
  });

  // Print POST request details to the console
  console.log('POST Request Response:');
  console.log('Status:', createUserResponse.status());
  console.log('Response Body:', await createUserResponse.json());

  expect(createUserResponse.ok()).toBeTruthy();
  const createdUser = await createUserResponse.json();

  // Verify the created user
  const getUserResponse = await request.get(`https://gorest.co.in/public/v2/users/${createdUser.id}`, {
    headers: {
      'Authorization': `Bearer 2a35c8ea5cba1bdddad2e0cc85deaa807cc9fc29c8f60360d2a3fa91a1db0737`,
    },
  });

  // Print GET request details to the console
  console.log('GET Request Response:');
  console.log('Status:', getUserResponse.status());
  console.log('Response Body:', await getUserResponse.json());

  expect(getUserResponse.ok()).toBeTruthy();
  const retrievedUser = await getUserResponse.json();

  // Assert the properties of the returned user
  expect(retrievedUser.id).toBe(createdUser.id);
  expect(retrievedUser.name).toBe(userData.name);
  expect(retrievedUser.email).toBe(userData.email);
  expect(retrievedUser.gender).toBe(userData.gender);
  expect(retrievedUser.status).toBe(userData.status);
});
