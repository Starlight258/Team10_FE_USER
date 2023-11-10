import React from "react";
import UserStar from "../atoms/UserStar";
import DistanceFromHere from "../atoms/DistanceFromHere";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCarwashId } from "../../store/action";

export const CarwashCard = ({ id, image, name, address, rate, distance }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCarwashId(id));
    navigate(`/carwashdetail/${id}`);
  };

  const imageUrl = image ? image.url : "/CarwashDetail/CarwashImgNotFound.png";

  return (
    <div
      className="relative overflow-hidden shadow-xl h-72 rounded-xl"
      onClick={handleClick}>
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={name}
          className="absolute object-cover -translate-y-1/2 top-1/2"
        />
      </div>
      <div className="absolute bottom-0 z-10 w-full h-24 p-4 bg-white">
        <div className="relative">
          <UserStar averageStar={rate} />
          <div>{name}</div>
          <div className="text-sm text-gray-500">{address}</div>
          <DistanceFromHere
            distance={distance.toFixed(1)}
            className="absolute right-0 -translate-y-1/2 top-1/2"
          />
        </div>
      </div>
    </div>
  );
};
