import _ from 'lodash';

require('../../blocks/page-header/page-header');

_.now();

const a = [...[1, ...[2, ...[3]]], 4];

console.log(a);
