const ghpages = require('gh-pages');
const config = require('./config');

const publish = () => {
  ghpages.publish(
    config.output,
    {
      user: {
        name: 'Sergei Kuksov',
        email: 'avvey2009@gmail.com'
      }
    },
    function(err) {
      console.log(err);
    }
  );
};

exports.publish = publish;
