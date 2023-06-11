import { gql } from "@apollo/client";
import client from "apolloClient";
import { useEffect, useState } from "react";

const useGraphqlQuery =  (query: string) => {
  const [data, setData] = useState({});
  const documentNode = gql`
    ${query}
  `;

  const request = async () => {
    try {
      const res = await client.query({ query: documentNode });
      setData(res.data);
    } catch (error) {
      setData(error);
    }
  };
  useEffect(() => {
    request();
  }, []);

  return data;
};

export { useGraphqlQuery };
