import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../wallet";
import { getLocalStorage } from "../../utils/helpers";

const PaymentInfo = ({ data }) => {
  const flight = getLocalStorage();

  const [minting, setMinting] = useState(false);
  const { active, account, library, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  async function mint() {
    setMinting(true);
    const myAccount = "0x391EC0c94451e924C76a2B1ffc08268823f094e5"; //Account to receive payment
    const price = "0.01";

    let obj = {
      to: myAccount,
      from: account,
      value: 2000,
    };

    await library.eth.sendTransaction(obj, async (e, tx) => {
      if (e) {
        alert(`Something went wrong! Try switching accounts - ${e}`);
        console.log("ERROR->", e);
        setMinting(false);
      } else {
        setMinting(false);
      }
    });
  }

  return (
    <div>
      <p className="mt-8 ml-8 text-gray-400 text-sm">Passengers Details</p>
      <div className=" ml-8 mt-6">
        <div>
          <h1 className="text-2xl flex font-semibold text-gray-800">
            {flight && flight.from}{" "}
            <span>
              <HiOutlineArrowNarrowRight className="m-2" />
            </span>
            {flight && flight.to}
          </h1>

          {active ? (
            <button
              type="button"
              disabled={minting}
              onClick={mint}
              className="main-mint-btn"
            >
              {minting ? "Waiting confirmation." : "Pay Now"}
            </button>
          ) : (
            <button type="button" onClick={connect} className="main-mint-btn">
              Check and pay
            </button>
          )}

          <div className="flex flex-col justify-center rounded-2xl border-solid border border-gray-300 mt-6">
            <h1 className="mt-6 ml-8">{`Flight to ${flight && flight.to}`}</h1>
            <p className="ml-8">{`Mon ${flight && flight.departure} - Mon ${
              flight && flight.return
            } `}</p>
            <p className="ml-8">1 stop - 5h - 0m</p>
            <p className="ml-8 mb-8 text-blue-500">See flight details</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-2xl border border-gray-300 ml-8 mt-6">
        <h1 className="ml-8 mt-6 font-semibold">Contact details</h1>
        <p className="ml-8">+9712321456</p>
        <p className="ml-8">nawras@innovationfactory.biz</p>
        <p className="ml-8 mb-8 flex">
          <TiTick className="icon" /> You&apos;ll get flight updates by text
        </p>
      </div>
      <div>
        <div className="flex flex-col justify-center rounded-2xl border border-gray-300 ml-8 mt-6">
          <h1 className="ml-8 mt-6 font-semibold">travelers details</h1>
          {data.adults.map((pax) => {
            return (
              <div key={pax.id} className="ml-8 m-3">
                <p>
                  <span className="text-sm text-gray-800 pr-4">Full Name:</span>
                  {pax.firstName} {pax.lastName}
                </p>

                <p>
                  <span className="text-sm text-gray-800 pr-4">
                    Passport No:
                  </span>
                  {pax.passportNum}
                </p>
                <p>
                  <span className="text-sm text-gray-800 pr-4">
                    Passport Expiry:
                  </span>
                  {pax.passportExpiryDate}
                </p>
                <div className="border-b border-gray mt-2 last:border-none"></div>
              </div>
            );
          })}
          {data.children.map((pax) => {
            return (
              <div key={pax.id} className="ml-8 m-3">
                <p>
                  <span className="text-sm text-gray-800 pr-4">Full Name:</span>
                  {pax.firstName} {pax.lastName}
                </p>

                <p>
                  <span className="text-sm text-gray-800 pr-4">
                    Passport No:
                  </span>
                  {pax.passportNum}
                </p>
                <p>
                  <span className="text-sm text-gray-800 pr-4">
                    Passport Expiry:
                  </span>
                  {pax.passportExpiryDate}
                </p>
                <div className="border-b border-gray mt-2 last:border-none"></div>
              </div>
            );
          })}
          {data.infants.map((pax) => {
            return (
              <div key={pax.id} className="ml-8 m-3">
                <p>
                  <span className="text-sm text-gray-800 pr-4">Full Name:</span>
                  {pax.firstName} {pax.lastName}
                </p>

                <p>
                  <span className="text-sm text-gray-800 pr-4">
                    Passport No:
                  </span>
                  {pax.passportNum}
                </p>
                <p>
                  <span className="text-sm text-gray-800 pr-4">
                    Passport Expiry:
                  </span>
                  {pax.passportExpiryDate}
                </p>

                <div className="border-b border-gray mt-2 last:border-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
