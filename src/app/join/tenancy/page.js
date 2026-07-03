import TenancyClient from './TenancyClient'

export const metadata = {
  title: 'Tenancy at G20 Chambers | Join Premier Barristers in Limpopo',
  description: 'Tenancy at G20 Chambers in Polokwane. Join a premier group of barristers at the Limpopo Bar. Expert advocates in Criminal, Family, Human Rights, and more.',
  keywords: 'tenancy Limpopo, barristers South Africa, G20 Chambers tenancy, Limpopo Bar, advocates Polokwane',
  openGraph: {
    title: 'Tenancy | G20 Chambers',
    description: 'Join a premier group of barristers at G20 Chambers in Limpopo.',
    url: 'https://g20chambers.co.za/join/tenancy',
    type: 'website',
  },
}

export default function TenancyPage() {
  return <TenancyClient />
}