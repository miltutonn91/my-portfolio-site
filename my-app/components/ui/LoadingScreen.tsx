"use client";

import { useEffect, useState } from "react";

const firstLine = "MISA UMEDA";
const secondLine = "PORTFOLIO";

type LoadingScreenProps = {
  onFinish: () => void;
};

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const hasShownLoading = sessionStorage.getItem("hasShownLoading");

    // すでに表示済みなら、ローディングを出さずにすぐ完了扱いにする
    if (hasShownLoading) {
      onFinish();
      return;
    }

    // 初回だけ表示する
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
    sessionStorage.setItem("hasShownLoading", "true");

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
      onFinish();
    }, 2600);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 3300);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className={`opening-loader ${isLeaving ? "is-leaving" : ""}`}>
      <div className="opening-loader__inner">
        <p className="opening-loader__text">
          {Array.from(firstLine).map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="opening-loader__char"
              style={{
                animationDelay: `${300 + index * 70}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>

        <p className="opening-loader__text opening-loader__text--second">
          {Array.from(secondLine).map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="opening-loader__char"
              style={{
                animationDelay: `${1350 + index * 70}ms`,
              }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
