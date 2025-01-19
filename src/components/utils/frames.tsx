export const frames: any = [];

for (let i = 10; i <= 25; i++) {
  const frameNumber = i.toString().padStart(5, "0");
  frames.push(`assets/frames/scene${frameNumber}.jpg`);
}
