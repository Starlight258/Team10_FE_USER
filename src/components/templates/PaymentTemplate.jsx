import React from "react";
import { useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { paymentResult } from "../../apis/reservations";

const PaymentTemplate = ({}) => {
  const [paymentdata, setData] = useState(null);
  const [reservationId, setReservation] = useState(3);

  const { data } = useSuspenseQuery({
    queryKey: ["getPayment", reservationId],
    queryFn: () => paymentResult(reservationId),
    enabled: !!reservationId,
  });

  useEffect(() => {
    if (data) {
      setData(data?.data?.response);
    }
  }, [data]);

  if (!paymentdata) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="relative p-4">
        <div className="py-8 text-2xl font-bold"> 결제하기</div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <div className="flex justify-between flex-items">
            <div>예약 일정</div>
            <div>{paymentdata.reservation_time}</div>
          </div>
          <div className="text-right">{paymentdata.reservation_time}</div>
          <div className="flex justify-between py-4 font-semibold text-red-500">
            <div>최종 결제 금액</div>
            <div>{paymentdata.total_price}원</div>
          </div>
        </div>
        <div className="py-8 text-2xl font-bold"> 결제 수단 </div>
        <div className="flex flex-col gap-4">
          <button className="w-full py-4 text-lg font-bold bg-yellow-300 rounded-lg">
            카카오페이
          </button>
          <button className="w-full py-4 text-lg font-bold bg-green-400 rounded-lg">
            네이버페이
          </button>
        </div>
      </div>
      <button className="fixed bottom-0 w-full py-4 font-semibold text-white bg-primary">
        {paymentdata.total_price}원 결제하기
      </button>
    </div>
  );
};

export default PaymentTemplate;
