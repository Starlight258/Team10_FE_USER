import React, { useState, useEffect } from "react";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { StarPicker } from "../atoms/StarPicker";
import { BadgeSet } from "../molecules/BadgeSet";
import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button";
import { getReviews, postReviews } from "../../apis/carwashes";

const ReviewPostTemplate = () => {
  const [keywords, setKeywords] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  // 임의의 carwashId와 reservationId 설정
  const carwashId = 1; // 실제 로직에 맞게 수정해야 합니다.
  const reservationId = 1; // 실제 로직에 맞게 수정해야 합니다.

  const { data } = useSuspenseQuery({
    queryKey: ["getCarwashesInfo"],
    queryFn: () => getReviews(),
  });

  useEffect(() => {
    if (data) {
      setKeywords(data?.data?.response?.reviewKeyword);
    }
  }, [data]);

  const mutation = useMutation({
    mutationFn: (data) => {
      return postReviews(data);
    },
    onSuccess: () => {
      console.log("success");
      navigate("/");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = () => {
    const payload = {
      carwashId,
      reservationId,
      keywordIdList: selectedKeywords,
      rate,
      comment,
    };
    mutation.mutate(payload);
  };

  return (
    <div className="relative grid gap-6">
      <h1 className="text-2xl font-bold">예약한 세차장이 어땠나요?</h1>
      <StarPicker onRate={setRate} />
      <BadgeSet keywords={keywords} onSelectKeyword={setSelectedKeywords} />
      <textarea
        className="items-center h-40 p-4 rounded-lg resize-none bg-slate-100"
        placeholder="후기를 입력해주세요."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        label="후기등록"
        onClick={handleSubmit}
        type="reviewpost"
        className="fixed bottom-0"
      />
    </div>
  );
};

export default ReviewPostTemplate;
