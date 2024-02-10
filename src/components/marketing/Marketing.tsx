import { Marketing } from "@/types/marketing.types";
import { GetMarketingList } from "@/utils/api/marketing/getMarketing";
import { PhoneCall } from "lucide-react";

import React from "react";

async function MarketingSpot() {
  const marketingList: Marketing[] = await GetMarketingList();

  return (
    <div className="px-5 py-4">
      {marketingList.map((marketing) => (
        <div className="flex justify-between mt-6">
          <div className="flex gap-x-2">
            <PhoneCall />
            <h1>{marketing.name}</h1>
          </div>
          <h3>{marketing.phone}</h3>
        </div>
      ))}
    </div>
  );
}

export default MarketingSpot;
