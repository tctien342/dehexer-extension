/**
 * Handle implements new method declare in global.d.ts
 */

String.prototype.domain = function () {
  return this.split('/').slice(0, 3).join('/');
};

String.prototype.isURL = function () {
  let currentStr = this.toString();
  if (currentStr.startsWith('www') && !currentStr.startsWith('http')) {
    currentStr = 'http://' + currentStr;
  }
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    currentStr
  );
};

String.prototype.isSHex = function () {
  return /^(?:([a-f0-9]{2})\s*)+$/i.test(this.toString());
};

String.prototype.toSHex = function () {
  return this.toString()
    .split('')
    .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('');
};

export {};
