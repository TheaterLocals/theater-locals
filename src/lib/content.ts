/**
 * Content utility for Theater Locals
 * Loads static JSON content files from src/content/
 * To update copy or data, edit the corresponding JSON file — no code changes needed.
 */

import heroData from "../content/hero.json";
import experienceData from "../content/experience.json";
import upcomingData from "../content/upcoming.json";
import whyData from "../content/why.json";
import productsData from "../content/products.json";
import footerData from "../content/footer.json";
import partnersData from "../content/partners.json";
import beyondData from "../content/beyond.json";

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export type Lang = "en" | "jp";

export type BilingualText = { en: string; jp: string };

// Hero
export type HeroContent = typeof heroData;
export type HeroSlide = HeroContent["slideshow"][number];

// Experience
export type ExperienceContent = typeof experienceData;

// Upcoming
export type UpcomingContent = typeof upcomingData;
export type UpcomingSession = UpcomingContent["sessions"][number];

// Why
export type WhyContent = typeof whyData;
export type WhyPrinciple = WhyContent["principles"][number];
export type ComparisonRow = WhyContent["comparison"]["rows"][number];

// Products
export type ProductsContent = typeof productsData;
export type Product = ProductsContent["products"][number];

// Footer
export type FooterContent = typeof footerData;
export type FooterColumn = FooterContent["columns"][number];

// Partners
export type PartnersContent = typeof partnersData;
export type Partner = PartnersContent["partners"][number];

// Beyond
export type BeyondContent = typeof beyondData;
export type BeyondSpot = BeyondContent["spots"][number];

// ──────────────────────────────────────────────
// Accessors
// ──────────────────────────────────────────────

export function getHeroContent(): HeroContent {
  return heroData;
}

export function getExperienceContent(): ExperienceContent {
  return experienceData;
}

export function getUpcomingContent(): UpcomingContent {
  return upcomingData;
}

export function getWhyContent(): WhyContent {
  return whyData;
}

export function getProductsContent(): ProductsContent {
  return productsData;
}

export function getFooterContent(): FooterContent {
  return footerData;
}

export function getPartnersContent(): PartnersContent {
  return partnersData;
}

export function getBeyondContent(): BeyondContent {
  return beyondData;
}

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────

/**
 * Extract the correct language string from a bilingual text object.
 * Falls back to "en" if the requested lang is missing.
 */
export function t(text: BilingualText, lang: Lang): string {
  return text[lang] ?? text["en"];
}

/**
 * Filter upcoming sessions by month name (e.g. "May").
 */
export function getSessionsByMonth(month: string): UpcomingSession[] {
  return upcomingData.sessions.filter((s) => s.month === month);
}

/**
 * Calculate seats availability label.
 * e.g. "12 / 15 remaining" / "残り12席 / 15席"
 */
export function getSeatsLabel(
  session: UpcomingSession,
  lang: Lang
): string {
  if (lang === "jp") {
    return `残り${session.seatsRemaining}席 / ${session.seatsTotal}席`;
  }
  return `${session.seatsRemaining} / ${session.seatsTotal} remaining`;
}

/**
 * Returns true when fewer than 3 seats remain — used to show urgency UI.
 */
export function isAlmostFull(session: UpcomingSession): boolean {
  return session.seatsRemaining <= 3;
}
