export const frames: any = [];

for (let i = 42; i <= 95; i++) {
  const frameNumber = i.toString().padStart(5, "0");
  frames.push(`assets/frames/scene${frameNumber}.jpg`);
}
