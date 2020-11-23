let web_safe_colors = []
for (r = 0; r < 16; r += 3) {
  for (g = 0; g < 16; g += 3) {
    for (b = 0; b < 16; b += 3) {
      web_safe_colors.push(r.toString(16) + g.toString(16) + b.toString(16));
    }
  }
}