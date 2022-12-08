/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      tablet: '850px',
      750: '750px',
      500: '500px'
    },
    extend: {
      backgroundImage: {
        servicesBg: "url('/Images/ServicesImg/serBg.png')",
        learnMoreAfterImg: "url('/Images/ServicesImg/turn.svg')",
        learnMoreModalImg: "url('/Images/ServicesImg/turn2.svg')",
        servicesCommonBg: "url('/Images/ServicesImg/triangle.svg')",
        servicesCommonBg2: "url('/Images/ServicesImg/triangle2.svg')",
        shippingBeforeImg: "url('/Images/shippingImgs/beforeImg.svg')",
        heroBg: "url('/Images/HeroImg/hero_bg.png')",
        weDoBg: "url('/Images/wedoImgs/weDoBg.png')",
        getTouch_bg: "url('/Images/getTouch/touch_bg.png')",
      },
      colors: {
        orange: {
          main: '#FF7D44',
        },
        gray: {
          text: 'rgba(255, 255, 255, 0.68)',
          line: '#E0E0E0',
        },
        black: {
          dark: '#182F43',
          servicesTextColor: '#000',
          serModalText: 'rgba(0, 0, 0, 0.68)',
          header_bg: 'rgba(0, 0, 0, 0.3)',
          hero_Form_Bg: 'rgba(58, 58, 58, 0.5)',
          line_bg: 'rgba(224, 224, 224, 1)',
          shippingAfter: 'rgba(46, 51, 104, 0.15)',
          touch:"#1F1F1F"
        },
      },
      maxWidth: {
        hero_Form_W: '450px',
        shippingTop: '800px',
        738: '738px',
        543: '543px',
      },
      maxHeight: {
        525: '525px',
      },
      width: {
        formWidth: '464px',
        servicesHero: '543px',
        245: '245px',
        weDoContent: '325px',
        450: '450px',
        151: '151px',
      },
      height: {
        formHeight: '619px',
        43: '43px',
        112: '112px',
      },
      margin: {
        10: '10px',
        40: '40',
      },
      padding: {
        160: '160px',
        25: '25px',
        70: '70px',
        196: '196px',
      },
      fontSize: {
        56: '56px',
        15: '15',
        aboutTitle: '38px',
      },
      lineHeight: {
        68: '68px',
      },
      borderRadius: {
        10: '10px',
      },
      backgroundColor: {
        weDoNumber: '#D9D9D9',
        buttonHover: 'rgba(255, 125, 68, 0.15)',
        mostButtonHover: '#C24F1D',
        blurForm: 'rgba(90, 90, 90, 0.5)',
      },
      borderColor: {
        buttonHoverBorder: '#FF7D44',
      },
    },
  },
  plugins: [],
}
