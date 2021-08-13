module.exports = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    auth_url: process.env.NEXTAUTH_URL,
  },
};
