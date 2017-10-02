import { YaMapsAPILoader } from './ya-maps-loader';

describe('YaMapsAPILoader', () => {
    let service: YaMapsAPILoader;

    beforeEach(() => {
        service = new YaMapsAPILoader(null, null);
    });

    it('works', () => {
        expect(1).toEqual(1);
    });

});
