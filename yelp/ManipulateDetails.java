/**
* Parse restaurant data.
*
*/
public class ManipulateDetails {

    public static void main(String[] args) {
      JsonObject details = JsonObject.getJsonObject("newbury_restaurants.json");
      System.out.println(details.toString());
    }

    public static double milesAway(double endLat, double endLon){
      double thisLat = 42.349138;
      double thisLon = -71.084184;
      Haversine haver = new Haversine();
      return haver.distance(thisLat, thisLon, endLat, endLon);
    }
}
