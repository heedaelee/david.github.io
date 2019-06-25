let config = {
  title: `David Life`,
  author: 'david',
  description: "love you",
  siteUrl: 'https://heedaelee.github.io',

  // header config
  titleLogo: () => {
    return require('./src/images/profile.png');
  },
  titleLogoShow: true,
  bio: 'david 홈',
  bioShow: true,

  // addtional
  googleAnalyticsTrackingId: 'UA-142691624-1',
  disqusShortname: 'david',
};

/********************************************** */

if (process.env.NODE_ENV === 'development') {
  config.googleAnalyticsTrackingId = '';
  config.disqusShortname = '';
}

module.exports = config;
