import PaymentInfo from "../../../components/Payments/PaymentInfo";
import { getLocalStoragePax } from "../../../utils/helpers";

const PaymentPage = () => {
  const data = getLocalStoragePax();


  return (
    <div className='flex flex-col justify-center  m-16'>
      <PaymentInfo data={data} />
    </div>
  );
};

export default PaymentPage;
