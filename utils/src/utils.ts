import * as fs from 'fs'

// let cards = `
// 0 [bcm2835-jack   ]: bcm2835_headphonbcm2835 Headphones - bcm2835 Headphones
//                      bcm2835 Headphones
// 1 [usb-soundcard-1]: USB-Audio - USB PnP Sound Device
//                      C-Media Electronics Inc. USB PnP Sound Device at usb-0000:01:00.0-1.1, full spe
// `
const cards = fs.readFileSync('/proc/asound/cards', { encoding: 'utf8', flag: 'r' })
console.log(cards)
