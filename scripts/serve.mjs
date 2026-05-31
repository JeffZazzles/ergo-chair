import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const requestedRoot = process.argv.includes("--dist") ? "dist" : ".";
const publicRoot = resolve(projectRoot, requestedRoot);
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function getFilePath(url) {
  const parsedUrl = new URL(url, `http://localhost:${port}`);
  const decodedPath = decodeURIComponent(parsedUrl.pathname);
  const normalizedPath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  let filePath = resolve(join(publicRoot, normalizedPath));

  if (!filePath.startsWith(publicRoot)) {
    return null;
  }

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }

  return filePath;
}

const server = createServer((request, response) => {
  const filePath = getFilePath(request.url || "/");

  if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type": mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream"
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, () => {
  console.log(`Serving ${publicRoot}`);
  console.log(`Open http://localhost:${port}`);
});
