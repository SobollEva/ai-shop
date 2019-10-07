import { HighlightPipe } from './highlight.pipe';

describe('HighlightPipe', () => {
  it('create an instance', () => {
    const pipe = new HighlightPipe('text', 'ex');
    expect(pipe).toBeTruthy();
  });
});
