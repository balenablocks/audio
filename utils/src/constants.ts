export const files = {
  alsaCardsFile: process.env.ALSA_CARDS_FILE ?? '/proc/asound/cards',
  alsaModulesFile: process.env.ALSA_MODULES_FILE ?? '/proc/asound/modules'
}
