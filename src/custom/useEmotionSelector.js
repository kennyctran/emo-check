import { useState } from "react";

export default function useEmotionSelector(init) {
  const [emotionRating, setEmotionRating] = useState(init);

  const setEmotions = {
    setHappiest() {
      setEmotionRating(10);
    },
    setBeaming() {
      setEmotionRating(8);
    },
    setSlightlyHappier() {
      setEmotionRating(7);
    },
    setSmiling() {
      setEmotionRating(6);
    },
    setNeutral() {
      setEmotionRating(5);
    },
    setUnamused() {
      setEmotionRating(4);
    },
    setAnxious() {
      setEmotionRating(3);
    },
    setSad() {
      setEmotionRating(2);
    },
    setCrying() {
      setEmotionRating(0);
    },
  };
  return [emotionRating, setEmotions];
}
