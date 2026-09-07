"use client";

import { useEffect, useRef } from "react";

/**
 * Embeds the Shopify Buy Button for the Clarity product so visitors can add to
 * cart and check out through Shopify. This is the React equivalent of the
 * Shopify-generated snippet: it loads the Buy Button SDK once, then mounts a
 * "product" component into a ref'd node.
 *
 * The embedded card is configured to render only the Add to cart button (the
 * surrounding page already shows the product image, title, and price), and the
 * button / cart / toggle are styled in the site's gold-on-navy palette.
 */

const SHOPIFY_DOMAIN = "uvds07-r1.myshopify.com";
const STOREFRONT_ACCESS_TOKEN = "a5fc2c18dcdecc06779b540b4ef3d604";
const PRODUCT_ID = "9631224365315";
const MONEY_FORMAT = "%24%7B%7Bamount%7D%7D";
const SDK_URL =
  "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

// Brand palette (mirrors globals.css tokens) applied to the Shopify UI.
const GOLD = "#C9A84C";
const GOLD_HOVER = "#E8C97A";
const NAVY = "#08111A";

const brandButton = {
  "font-family": "inherit",
  "font-weight": "600",
  "font-size": "16px",
  "padding-top": "16px",
  "padding-bottom": "16px",
  color: NAVY,
  "background-color": GOLD,
  ":hover": { "background-color": GOLD_HOVER, color: NAVY },
  ":focus": { "background-color": GOLD_HOVER },
  "border-radius": "8px",
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
      button: brandButton,
    },
    // The page already shows the image, title, and price — keep only the button.
    contents: { img: false, title: false, price: false },
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
        "background-color": GOLD,
        ":hover": { "background-color": GOLD_HOVER },
        ":focus": { "background-color": GOLD_HOVER },
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
