import { apollo, app } from "./app";
//import { env } from "./env";

const startServer = async () => {
  try {
    await app.listen({
      host: "0.0.0.0",
      port: 3333,
    });
    console.log("🚀 HTTP Server Running!");

    await apollo.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
