import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Calembed() {
  return (
    <div className="w-[90%] mx-auto py-[60px]">
      <Cal
        calLink="lasseosmann/45-minutters-uforpligtende-snak-om-dit-projekt"
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll",
          zIndex: "1",
        }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
