module.exports = {
  content: ['./dist/index.html'],
  darkMode: 'class',
  theme: {
    borderWidth: {
      '2': '2px',
      '8': '8px',
      '44': '44px'
    },
    fontSize: {
      'bigboy': '25rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        'raleway' : ['Raleway', 'sans-serif']
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100vh)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'wiggle': {
          '0%': {
              transform: 'rotate(0deg)'
          },
          '50%': {
              transform: 'rotate(180deg)'
          },
          '100%': {
            transform: 'rotate(-360deg)'
          }
      },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(100vh)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },
        'fade-in-across-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100vh)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          }
        },
        'fade-in-across-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50vh)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-across-left': 'fade-in-across-left 1s ease-out',
        'fade-in-across-right': 'fade-in-across-right 1s ease-out',
        'wiggle': 'wiggle 1s ease-in-out',
        'fade-in': 'fade-in 2s ease-out',
      },

      colors: {
        light_shade: '#C9C8AE',
        light_accent: '#DFAE7E',
        main: '#DFA7A3',
        dark_accent: 'brown',
        dark_shade: '#FFFFFF',
      },

      scale: {
        '200': '2'
      }
    },
  },
  plugins: [],
};
