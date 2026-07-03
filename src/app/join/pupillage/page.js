import PupillageClient from './PupillageClient'

export const metadata = {
  title: 'Pupillage at G20 Chambers | Training for Future Barristers in Limpopo',
  description: 'Pupillage at G20 Chambers in Polokwane. Hands-on training, mentorship, and courtroom experience for future barristers. Apply now at the Limpopo Bar.',
  keywords: 'pupillage Limpopo, barristers training South Africa, G20 Chambers pupillage, legal training Polokwane',
  openGraph: {
    title: 'Pupillage | G20 Chambers',
    description: 'Hands-on training and mentorship for future barristers at G20 Chambers in Limpopo.',
    url: 'https://g20chambers.co.za/join/pupillage',
    type: 'website',
  },
}

export default function PupillagePage() {
  return <PupillageClient />
}