import { feedbackTypes } from "../constants";

export type FeedbackTypes = {
  [key: string]: {
    title: string;
    image: {
      src: string;
      alt: string;
    };
  };
};

export type FeedbackType = keyof typeof feedbackTypes;
