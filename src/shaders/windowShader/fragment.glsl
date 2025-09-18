varying vec2 vUv;
uniform vec3 uColor;

void main() {
    // Base window color (soft glass blue)
    vec3 baseColor = vec3(0.4, 0.7, 0.9);

    // Simple vertical shine gradient
    float gradient = smoothstep(0.2, 0.8, vUv.y);

    // Horizontal white stripe in the middle
    float stripe = smoothstep(0.45, 0.48, vUv.y) - smoothstep(0.52, 0.55, vUv.y);
    vec3 stripeColor = vec3(1.0);

    // Mix base with gradient and stripe
    vec3 color = mix(baseColor, vec3(1.0), gradient * 0.3);
    color = mix(color, stripeColor, stripe);

    gl_FragColor = vec4(color, 0.9); // nearly opaque
}
