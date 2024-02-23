/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        light: "var(--light)",
        dark: "var(--dark)",
        passive: "var(--passive)",
        primary: "var(--primary)",
        primary2: "var(--primary2)",
      },
      fontSize: {
        btn_text: "var(--btn_text)",
        base_text: "var(--base_text)",
        middle_text: "var(--middle_text)",
        logo_text: "var(--logo_text)",
      },
      padding: {
        xl_p: "var(--xl_p)",
        lg_p: "var(--lg_p)",
        md_p: "var(--md_p)",
        sm_p: "var(--sm_p)",
      },
      gap: {
        lg_gap: "var(--lg_gap)",
        md_gap: "var(--md_gap)",
        sm_gap: "var(--sm_gap)",
        xs_gap: "var(--xs_gap)",
      },
      borderRadius: {
        global_radius: "var(--global_radius)",
      },
    },
  },
  plugins: [],
};
