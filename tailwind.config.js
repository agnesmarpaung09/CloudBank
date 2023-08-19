/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridAutoRows : {

        
      },
      backgroundImage: {
        "icon-test": "url('/images/BG LAYER 1.png')"
      }

    


      // backgroundImage: {
      //   'image-agenda': "url('/image/PTS SMK.png')",
      // }
    },
  },
  plugins: [],
}