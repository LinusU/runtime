var tap = require('../tap');

tap.count(28);

var d;

/** TIME **/

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

/** DATE **/

d = new Date();
d.setDate(2);
tap.eq(2, d.getDate());

d = new Date();
d.setMonth(11);
tap.eq(11, d.getMonth());

d = new Date();
d.setYear(92);
tap.eq(92, d.getYear());
tap.eq(1992, d.getFullYear());

d = new Date();
d.setFullYear(1992);
tap.eq(92, d.getYear());
tap.eq(1992, d.getFullYear());

d = new Date();
d.setDate(2);
d.setMonth(11);
d.setFullYear(1992);
tap.eq(2, d.getDate());
tap.eq(11, d.getMonth());
tap.eq(92, d.getYear());
tap.eq(1992, d.getFullYear());

d = new Date();
d.setMinutes(36);
d.setMonth(4);
tap.eq(36, d.getMinutes());
tap.eq(4, d.getMonth());

/** NEW **/

d = new Date(1992, 11, 2, 16, 17, 18, 19);
tap.eq(1992, d.getFullYear());
tap.eq(92, d.getYear());
tap.eq(11, d.getMonth());
tap.eq(2, d.getDate());
tap.eq(16, d.getHours());
tap.eq(17, d.getMinutes());
tap.eq(18, d.getSeconds());
tap.eq(19, d.getMilliseconds());
