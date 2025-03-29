    // Create the file structure:
// app/[locale]/services/[service]/page.tsx

import ServicePage from '@/components/global/ServicePage'; // Import the component we just created

export default function Page({ params }: { params: { service: string} }) {
  return <ServicePage params={params} />;
}

// This generates the static paths for our service pages
export function generateStaticParams() {
  return [
    { service: 'carpet-cleaning' },
    { service: 'window-cleaning' }
  ];
}