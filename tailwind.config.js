module.exports = (isProd) => ({
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: isProd,
    content: ['**/*.html', '**/*.ts'],
  },
  theme: {
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4.3rem',
      '7xl': '5rem',
    },
    extend: {
      width: {
        71: '20rem',
        65: '17rem',
        98: '28rem',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
})
