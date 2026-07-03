import ClerksStaffClient from './ClerksStaffClient'

export const metadata = {
  title: 'Clerks & Staff | G20 Chambers | Join Our Team in Limpopo',
  description: 'Clerks & staff opportunities at G20 Chambers in Polokwane. Join our team supporting premier barristers at the Limpopo Bar.',
  keywords: 'clerks Limpopo, legal staff Polokwane, G20 Chambers careers, chambers support staff, legal administration',
  openGraph: {
    title: 'Clerks & Staff | G20 Chambers',
    description: 'Join our team supporting premier barristers at G20 Chambers in Limpopo.',
    url: 'https://g20chambers.co.za/join/clerks-staff',
    type: 'website',
  },
}

export default function ClerksStaffPage() {
  return <ClerksStaffClient />
}