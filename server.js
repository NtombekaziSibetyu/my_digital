var sha256 = require('js-sha256');

sha256('Message to hash');
sha224('Message to hash');
 
var hash = sha256.create();
hash.update('Message to hash');
hash.hex();
 
var hash2 = sha256.update('Message to hash');
hash2.update('Message2 to hash');
hash2.array();
 
// HMAC
sha256.hmac('key', 'Message to hash');
sha224.hmac('key', 'Message to hash');
 
var hash = sha256.hmac.create('key');
hash.update('Message to hash');
hash.hex();
 
var hash2 = sha256.hmac.update('key', 'Message to hash');
hash2.update('Message2 to hash');
hash2.array();