"use client";

import { Platform } from "@/lib/types";
import { trackEvent } from "@/lib/mixpanel";

export default function OriginalUrlLink({
  url,
  platform,
  jobId,
}: {
  url: string;
  platform: Platform;
  jobId: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("Button Click", {
          button: "원본 공고 보기",
          platform,
          jobId,
        })
      }
      className="btn btn-primary shrink-0"
    >
      {platform}에서 원본 보기
      <span aria-hidden="true">↗</span>
    </a>
  );
}
