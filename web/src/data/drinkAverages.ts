/**
 * Best-known average calories per typical serve.
 * Estimates for education / habit tracking — not lab nutrition facts.
 * Sources aligned with common UK/US public guidance ranges (NHS-style / USDA-ish averages).
 */
export type DrinkPreset = {
  id: string
  label: string
  serve: string
  kcal: number
  defaultPriceGbp: number
}

export const DRINK_PRESETS: DrinkPreset[] = [
  { id: 'lager_pint', label: 'Lager / ale', serve: 'pint (568ml)', kcal: 182, defaultPriceGbp: 5.5 },
  { id: 'beer_bottle', label: 'Beer', serve: 'bottle (330ml)', kcal: 142, defaultPriceGbp: 4.0 },
  { id: 'cider_pint', label: 'Cider', serve: 'pint (568ml)', kcal: 210, defaultPriceGbp: 5.5 },
  { id: 'wine_175', label: 'Wine', serve: '175ml glass', kcal: 158, defaultPriceGbp: 6.0 },
  { id: 'wine_250', label: 'Wine', serve: '250ml glass', kcal: 228, defaultPriceGbp: 7.5 },
  { id: 'prosecco', label: 'Prosecco / bubbly', serve: '125ml', kcal: 89, defaultPriceGbp: 6.5 },
  { id: 'spirit_single', label: 'Spirit + mixer', serve: 'single (25ml) + mixer', kcal: 120, defaultPriceGbp: 6.0 },
  { id: 'spirit_double', label: 'Spirit + mixer', serve: 'double (50ml) + mixer', kcal: 180, defaultPriceGbp: 8.0 },
  { id: 'cocktail', label: 'Cocktail', serve: 'typical serve', kcal: 220, defaultPriceGbp: 10.0 },
  { id: 'shot', label: 'Shot', serve: '25–30ml', kcal: 65, defaultPriceGbp: 4.0 },
]

/** Weighted “house mix” if user hasn’t set a usual drink yet */
export const DEFAULT_BLEND_KCAL = 180

export function formatKcal(n: number): string {
  if (n >= 1000) {
    const k = n / 1000
    return `${k >= 10 ? Math.round(k) : k.toFixed(1).replace(/\.0$/, '')}k`
  }
  return `${Math.round(n)}`
}

export function caloriesSaved(drinksSkipped: number, kcalPerDrink = DEFAULT_BLEND_KCAL): number {
  return Math.round(drinksSkipped * kcalPerDrink)
}

/** Rough food equivalents for dopamine copy — illustrative only */
export function funEquivalents(kcal: number): string[] {
  const beers = Math.round(kcal / 182)
  const miles = (kcal / 100).toFixed(0) // ~100 kcal ≈ rough walk mile ballpark
  const bars = Math.round(kcal / 250)
  return [
    `~${beers} pints’ worth of energy`,
    `≈ ${miles} walk-miles of fuel`,
    `~${bars} chocolate bars (250 kcal)`,
  ]
}

/** Demo snapshot used on landing */
export const DEMO = {
  drinksSkipped: 42,
  kcalPerDrink: DEFAULT_BLEND_KCAL,
  get kcalSaved() {
    return caloriesSaved(this.drinksSkipped, this.kcalPerDrink)
  },
  moneySaved: 186.4,
} as const
