const apiKey = "MzOO4OQiSACcCC544mpGB7A52RioARsDLvW23LUTCtg6sMmBPlqt4GvTU2O32iuonUfHha0qNAgsOJs1irBHb2pyBDSgm6XcXEVyCP4hKot3huL0Gnft5CLCBqrNYnYx";

const Yelp = {
    search(term, location, sortBy) {
        const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
        const yelpAPI = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        
        const headers = {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }

        return fetch(corsAnywhere + yelpAPI, headers)
        .then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        })
    }
}

export default Yelp;