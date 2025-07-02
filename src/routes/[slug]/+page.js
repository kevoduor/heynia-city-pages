import { cities } from '$lib/cities';

export function load({ params }) {
  const city = cities.find(c => c.slug === params.slug);
  if (!city) {
    throw error(404, 'City not found');
  }
  return { city };
}

