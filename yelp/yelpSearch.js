'use strict';

const yelp = require('yelp-fusion');
const apiKey = 'OyiCuF-FrZkQfHHTtG55R7bwI4HOeOZvDruU0FpJdHXFMxITKQoePJkjDN2N6qpmXm1dUhJ_x27X7Wlb546o01PKCsaK7pUGVos_1PgVbpbQ8lbzINbecAAuxIadW3Yx';
const client = yelp.client(apiKey);

// get restaurant IDs near coordinates

function getRestaurantDetails() {
  const restaurantIds = async () => {
    const response = await client.search({
      term:'food',
      latitude: '42.361145',
      longitude: '-71.057083',
      limit: '5' // change to number we want to show (max?)
    })
    return response.jsonBody.businesses.filter(business => {
      return business.id !== "";
    }).map(business => {
      return business.id;
    })
  }
  console.log("id array length: " + restaurantIds.length);

  /*for (var i = 0; i < restaurantIds; i++) {
  console.log("inside for loop");
  const theseDetails = getDetails(restaurantIds[i]).then(details => {
  console.log(details);
  return details;
})
} */

  async function getAllDetails () {
    await Promise.all(restaurantIds.map(async (anId) => {
      const theseDetails = getDetails(anId).then(details => {
        console.log(details);
        return details;
      }));

      const getDetails = async (anId) => {
        console.log("anId: " + anId);
        const details = await client.business(anId);
        var allDetails = details.jsonBody;
        console.log(allDetails);
        return allDetails;
      }
    }
  }
}

  // get details on a specific business
  /*function getDetailsOfABusiness() {
    console.log("length: " + restaurantIds.length);
    for (var i = 0; i < restaurantIds.length; i++) {
      console.log("inside for loop");
      const theseDetails = getDetails(restaurantIds[i]).then(details => {
        console.log(details);
        return details;
      });
      // console.log(theseDetails);
    }
  } */


  // getDetails('kP1b-7BO_VhWk_0tvuA_tw').then(details => console.log(details));
  // getDetailsOfABusiness();

getRestaurantDetails();
