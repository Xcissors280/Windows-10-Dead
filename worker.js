export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>RIP Windows 10 | Countdown to Windows 10's End of Life</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      overscroll-behavior-y: none;
      overscroll-behavior-x: none;
      height: 100vh;
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: 'Segoe UI', sans-serif;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
      position: relative;
      overflow: hidden;
    }
    body::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
    .container {
      text-align: center;
      background-color: rgba(0, 0, 0, 0.4);
      padding: 2rem;
      border-radius: 12px;
      z-index: 1;
      backdrop-filter: blur(10px);
    }
    h1 { 
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .countdown { 
      font-size: 2rem;
      word-wrap: break-word;
    }
    .credits {
      background-color: rgba(0, 0, 0, 0.4);
      padding: 0.7rem 1.5rem;
      border-radius: 8px;
      font-size: 0.9rem;
      position: absolute;
      bottom: 20px;
      text-align: center;
      width: auto;
      max-width: 80%;
      z-index: 1;
      backdrop-filter: blur(10px);
    }
    .credits a {
      color: #01adef;
      text-decoration: none;
      transition: color 0.3s;
    }
    .credits a:hover {
      color: #00bfff;
      text-decoration: underline;
    }
    
    @media (max-width: 768px) {
      body {
        height: 100vh;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .container {
        padding: 1.5rem;
        max-width: 90%;
        width: 90%;
        margin-bottom: 90px;
      }
      h1 {
        font-size: clamp(1.5rem, 7vw, 2.5rem);
      }
      .countdown {
        font-size: clamp(1.2rem, 5vw, 2rem);
      }
      .credits {
        position: fixed;
        bottom: 25px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 90%;
        max-width: 90%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Windows 10 Has Reached End Of Life</h1>
  </div>
  <div class="credits">
    <span>Created by <a href="https://atserver.us" target="_blank">Xcissors</a> and <a href="https://boxersteavee.dev" target="_blank">Boxersteavee</a> on <a href="https://github.com/Xcissors280/Windows-10-EOL" target="_blank">GitHub</a></span>
    <p><a href="https://boxersteavee.dev/projects/rip-windows10/" target="_blank" rel="noopener noreferrer">What does this mean?</a></p>
  </div>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  },
};
