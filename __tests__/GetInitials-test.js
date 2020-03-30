/* eslint-disable no-undef */
import getInitials from '../App/utils/getInitials';

describe('Utils/getAvatarColor', () => {
  it('works', () => {
    const name = 'Marcos Matsuda';

    expect(getInitials(name)).toBe('MM');
  });
});
