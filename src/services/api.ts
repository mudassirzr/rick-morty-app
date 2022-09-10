import { GRAPHQL_URL } from "services/constants";

const post = (body: object, url: string = GRAPHQL_URL) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const getCharactersData = async (page: number = 1) => {
  const query = {
    query: `
              {  characters(page: ${page}) {    
                  info  {
                      count
                      pages
                      next
                      prev
                  }    
                  results {
                      id
                      name
                      location {
                          name
                          id
                      }
                      image
                      origin {
                        name
                        id
                      }
                      episode {
                        name
                        id
                      }
                      species
                      status  
                      gender
                      created  
                  }  
              }
          }`,
  };
  return post(query);
};

export const getLocationsData = async (page: number = 1) => {
  const query = {
    query: `
              {  locations(page: ${page}) {    
                  info  {
                      count
                      pages
                      next
                      prev
                  }    
                  results {
                      id
                      name
                      type
                      dimension  
                      residents {
                        name
                        id
                      }
                      created  
                  }  
              }
          }`,
  };
  return post(query);
};

export const getEpisodesData = async (page: number = 1) => {
  const query = {
    query: `
              {  episodes(page: ${page}) {    
                  info  {
                      count
                      pages
                      next
                      prev
                  } 
                  results {
                      id
                      name
                      air_date
                      episode  
                      characters {
                        name
                        id
                      }
                      created  
                  }  
              }
          }`,
  };
  return post(query);
};