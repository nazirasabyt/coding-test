const GET_FLIGHTS_BEGIN = "GET_FLIGHTS_BEGIN";
const ADD_FLIGHT_DATA = "ADD_FLIGHT_DATA";

const flightReducer = (state, action) => {
  switch (action.type) {
    case ADD_FLIGHT_DATA:
      return { ...state };
    case GET_FLIGHTS_BEGIN:
      return {
        ...state,
        flights_loading: true,
        flights_error: false,
        flights: [],
      };
    default:
      return state;
    // throw new Error
  }
};
export default flightReducer;
