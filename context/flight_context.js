import React, { useState, useReducer } from "react";
import { useRouter } from "next/router";
import reducer from "../reducers/flight_reducer";

const initialContext = {
  fetchFlights: () => {},
};

const FlightContext = React.createContext(initialContext);

export const FlightContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialContext);
  const router = useRouter();
  const fetchFlights = async (url, formData) => {
    dispatch({ type: GET_FLIGHTS_BEGIN });
  };

  return (
    <FlightContext.Provider value={{ ...state, fetchFlights }}>
      {props.children}
    </FlightContext.Provider>
  );
};

export default FlightContext;
