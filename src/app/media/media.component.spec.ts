import { media } from "./media.component";

describe('Media', () => {
  it('Should return media 550.6 if input is [150, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
    expect(media([150, 591, 114, 229, 230, 270, 128, 1657, 624, 1503])).toBe(549.6);
  });
  it('Should return media = 60.32 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9. 19.4, 198.7, 38.8, 138.2]', () => {
    expect(media([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2])).toBe(60.32000000000001);
});
});