import { FeedbackType } from "../../../interfaces/Feedback";

export type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
};

export type FeedbackContentStepProps = {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
};

export type FeedbackSuccessStepProps = {
  onFeedbackRestartRequested: () => void;
};
