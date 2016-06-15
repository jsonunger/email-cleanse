module.exports = function (email) {
  if (!email) throw new Error('Email required');
  email = email.toLowerCase();
  if (/\@gmail.com?$/.test(email)) {
    var split = email.split('@');
    split[0] = split[0].replace(/\./g,'');
    email = split.join('@');
  }
  return email;
};
