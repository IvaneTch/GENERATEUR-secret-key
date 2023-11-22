const crypto = require("crypto");

// Генерируем случайный секретный ключ
const secretKey = crypto.randomBytes(32).toString("hex");

console.log("Секретный ключ:", secretKey);
