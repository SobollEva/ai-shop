import { CustomizeModule } from './customize.module';

describe('CustomizeModule', () => {
  let customizeModule: CustomizeModule;

  beforeEach(() => {
    customizeModule = new CustomizeModule();
  });

  it('should create an instance', () => {
    expect(customizeModule).toBeTruthy();
  });
});
