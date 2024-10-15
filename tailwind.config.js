/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        light: "var(--light)",
        dark: "var(--dark)",
        light_gray: "var(--light_gray)",
        gray: "var(--gray)",
        light_gray_blue: "var(--light_gray_blue)",
        primary: "var(--primary)",
        primary2: "var(--primary2)",
      },
      fontSize: {
        sm_text: "var(--sm_text)",
        md_text: "var(--md_text)",
        lg_text: "var(--lg_text)",
        xl_text: "var(--xl_text)",
        xxl_text: "var(--xxl_text)"
      },
      padding: {
        xl_p: "var(--xl_p)",
        lg_p: "var(--lg_p)",
        md_p: "var(--md_p)",
        sm_p: "var(--sm_p)",
        xs_p: "var(--xs_p)"
      },
      margin: {
        xl_m: "var(--xl_m)"
      },
      gap: {
        xl_gap: "var(--xl_gap)",
        lg_gap: "var(--lg_gap)",
        md_gap: "var(--md_gap)",
        sm_gap: "var(--sm_gap)",
        xs_gap: "var(--xs_gap)",
      },
      borderRadius: {
        sm_radius: "var(--sm_radius)",
      },
    },
  },
  plugins: [],
};
