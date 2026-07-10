export default {
  async fetch(request) {
    return new Response('Static site served by Cloudflare Pages');
  },
};
