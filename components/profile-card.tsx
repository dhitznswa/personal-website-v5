import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function ProfileCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full md:w-2/6 bg-linear-to-r from-hli via-slate-400 to-hli rounded-tl-xl rounded-br-xl overflow-hidden">
            <Image
              src="/pas-foto.png"
              alt="Foto"
              width={1000}
              height={1000}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="w-full md:w-4/6">
            <span className="text-sm font-semibold text-muted-foreground/70">
              WEB DEVELOPER
            </span>
            <h1 className="font-medium text-3xl">Adhitya Nasuwa.</h1>
            <p className="text-sm text-foreground/70 mt-3">
              Im Freelancer & Web Developer based in Indonesia
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
