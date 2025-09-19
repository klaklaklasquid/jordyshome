varying vec2 vUv;

void main() {
  vUv = uv;

  // Calculate distance from center of UV
  float dist = distance(uv, vec2(0.5, 0.5));

  // Invert so center is max, edges are zero
  float tunnelDepth = 0.2 * pow(1.0 - dist, 1.5); // 0.2 = max depth at center

  vec3 newPosition = position + normal * tunnelDepth;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
