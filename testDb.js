const db = require("./config/db");

(async () => {
  try {
    const connection = await db.getConnection();
    console.log("Database Connected Successfully");
    connection.release();
  } catch (error) {
    console.error(error);
  }
})();