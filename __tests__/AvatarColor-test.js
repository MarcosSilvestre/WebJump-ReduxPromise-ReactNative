/* eslint-disable no-undef */
import getAvatarColor from '../App/utils/getAvatarColor';

describe('Utils/getAvatarColor', () => {
  it('works', () => {
    const name = 'The Invisble Man';

    expect(getAvatarColor(name)).toBe('#a135ec');
  });
});
