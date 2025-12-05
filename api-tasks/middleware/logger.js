const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    const ip = req.ip;
    console.log(`[${timestamp}] ${ip} - ${method} ${url}`);
    next(); // Es crucial llamar a next() para pasar el control al siguiente middleware/ruta
};
module.exports = logger;