process.env.ALSA_CARDS_FILE = 'test/fixtures/cards.txt'
// eslint-disable-next-line import/first
import { getALSACards } from './alsa'

const cards = getALSACards()
