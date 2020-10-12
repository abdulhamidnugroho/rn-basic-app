import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer HHnHiuHTBG-3_3Y6F7KHsgEQuFWfmEG01mBPhHuCYeXGEN-F6tEO1vLB2gHPKhl5dh-mDJNnmidj0IneosewQ_9z8XyqVDJk-eLeyrPEp2iJKWf09DDDVJqtlCqEX3Yx'
    }
});
