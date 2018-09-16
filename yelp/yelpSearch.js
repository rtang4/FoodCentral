'use strict';

const yelp = require('yelp-fusion');
const apiKey = 'OyiCuF-FrZkQfHHTtG55R7bwI4HOeOZvDruU0FpJdHXFMxITKQoePJkjDN2N6qpmXm1dUhJ_x27X7Wlb546o01PKCsaK7pUGVos_1PgVbpbQ8lbzINbecAAuxIadW3Yx';
const client = yelp.client(apiKey);

// get restaurant IDs near coordinates

async function getRestaurantDetails() {
    const restaurantIds = async () => {
      const response = await client.search({
        term:'food',
        latitude: '42.349138',
        longitude: '-71.084184',
        latitude: '31.221468',
        longitude: '121.459248',
        limit: '20' // change to number we want to show (max?)
      })
      return response.jsonBody.businesses.filter(business => {
        return business.id !== "";
      }).map(business => {
        //const thisId = .then(details => {
  //console.log(details);
        return business.id;
      })
    }
  }
  (ids => console.log(ids));


/*
  async function getAllDetails (restaurantIds) {

    async function getDetails (restaurantIds) {
      const pArray = restaurantIds.map(async anId => {
        const details = await client.business(anId);
        var allDetails = details.jsonBody;
        console.log(allDetails);
        return response.json();
      });
      const allDetails = await Promise.all(pArray);
      // ... do some stuff
      return allDetails;
    }
    getDetails(restaurantIds).then(console.log(details));
  }

    getAllDetails(restaurantIds); */

    /* const restaurantIds = await Promise.all(restaurantIds => {
      const theseDetails = getDetails(anId).then(details => {
        console.log(details);
        return details;
      })
    }); */

    // start medium
/*
    async function getDetails (restaurantIds) {
      const details = await restaurantIds.map(restaurantIds, async restaurantId => {
        const response = await client.business(restaurantId);
        return response.json();
      });
      return details;
    }

    // log details
    const { forEach } = require('p-iteration');
    function logDetails (restaurantIds) {
      return forEach(restaurantIds, async restaurantId => {
        const response = await client.business(restaurantId);
        const details = await response.json();
        console.log(details);
      });
    } */
    // end medium

  /* const getDetails = async (anId) => {
      console.log("anId: " + anId);
      const details = await client.business(anId);
      var allDetails = details.jsonBody;
      console.log(allDetails);
      return allDetails;
    }
  }
  getAllDetails(); */



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
