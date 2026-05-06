import React from "react";

export default function SectionHeading({ kicker, title, copy, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {copy ? <p className={`section-copy mt-4 ${align === "center" ? "mx-auto" : ""}`}>{copy}</p> : null}
    </div>
  );
}
