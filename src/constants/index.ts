import bugImageSrc from "../assets/bug.svg";
import ideaImageSrc from "../assets/idea.svg";
import thoughtImageSrc from "../assets/thought.svg";
import { FeedbackTypes } from "../interfaces/Feedback";

export const feedbackTypes: FeedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImageSrc,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImageSrc,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      src: thoughtImageSrc,
      alt: "Imagem de um balão de pensamento",
    },
  },
};
