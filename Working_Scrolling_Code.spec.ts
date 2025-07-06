export const validateSelectedColumnVisible = async (selectedColumns: string[]) => {
  const page = getPage();
  const containerSelector = '.MuiDataGrid-virtualScroller';
  const maxTries = 20;
  const scrollStep = 200;

  for (const col of selectedColumns) {
    let found = false;
    let tries = 0;
    let direction = 1; // 1 = right, -1 = left

    while (!found && tries < maxTries) {
      const column = getHeadersInHistory(col);

      // Check if header is present and visible
      if (await column.count() > 0 && await column.first().isVisible()) {
        // Scroll the parent column header into view
        await column.first().evaluate((el) => {
          el.closest('.MuiDataGrid-columnHeader')?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'auto' });
        });

        // Assert the header is visible
        await expectElementToBeVisible(column);
        found = true;
        break;
      }

      // Switch direction halfway through
      if (tries === Math.floor(maxTries / 2)) direction = -1;

      // Scroll the container horizontally
      await page.evaluate(
        ([selector, scrollBy, dir]) => {
          const el = document.querySelector(selector);
          if (el) (el as HTMLElement).scrollLeft += dir * scrollBy;
        },
        [containerSelector, scrollStep, direction]
      );

      // Wait for virtualization/rendering
      await page.waitForTimeout(150);
      tries++;
    }

    if (!found) {
      throw new Error(`Header "${col}" not found after scrolling.`);
    }
  }
};
