import gsap from "gsap";

function createStripe(container) {
  if (!container) return;

  const stripe = document.createElement("div");
  stripe.className = "stripe";

  //* adding color
  const hue = 200 + Math.random() * 30; // around blue/cyan
  const lightness = 40 + Math.random() * 25;
  stripe.style.backgroundColor = `hsl(${hue}, 80%, ${lightness}%)`;

  stripe.style.width = window.innerWidth;

  container.appendChild(stripe);

  //* fixed 45 degrees down-right
  const angleRad = Math.PI / 4; // 45°
  const cos = Math.cos(angleRad);
  const sin = Math.sin(angleRad);

  //* gets the size of the stipe for spawning
  const stripeLength = Math.sqrt(
    stripe.offsetWidth ** 2 + stripe.offsetHeight ** 2
  );
  const spawnFromLeft = Math.random() < 0.5;

  let startX, startY;
  if (spawnFromLeft) {
    //* left edge spawn
    startX = -stripeLength;
    startY =
      Math.random() * (window.innerHeight + stripeLength * 2) - stripeLength;
  } else {
    //* top edge spawn
    startX =
      Math.random() * (window.innerWidth + stripeLength * 2) - stripeLength;
    startY = -stripeLength;
  }

  //* use GSAP to set transform (rotation + initial translation)
  gsap.set(stripe, {
    x: startX,
    y: startY,
    rotation: 45,
    transformOrigin: "center center",
  });

  //* window diagonal size
  const screenDiagonal = Math.sqrt(
    window.innerWidth ** 2 + window.innerHeight ** 2
  );

  const distance = screenDiagonal + stripeLength * 2;

  const duration = 5 + Math.random() * 5; // random speed

  gsap.to(stripe, {
    x: startX + cos * distance,
    y: startY + sin * distance,
    duration,
    ease: "power1.out",
    onComplete: () => stripe.remove(),
  });
}

export default createStripe;
