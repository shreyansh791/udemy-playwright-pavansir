import * as XLSX from "xlsx";
import { test, expect } from "@playwright/test";

// Example: Reading JSON before a test
test("Read data from Excel file", async ({ page }) => {
  // Read the Excel file
  const workbook = XLSX.readFile(
    "tests/read-data-from-files/data/student.xlsx"
  );

  // Get the name of the first sheet
  const sheetName = workbook.SheetNames[0];
  console.log(sheetName);

  // Get the worksheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON array
  const data = XLSX.utils.sheet_to_json(worksheet);

  //   console.log(data);
});
