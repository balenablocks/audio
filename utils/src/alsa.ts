import fs from 'fs'
import readline from 'readline'
import { files } from './constants'

// Information derived from /proc/asound/cards and /proc/asound/modules
// Consistent with PulseAudio naming conventions in 'pactl list cards'
export interface ALSACard {
  card: number
  slug: string
  cardName: string
  longCardName?: string
  driverName?: string
}

async function parseAsoundCards (): Promise<ALSACard[]> {
  const cardsFileReader = readline.createInterface({
    input: fs.createReadStream(files.alsaCardsFile, 'utf-8'),
    crlfDelay: Infinity
  })

  const cards: ALSACard[] = []

  // let card: ALSACard
  for await (const line of cardsFileReader) {
    const isNewCard: boolean = line.includes(']:') // Fishing for --> 0 [bcm2835-jack   ]: bcm2835_headphonbcm2835 Headphones - bcm2835 Headphones
    const [card, slug, driverName, cardName] = line.split(/\[|\]:/).map(s => s.trim())
    if (isNewCard) {
      cards.push({
        card: parseInt(card),
        slug,
        cardName
      })
    }
  }
  console.log(cards)
  
  return []
}

export async function getALSACards (): Promise<ALSACard[]> {
  return await parseAsoundCards()
}
