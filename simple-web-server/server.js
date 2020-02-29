const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is home page.</p></body></html>");
    res.end();
  } else if (req.url == "/profile") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>I Love You :*.</p></body></html>");
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Love You too :*.</p></body></html>");
    res.end();
  } else if (req.url == "/papah") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Papah Terbaikk .</p></body></html>");
    res.end();
  } else if (req.url == "/mamah") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Orang Tua Terbaikk .</p></body></html>");
    res.end();
  } else if (req.url == "/kakek") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Kakek Terbaik.</p></body></html>");
    res.end();
  } else if (req.url == "/gila") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Aku Orang Gila.</p></body></html>");
    res.end();
  } else if (req.url == "/sayank") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Miss Youu :*.</p></body></html>");
    res.end();
  } else if (req.url == "/anak") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>mana saya tau saya kan ikan.</p></body></html>");
    res.end();
  } else if (req.url == "/ajiiiee") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Anjiiiirr Ganteng Banget :v .</p></body></html>");
    res.end();
  } else if (req.url == "/kakak") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>akwoakokaokowakowak.</p></body></html>");
    res.end();
  } else {
    res.writeHead(404);
    res.end("Page Not Found!!!");
  }
});

console.log(`Server running in port 3008`);

server.listen(3008);
