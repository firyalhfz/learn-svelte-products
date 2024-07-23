export const load = async ({ fetch }) => {
  console.log('homepage universal load function called');
  const response = await fetch('/api/current-time');
  const currentTime = await response.text();
  return { currentTime };
};
// export const ssr = false;
export const prerender = true;
export const csr = false;
