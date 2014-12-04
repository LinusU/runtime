var tap = require('../tap');

tap.count(1);

var d = new Date(35 - 28800000);

tap.eq(35, d.getMilliseconds());
