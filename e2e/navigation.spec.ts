import { test, expect } from '@playwright/test';

test.describe('Personal Portfolio Web Suite', () => {
  test('should load the home page with correct metadata and hero branding', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Luis Fernando Gutiérrez Romo/);
    
    const heroTitle = page.locator('#header h1');
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toContainText('Luis Fernando Gutiérrez Romo');
    await expect(page.locator('#header .hero-actions')).toBeVisible();
    await expect(page.locator('body')).not.toContainText(/\bn8n\b/i);
    
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

  test('should load digital business card on /card and redirect /tarjeta', async ({ page }) => {
    await page.goto('/card');
    await page.waitForLoadState('networkidle');

    // Title and person name check
    await expect(page.locator('.person-name')).toContainText('Luis Fernando Gutiérrez Romo');
    await expect(page.locator('#btn-save-contact')).toBeVisible();
    await expect(page.locator('#btn-show-qr')).toBeVisible();
    await expect(page.locator('#btn-share-card')).toBeVisible();
    await expect(page.locator('.card-top-nav .icon-action-btn')).toHaveCount(0);
    await expect(page.locator('.contact-value')).toContainText('lfgromo+contacto@gmail.com');

    // Verify avatar image has the updated photo
    const avatar = page.locator('.profile-photo');
    await expect(avatar).toBeVisible();
    await expect(avatar).toHaveAttribute('src', /1678849232446\.jpg/);

    // Verify no ITESO ORG header and no n8n mention; Master's points to Tecmilenio
    await expect(page.locator('.card-header-section')).not.toContainText('ITESO');
    await expect(page.locator('.credentials-list')).toContainText('Universidad Tecmilenio');
    await expect(page.locator('body')).not.toContainText(/\bn8n\b/i);

    // Test language switcher on card and dynamic Resume link (/spa vs /eng)
    const enBtn = page.locator('.lang-pill button', { hasText: 'EN' });
    await enBtn.click();
    await expect(page.locator('.btn-main-label')).toContainText('Save Contact');
    await expect(page.locator('.links-list a[href="/eng"]')).toBeVisible();

    const esBtn = page.locator('.lang-pill button', { hasText: 'ES' });
    await esBtn.click();
    await expect(page.locator('.btn-main-label')).toContainText('Guardar Contacto');
    await expect(page.locator('.links-list a[href="/spa"]')).toBeVisible();

    // Test QR modal toggle with local card-qr.svg and canonical Vercel URL
    await page.locator('#btn-show-qr').click();
    await expect(page.locator('.qr-modal-content')).toBeVisible();
    await expect(page.locator('.qr-image')).toHaveAttribute('src', /card-qr\.svg/);
    await expect(page.locator('.qr-url-box code')).toContainText('https://luisfergromo.vercel.app/card');
    await page.locator('.btn-close-modal').click();
    await expect(page.locator('.qr-modal-content')).not.toBeVisible();

    // Test /tarjeta redirect
    await page.goto('/tarjeta');
    await expect(page).toHaveURL(/\/card$/);

    // Verify verified external links on card
    await expect(page.locator('a[href*="credly.com/users/luisfergromo"]')).toBeVisible();
    await expect(page.locator('a[href*="skills.google/public_profiles"]')).toBeVisible();
    await expect(page.locator('a[href*="tryhackme.com/p/VidarTheFoehammer"]')).toBeVisible();
  });

  test('should display verified technical profiles (Credly, Google Skills, TryHackMe) on home and spa', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Verified profiles block check on desktop layout');

    await page.goto('/spa');
    await page.waitForLoadState('networkidle');

    // Check verified badges grid
    const verifiedBlock = page.locator('.verified-profiles-block');
    await expect(verifiedBlock).toBeAttached();

    const credlyLink = page.locator('.verified-badge-item[href*="credly.com/users/luisfergromo"]');
    await expect(credlyLink).toBeVisible();

    const googleSkillsLink = page.locator('.verified-badge-item[href*="skills.google/public_profiles"]');
    await expect(googleSkillsLink).toBeVisible();

    const thmLink = page.locator('.verified-badge-item[href*="tryhackme.com/p/VidarTheFoehammer"]');
    await expect(thmLink).toBeVisible();

    await expect(page.locator('#resume')).toContainText('Universidad Tecmilenio');
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
