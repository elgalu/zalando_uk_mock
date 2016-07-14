
function _MTR_MYST(o) {
  o.id = '087bfcc4-4c47-4832-ae49-214fab36f912';
  o.id2 = '938ec5b1-ecc2-44ec-8a96-644068f780cf';
  o.etg = '';
};

// Actually load the script needed to mark the user
(function() {
  var s = document.createElement('script');
  s.async = true;
  var h = "https://";
  var k = Math.round(((new Date).getTime() / 1000 - 1356994800) / 86400);
  
  s.src = h + 'rtb.metrigo.com/assets/delivery/dlsync.js?' + k;
  var c = document.getElementsByTagName('script')[0];
  c.parentNode.insertBefore(s, c);
})();
