import { test, expect } from '@playwright/test';
import * as fs from 'fs';

// Example: Reading JSON before a test
test('Read data from JSON file', async ({ page }) => {
  // Read the JSON file synchronously or asynchronously
  const rawData = fs.readFileSync('tests/read-data-from-files/data/students.json', 'utf-8');
  const jsonData = JSON.parse(rawData);

  // Now you can use jsonData in your test
  console.log(jsonData);

  // Example assertion
//   expect(jsonData.someKey).toBeDefined();
});
