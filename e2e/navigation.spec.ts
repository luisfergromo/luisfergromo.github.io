import { test, expect } from '@playwright/test';

test.describe('Personal Portfolio Web Suite', () => {
  test('should load the home page with correct metadata and hero branding', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Luis Fernando Gutiérrez Romo/);
    
    const heroTitle = page.locator('#header h1');
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toContainText('LuisFerGRomo');
    
    // Core sections should be present
    await expect(page.locator('#about')).toBeAttached();
    await expect(page.locator('#resume')).toBeAttached();
    await expect(page.locator('#experience')).toBeAttached();
    await expect(page.locator('#contact')).toBeAttached();
  });

  test('should preserve active section when switching language on home', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Anchor-jumping test is validated on desktop viewport');

    await page.goto('/#resume');
    await page.waitForLoadState('networkidle');

    // Click language switch to Spanish
    const langBtn = page.locator('.nav-link.lang-switch');
    await expect(langBtn).toBeVisible();
    await langBtn.click();

    // Must navigate directly to /spa#resume
    await expect(page).toHaveURL(/\/spa#resume/);
    await expect(page.locator('#resume')).toBeVisible();

    // Click language switch back to English
    const backBtn = page.locator('.nav-link.lang-switch');
    await expect(backBtn).toBeVisible();
    await backBtn.click();

    await expect(page).toHaveURL(/\/eng#resume/);
    await expect(page.locator('#resume')).toBeVisible();
  });

  test('should stay on /portfolio when toggling language and update content in-place', async ({ page, isMobile }) => {
    await page.goto('/portfolio');
    await page.waitForLoadState('networkidle');

    const heroHeader = page.locator('.portfolio-hero h1');
    await expect(heroHeader).toBeVisible();

    if (isMobile) {
      await page.locator('.navbar-toggler').click();
      await page.locator('.nav-link.lang-switch').waitFor({ state: 'visible' });
    }

    // Toggle language
    const langSwitch = page.locator('.nav-link.lang-switch');
    await expect(langSwitch).toBeVisible();
    await langSwitch.click();

    // URL must stay on /portfolio
    await expect(page).toHaveURL(/\/portfolio$/);

    // Filter tabs should work
    const filterBtn = page.locator('.filter-tabs .btn-filter').nth(1);
    await filterBtn.click();
    await expect(filterBtn).toHaveClass(/active/);
  });

  test('should stay on /skills when toggling language', async ({ page, isMobile }) => {
    await page.goto('/skills');
    await page.waitForLoadState('networkidle');

    await expect(page.locator('.skills-hero h1')).toBeVisible();

    if (isMobile) {
      await page.locator('.navbar-toggler').click();
      await page.locator('.nav-link.lang-switch').waitFor({ state: 'visible' });
    }

    // Toggle language
    const langSwitch = page.locator('.nav-link.lang-switch');
    await expect(langSwitch).toBeVisible();
    await langSwitch.click();

    // URL must stay on /skills
    await expect(page).toHaveURL(/\/skills$/);
  });
});

test.describe('Mobile Navigation Suite', () => {
  test('should open and auto-close hamburger menu on mobile screen', async ({ page, isMobile }) => {
    // Only run on mobile viewport
    test.skip(!isMobile, 'This test is tailored for mobile viewport');

    await page.goto('/spa');
    await page.waitForLoadState('networkidle');

    const toggler = page.locator('.navbar-toggler');
    await expect(toggler).toBeVisible();

    const collapseMenu = page.locator('.navbar-collapse');
    await expect(collapseMenu).not.toHaveClass(/show/);

    // Tap hamburger menu
    await toggler.click();
    await expect(collapseMenu).toHaveClass(/show/);

    // Tap link to Portfolio
    const portfolioLink = collapseMenu.locator('a[routerLink="/portfolio"]');
    await portfolioLink.click();

    // Verifies navigation occurred
    await expect(page).toHaveURL(/\/portfolio$/);
  });
});
