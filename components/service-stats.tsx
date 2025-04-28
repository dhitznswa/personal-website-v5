import React from "react";
import { Card, CardContent } from "./ui/card";
import { NumberTicker } from "./magicui/number-ticker";

export default function ServiceStats() {
  return (
    <div className="w-full grid grid-cols-6 gap-3">
      <div className="col-span-3 md:col-span-2">
        <Card>
          <CardContent>
            <h3 className="text-xl font-bold text-center text-hli">
              <NumberTicker value={20} className="text-hli" />+
            </h3>
            <p className="text-xs text-center mt-3">Happy Clients</p>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-3 md:col-span-2">
        <Card>
          <CardContent>
            <h3 className="text-xl font-bold text-center text-hli">
              <NumberTicker value={65} className="text-hli" />+
            </h3>
            <p className="text-xs text-center mt-3">Finished Projects</p>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-6 md:col-span-2">
        <Card>
          <CardContent>
            <h3 className="text-xl font-bold text-center text-hli">
              <NumberTicker value={10} className="text-hli" />+
            </h3>
            <p className="text-xs text-center mt-3">My Services</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
