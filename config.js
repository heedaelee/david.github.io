let config = {
  title: `David Life`,
  author: 'david',
  description: "love you",
  siteUrl: 'https://heedaelee.github.io/myweb-static/',

  // header config
  titleLogo: () => {
    return require('./src/images/profile.png');
  },
  titleLogoShow: true,
  bio: 'david 홈',
  bioShow: true,

  // addtional
  googleAnalyticsTrackingId: '',
  disqusShortname: '',
};

/********************************************** */

if (process.env.NODE_ENV === 'development') {
  config.googleAnalyticsTrackingId = '';
  config.disqusShortname = '';
}

module.exports = config;
