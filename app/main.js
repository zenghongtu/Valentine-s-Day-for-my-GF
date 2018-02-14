require('./css/foot.css');
require('./css/heart.css');
require('./css/code.css');
require('./css/full.css');
require('./css/cursor.css');
require.ensure([], function (require) {
  const love = require('./js/go.js');
  window.onload = () => {
    love.go();
  }
})
