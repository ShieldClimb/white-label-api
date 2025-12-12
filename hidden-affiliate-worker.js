addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Define the target URL to cloak
  const targetUrl = 'https://api.shieldclimb.com';
  
  // Modify the request URL to replace the worker's domain with the target domain
  const url = new URL(request.url);
  url.hostname = new URL(targetUrl).hostname;

  // Check if the path contains "wallet.php" and replace it with "set-affiliate.php"
  if (url.pathname.includes('/control/wallet.php')) {
    url.pathname = url.pathname.replace('/control/wallet.php', '/set-affiliate.php');
  }

  // Add the affiliate parameter to the URL while preserving the existing search params
  url.search += (url.search ? '&' : '') + 'sub_affiliate=0x3B98AFD0Bb4b4291eD825d1A8d5E62b14800cf9e&domain=checkout.yourdomain.com';
  
  // Set custom fees for total should always be 0.985
  url.search += (url.search ? '&' : '') + 'sub_affiliate_fee=0.01'; // An example where you wanted to receive a 1% commission of the total payout.
  url.search += (url.search ? '&' : '') + 'merchant_fee=0.975'; 
  
  // Create a modified request with the updated URL
  const modifiedRequest = new Request(url.toString(), request);

  // Make a request to the target URL
  const response = await fetch(modifiedRequest);

  // If the response status code is in the 40X range, redirect to custom error page https://www.yourdomain.com/error
  if (response.status >= 400 && response.status < 500) {
    return Response.redirect('https://www.yourdomain.com/error', 302);
  }

  // Clone the response to modify headers
  const modifiedResponse = new Response(response.body, response);

  // Set headers to cloak the origin
  modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');

  return modifiedResponse;
}
