import { StarPicker } from "../atoms/StarPicker";
import { BadgeSet } from "../molecules/BadgeSet";
import { Button } from "../atoms/Button";

const ReviewPostTemplate = () => {
  return (
    <div className="relative grid gap-6">
      <h1 className="text-2xl font-bold">예약한 세차장이 어땠나요?</h1>
      <StarPicker />
      <BadgeSet />
      <textarea
        className="items-center h-40 p-4 rounded-lg resize-none bg-slate-100"
        placeholder="후기를 입력해주세요."
      />
      <Button label="후기등록" className="fixed bottom-0" />
    </div>
  );
};

export default ReviewPostTemplate;
