import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";
import { Marquee } from "./magicui/marquee";
import HeadSection from "./head-section";

interface TestimonialsProps {
  name: string;
  username: string;
  image?: string;
  text: string;
}

const reviews: TestimonialsProps[] = [
  {
    name: "Andika Pratama",
    username: "and***tore",
    text: "Gila sih... website toko gue sekarang keliatan jauh lebih kece! Cepet juga ngerjainnya, semua request gue dibikinin. Mantap bener!",
  },
  {
    name: "Sarah Meilani",
    username: "sar***ens",
    text: "Sumpah websitenya sekarang keliatan clean & modern banget. Pas banget buat nunjukin kerjaan ke klien. Gak nyesel deh minta tolong!",
  },
  {
    name: "Bayu Wicaksono",
    username: "bay***ech",
    text: "Landing page-nya gokil sih. Baru beberapa hari udah kelar dan hasilnya lebih keren dari ekspektasi gue!",
  },
  {
    name: "Nathania Grace",
    username: "nat***ital",
    text: "Prosesnya smooth banget. Dia update terus progress-nya, revisi juga dilayanin sabar. Enak banget diajak kerja bareng!",
  },
  {
    name: "Fajar Nugroho",
    username: "faj***sik",
    text: "Gue bikin web buat jasa musik gue, dan hasilnya bener-bener sesuai vibe yang gue mau. UI/UX-nya cakep parah. Respect!",
  },
];

function ReviewCard(client: TestimonialsProps) {
  return (
    <>
      <Card className="w-70 h-full">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage
                src={client.image}
                alt={client.name}
                className="object-cover"
              />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{client.name}</h3>
              <p className="text-xs text-muted-foreground">
                @{client.username}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">{client.text}</p>
        </CardContent>
      </Card>
    </>
  );
}

export default function Testimonials() {
  return (
    <>
      <HeadSection
        title="Testimonials"
        highlight="Some Testimonials from Happy Client."
      />
      <div className="w-full flex items-center justify-center overflow-hidden relative mt-5">
        <Marquee className="[--duration: 20s]">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
      </div>
    </>
  );
}
