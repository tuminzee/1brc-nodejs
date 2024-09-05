import * as fs from "node:fs";

const filePath = "../../../../measurements.txt";

async function bootstrap() {
  const { size: fileSize } = fs.statSync(filePath);
  console.log(fileSize / (1024 * 1024) + "MB");
}

bootstrap();
process.exit(1);
