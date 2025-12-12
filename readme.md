# ShieldClimb White-Label API

Easily rebrand ShieldClimb’s API (`https://api.shieldclimb.com`) to run under your **own custom domain** using **Cloudflare Workers**. This allows you to offer a fully branded experience to your sub-merchants while keeping your affiliate wallet secure.

## How to Set It Up

1. **Create a Cloudflare Worker**  
   Set up a new worker from your Cloudflare dashboard.

2. **Configure the Worker Script**  
   Replace the worker code with your chosen `worker.js`. You can use the **hidden affiliate version** to embed your wallet directly, keeping it invisible to your sub-merchants.

3. **Set Your Affiliate Wallet**  
   Replace the example wallet: 0x3B98AFD0Bb4b4291eD825d1A8d5E62b14800cf9e with your own affiliate wallet address.

4. **Use Your Custom Domain**  
    Replace `payment.example.com` with your own domain to display in **Multi-Provider Hosted Mode**.

5. **Keep API Endpoints Intact**  
    Do **not** replace `api.shieldclimb.com`; it must remain as the backend endpoint.

6. **Route Your Domain**  
    Point your custom domain to the Cloudflare Worker via your Cloudflare dashboard.

## Benefits

- Maintain **full branding control** over your payment interface.  
- Keep your **affiliate wallet hidden** from merchants.  
- Seamlessly integrate multiple payment providers under your domain.  
- Reduce setup complexity with a step-by-step Cloudflare Worker deployment.

## Step-by-Step Guide

For detailed instructions and best practices, see the full guide:  
[White-Label API Custom Domain Setup Guide](https://shieldclimb.com/white-label-api-custom-domain-setup-guide/)

