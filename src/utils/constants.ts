export const PAYPAL_OPTIONS = {
  "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID as string,
  vault: true,
  intent: "subscription"
};

export const CLERK_COMPONENT_STYLES = {
  elements: {
    navbar: {
      display: 'none',
    },
    card: "border rounded shadow-4xl",
    socialButtonsBlockButton: "p-3",
    formFieldInput:
      " w-full text-base px-4 py-2 border-b border-default-300 focus:outline-none default-2xl rounded focus:border-default-500 ",
    formButtonPrimary: {
      backgroundColor: '#e11d48',
      hover: "black"
    }

  }
};


export const BASE_SLOTS_FORM = [
  {
    username: ""
  },
  {
    username: ""
  }
];