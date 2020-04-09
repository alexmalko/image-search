import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID TWk46_8bhrbtXUHSEGs1BoPvIR1TVlkWgldhXcQbB-U'
	}
});
