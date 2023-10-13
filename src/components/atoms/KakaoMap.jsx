import { useEffect } from "react";
import { CarwashPin } from "./CarwashPin";

const { kakao } = window;

const markerdata = [
  {
    content:
      '<img className="w-4 h-4" src="https://i.namu.wiki/i/tqNflgUosZW0OSqwPfuF0SXeV4CD2yO3t2ZLCnRyZr2xYs1iv-AEEPgxYRp0g_QPi0mUe9KdK_xIgYO5y3Kyrhn6kCP6PSnMgSz-5SZNYRWnp4gPmbO9rWnykZdB6kHeLb0zuHaYDpDZKsFliG4XuQ.webp" />',
    title: "콜드스퀘어",
    lat: 37.62197524055062,
    lng: 127.16017523675508,
  },
  {
    content:
      '<img className="w-4 h-4" src="https://i.namu.wiki/i/tqNflgUosZW0OSqwPfuF0SXeV4CD2yO3t2ZLCnRyZr2xYs1iv-AEEPgxYRp0g_QPi0mUe9KdK_xIgYO5y3Kyrhn6kCP6PSnMgSz-5SZNYRWnp4gPmbO9rWnykZdB6kHeLb0zuHaYDpDZKsFliG4XuQ.webp" />',
    title: "하남돼지집",
    lat: 37.620842424005616,
    lng: 127.1583774403176,
  },
];

const KakaoMap = ({ className }) => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.6205, 127.158),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const imageSrc = "";
    markerdata.forEach((el) => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
        title: el.title,
      });

      new kakao.maps.CustomOverlay({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
        content: el.content,
        yAnchor: 1,
      });
    });
  }, []);

  return <div id="map" className={`${className}`}></div>;
};

export default KakaoMap;
