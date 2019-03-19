module.exports = () => {
  return (req, res, next) => {
    const hostname = process.env.HOSTNAME;
    if (hostname) res.append("X-Pod-Hostname", hostname);
    next();
  };
};
