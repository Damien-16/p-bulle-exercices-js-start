// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  //le *123 est pour renvoyer un numero aléatoir entre 1000 et 10000 mais on peut aussi mettre autre chose autre moyen (10000-1000)
  return "NCC-" + Math.round(Math.random() * 123 + 1000).toString();
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return 41000 + Math.random() * (42000 - 41000);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const classes = "DHJKLMNRTY";
  return classes[Math.floor(Math.random() * classes.length)];
}
