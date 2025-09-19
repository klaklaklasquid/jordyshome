uniform vec3 uColor;
varying vec2 vUv;

void main() {
  // Calculate distance from center
  float dist = distance(vUv, vec2(0.5, 0.5));

  // Tunnel gradient: lighter in center, darker at edges/corners
  float shadow = smoothstep(0.3, 0.7, dist); // adjust 0.3 and 0.7 for softness
  vec3 baseColor = mix(vec3(0.7, 0.7, 0.7), uColor, shadow);

  // Prevent pure black
  baseColor = max(baseColor, vec3(0.15, 0.15, 0.15));

  gl_FragColor = vec4(baseColor, 0.2);
}