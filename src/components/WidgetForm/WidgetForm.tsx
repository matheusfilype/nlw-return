import { useState } from "react";

import { FeedbackType } from "../../interfaces/Feedback";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<null | FeedbackType>(null);

  function handleRestartFeed() {
    setFeedbackType(null);
  }

  return (
    <div
      className="
    bg-zinc-900 
    p-4 relative 
    rounded-2xl 
    mb-4 
    flex 
    flex-col 
    items-center 
    shadow-lg
    w-[calc(100vw-2rem)]
    md:w-auto
    "
    >
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeed}
        />
      )}

      <footer className="text-xs text-neutral-600">
        Feito por Matheus Filype | NLW Return
      </footer>
    </div>
  );
}
