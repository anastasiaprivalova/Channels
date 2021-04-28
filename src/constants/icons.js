export const ICONS = {
  MOBILE: ['fas', 'phone-alt'],
  EMAIL: ['fas', 'envelope'],
  WHATS_APP: ['fab', 'whatsapp'],
  VIBER: ['fab', 'viber'],
  TELEGRAM: ['fab', 'telegram'],
  VK: ['fab', 'vk']
}

export const getRandomIcon = () => {
  const iconKeys = Object.keys(ICONS)
  const iconsTotal = iconKeys.length
  const randomIndex = Math.round(Math.random() * iconsTotal)

  return ICONS[iconKeys[randomIndex]]
}