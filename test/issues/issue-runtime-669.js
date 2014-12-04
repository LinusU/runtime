var tap = require('../tap');

tap.count(8);

var d;

d = new Date();
d.setSeconds(40);
tap.eq(40, d.getSeconds());

d = new Date();
d.setMinutes(40);
tap.eq(40, d.getMinutes());

d = new Date();
d.setHours(8);
tap.eq(8, d.getHours());

d = new Date();
d.setSeconds(20);
d.setMinutes(40);
d.setHours(8);
tap.eq(40, d.getMinutes());
tap.eq(20, d.getSeconds());
tap.eq(8, d.getHours());

d = new Date();
d.setTime(35);
tap.eq(1970, d.getFullYear());
tap.eq(35, d.getMilliseconds());
