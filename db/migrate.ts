import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "db/migrations",
    });
    console.log("Migrations completed ");
  } catch (error) {
    console.log("Error during migrations: ", error);
    process.exit(1);
  }
};

main();
