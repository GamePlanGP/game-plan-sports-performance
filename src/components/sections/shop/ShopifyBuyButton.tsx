"use client";

import { useEffect, useRef } from "react";

/**
 * Embeds the Shopify Buy Button for the Clarity+ product so visitors can add to
 * cart and check out through Shopify. This is the React equivalent of the
 * Shopify-generated snippet: it loads the Buy Button SDK once, then mounts a
 * "product" component into a ref'd node.
 *
 * Shopify is the source of truth for price and inventory, so the embedded card
 * renders the price and Add to cart button (which reflects live availability,
 * e.g. "Sold out") while the surrounding page supplies the image and title.
 * The button / cart / toggle are styled in the Palette v2 look: silver fill,
 * navy label, 1.5px outline, 2px radius.
 */

const SHOPIFY_DOMAIN = "uvds07-r1.myshopify.com";
const STOREFRONT_ACCESS_TOKEN = "a5fc2c18dcdecc06779b540b4ef3d604";
const PRODUCT_ID = "9631224365315";
const MONEY_FORMAT = "%24%7B%7Bamount%7D%7D";
const SDK_URL =
  "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

// Palette v2 (mirrors the --navy / --silver tokens in globals.css) applied to
// the Shopify UI.
const SILVER = "#C4CED4";
const WHITE = "#FFFFFF";
const NAVY = "#002D62";

const brandButton = {
  "font-family": "inherit",
  "font-weight": "600",
  "font-size": "12px",
  "letter-spacing": "0.16em",
  "text-transform": "uppercase",
  "padding-top": "17px",
  "padding-bottom": "17px",
  color: NAVY,
  "background-color": SILVER,
  border: `1.5px solid ${SILVER}`,
  ":hover": { "background-color": WHITE, color: NAVY, border: `1.5px solid ${WHITE}` },
  ":focus": { "background-color": WHITE, border: `1.5px solid ${WHITE}` },
  "border-radius": "2px",
};

const COMPONENT_OPTIONS = {
  product: {
    styles: {
      product: {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "0",
        },
      },
      // Price sits on the navy hero — render it in white for contrast.
      price: {
        color: WHITE,
        "font-size": "28px",
        "font-weight": "700",
        "margin-bottom": "12px",
      },
      compareAt: { color: SILVER, "font-size": "16px" },
      unitPrice: { color: SILVER },
      button: brandButton,
    },
    // The page supplies the image and title; Shopify renders the live price
    // and Add to cart / Sold out button.
    contents: { img: false, title: false },
    text: { button: "Add to cart" },
  },
  productSet: {
    styles: {
      products: { "@media (min-width: 601px)": { "margin-left": "-20px" } },
    },
  },
  modalProduct: {
    contents: {
      img: false,
      imgWithCarousel: true,
      button: false,
      buttonWithQuantity: true,
    },
    styles: {
      product: {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px",
        },
      },
      button: brandButton,
    },
    text: { button: "Add to cart" },
  },
  option: {},
  cart: {
    styles: { button: brandButton },
    text: { total: "Subtotal", button: "Checkout" },
  },
  toggle: {
    styles: {
      toggle: {
        "background-color": SILVER,
        "border-radius": "2px",
        ":hover": { "background-color": WHITE },
        ":focus": { "background-color": WHITE },
      },
      count: { color: NAVY },
      iconPath: { fill: NAVY },
    },
  },
};

type ShopifyUI = {
  createComponent: (type: string, config: Record<string, unknown>) => void;
};

type ShopifyBuyClient = {
  buildClient: (config: {
    domain: string;
    storefrontAccessToken: string;
  }) => unknown;
  UI?: { onReady: (client: unknown) => Promise<ShopifyUI> };
};

declare global {
  interface Window {
    ShopifyBuy?: ShopifyBuyClient;
  }
}

export function ShopifyBuyButton() {
  const nodeRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !nodeRef.current) return;
    initialized.current = true;

    function mountComponent() {
      const ShopifyBuy = window.ShopifyBuy;
      if (!ShopifyBuy || !ShopifyBuy.UI || !nodeRef.current) return;

      const client = ShopifyBuy.buildClient({
        domain: SHOPIFY_DOMAIN,
        storefrontAccessToken: STOREFRONT_ACCESS_TOKEN,
      });

      ShopifyBuy.UI.onReady(client).then((ui) => {
        if (!nodeRef.current) return;
        ui.createComponent("product", {
          id: PRODUCT_ID,
          node: nodeRef.current,
          moneyFormat: MONEY_FORMAT,
          options: COMPONENT_OPTIONS,
        });
      });
    }

    if (window.ShopifyBuy?.UI) {
      mountComponent();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SDK_URL}"]`,
    );
    if (existing) {
      existing.addEventListener("load", mountComponent);
      if (window.ShopifyBuy) mountComponent();
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = SDK_URL;
    script.onload = mountComponent;
    document.head.appendChild(script);
  }, []);

  return <div ref={nodeRef} />;
}
