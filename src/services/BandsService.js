import bands from './bands.json';

class SongService {
    static getSongs() {
        return songs ? songs : [];
    }
}

export default SongService;