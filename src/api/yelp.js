import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer hlJL7M_BKnarj2tgf6bjptX2ikzAtFRNANt2OelcyHXxOgW8N6BQuruFVrxWCPsbV8NMBGUOg96hVWzINccJxGi9obc73MdYc5-8cDCBNWiuJXA0eS4sB7O8DOQPZHYx",
  },
});

//this is to save you some time and is like a shortcut
// yelp.get("/search");
