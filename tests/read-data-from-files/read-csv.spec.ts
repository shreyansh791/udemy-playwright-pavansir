import { test, expect } from "@playwright/test";
import { parse } from "csv-parse/sync";

import * as fs from "fs";
interface StudentRecord {
  email: string;
  password: string;
  validity: string;
  // add other fields matching your CSV columns, mark optional if not guaranteed
}
// Example: Reading JSON before a test
test("Read data from CSV file", async ({ page }) => {
  //Reading data from csv
  const csvPath = "tests/read-data-from-files/data/students.csv";
  const fileContent = fs.readFileSync(csvPath, "utf-8");

  const records: StudentRecord[] = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
  // Main test
  for (const data2 of records) {
    console.log(data2.email);
    console.log(data2.password);
    console.log(data2.validity);
  }
});
