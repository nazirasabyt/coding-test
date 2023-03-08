import { useState, useEffect } from "react";
import FormDetails from "../../components/Details/Form";
import { addOrUpdateItem, getLocalStorage } from "../../utils/helpers";
import { useRouter } from "next/router";

const PassengerDetails = () => {
  const data = getLocalStorage();

  const [adults, setAdults] = useState([]);
  const [children, setChildren] = useState([]);
  const [infants, setInfants] = useState([]);
  const [formData, setFormData] = useState({
    adults: [],
    children: [],
    infants: [],
  });

  const router = useRouter();

  useEffect(() => {
    data.pax.map((el) => {
      if (el.adults > 0) {
        setAdults(el.adults);
      }
      if (el.children > 0) {
        setChildren(el.children);
      }
      if (el.infants > 0) {
        setInfants(el.infants);
      }
    });
  }, []);

  const handleInfantForm = (newData) => {
    setFormData({
      ...formData,
      infants: addOrUpdateItem(formData.infants, newData),
    });
  };
  const handleChildrenForm = (newData) => {
    setFormData({
      ...formData,
      children: addOrUpdateItem(formData.children, newData),
    });
  };
  const handleAdultForm = (newData) => {
    setFormData({
      ...formData,
      adults: addOrUpdateItem(formData.adults, newData),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("passengersData", JSON.stringify(formData));

    router.push("./details/payments");
  };

  return (
    <div className='flex flex-col '>
      <div className='flex justify-end'>
        {" "}
        <button
          type='button'
          onClick={handleSubmit}
          className='m-8 flex  justify-end '>
          Next
        </button>
      </div>
      <div className=''>
        {adults > 0 &&
          Array(adults).fill(
            <FormDetails passenger='Adult' id='adult' add={handleAdultForm} />
          )}
      </div>
      <div className=''>
        {children > 0 &&
          Array(children).fill(
            <FormDetails
              passenger='Children'
              id='children'
              add={handleChildrenForm}
            />
          )}
      </div>
      <div className=''>
        {infants > 0 &&
          Array(infants).fill(
            <FormDetails
              passenger='Infant'
              id='infant'
              add={handleInfantForm}
            />
          )}
      </div>
    </div>
  );
};

export default PassengerDetails;
