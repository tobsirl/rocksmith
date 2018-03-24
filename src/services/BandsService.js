import bands from './bands.json';

class BandService {
    static getBands() {
        return bands ? bands : [];
    }
}

export default BandService;