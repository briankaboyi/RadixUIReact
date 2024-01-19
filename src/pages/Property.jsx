import {
  ChevronDownIcon,
  EyeClosedIcon,
  HeartFilledIcon,
  HeartIcon,
  InfoCircledIcon,
  LinkBreak2Icon,
  RulerSquareIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { Callout, Flex, Grid, IconButton, Link, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import h1 from "../assets/h1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getAllHouses from "../../services/houses.api";
import { NavLink } from "react-router-dom";
import { BASEURL, fetchApi } from "../../services/fetch.api";
// import { faCoffee, heart } from '@fortawesome/free-solid-svg-icons'

function Property() {
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  async function getData() {
    try {
      setLoading(true);
      const data = await fetchApi();
     
      console.log(data);
      setHouses(data);
      setLoading(false);

      
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
        setLoading(false);
    }
  }
 
  console.log(houses);
  useEffect(() => {
    getData();
    // getMainData()
    // getOtherData();

  }, []);

  if (loading) {
    return (
      <StarIcon
        width="18"
        height="18"
        style={{
          margin: "50px auto",
          animation: "spin 2s linear infinite"
        }}
      />
    );
  }
  if (error) {
    return (
      <Callout.Root
        color="red"
        variant="surface"
        style={{ width: "50vw", alignSelf: "center", marginTop: "50px" }}
      >
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          Failed to fetch the information required for this page
        </Callout.Text>
      </Callout.Root>
    );
  }

  return (
    <Grid className="property">
      <Flex
        className="banner"
        direction="column"
        align="start"
        justify="start"
        gap="4"
      >
        <Text size="8" weight="bold">
          Homes for you
        </Text>
        <Text size="4">
          Top Priority <ChevronDownIcon></ChevronDownIcon>
        </Text>
      </Flex>
      <Flex className="house-cards" direction="column" align="start" gap="6">
        <Text size="8" weight="medium">
          Best Options
        </Text>
        {houses.map((house) => {
          return (
            <div className="card-item" key={house.id}>
              <div className="card-img">
                <img src={house.image} alt="" />
              </div>
              <Flex
                className="details"
                direction="column"
                align="start"
                gap="4"
              >
                <Text
                  className="title"
                  size="3"
                  weight="medium"
                  align="left"
                  style={{ color: "#DF3478" }}
                >
                  {house.area}
                </Text>
                <Text className="address" size="1" weight="">
                  {house.address}
                </Text>
                <Flex className="card-badges" gap="2" wrap="wrap">
                  <Flex className="badge" align="center" gap="2">
                    <EyeClosedIcon />
                    <Text className="badge-detail" weight="bold" size="1">
                      {house.bedrooms}
                    </Text>
                  </Flex>
               
                  <Flex className="badge" align="center" gap="2">
                    <RulerSquareIcon />
                    <Text className="badge-detail" weight="bold" size="1">
                      {house.square_feet}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex className="price-details" direction="column">
                <Text
                  className="price"
                  size="5"
                  weight="bold"
                  style={{ color: "#DF3478" }}
                >
                  ${house.price}
                </Text>
                <div className="icon heart">
                  <HeartFilledIcon />
                </div>
              </Flex>
            </div>
          );
        })}
      </Flex>
    </Grid>
  );
}

export default Property;
