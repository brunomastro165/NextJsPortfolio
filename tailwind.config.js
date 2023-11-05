const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'nombre-imagen': "url('https://img.freepik.com/foto-gratis/mano-usando-computadora-portatil-pantalla-virtual-documento-aprobar-linea-concepto-gestion-erp-garantia-calidad-papel_616485-61.jpg?w=1060&t=st=1698366877~exp=1698367477~hmac=8dde5c2661751b1fd37f00c9bab7807ef41e6fe04453a1fbc8e7ae1e89b21728')",
          'software-imagen' : "url('/bg.svg')",
          'feature' : "url('/svgbg.svg')",
          'test' : "url('https://img.freepik.com/free-vector/random-square-halftone-pattern_1409-1062.jpg?w=996&t=st=1698878955~exp=1698879555~hmac=34cd5abbdcd3def1091224acf19733a575e3f80daeea6665b0decc5922dc5d29')",
          'test2' : "/public/hero.jpg",
          'front' : "url('/frontbg.svg')",
          'back' : "url('/backbg.svg')",
          
      },  
      
      scale: {
        '5': '.5',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("daisyui")]
}
