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
    username: "andika.store",
    text: "Website toko online saya jadi jauh lebih cepat dan profesional setelah dibantu. Fitur-fitur yang saya minta semua berfungsi dengan baik. Kerjanya cepat dan komunikatif!",
  },
  {
    name: "Sarah Meilani",
    username: "sarahlens",
    text: "Dia bikin portfolio website saya kelihatan modern dan clean banget. Cocok buat presentasi ke klien. Recommended banget buat kamu yang butuh web developer andal!",
  },
  {
    name: "Bayu Wicaksono",
    username: "@bayu.tech",
    text: "Landing page campaign saya dikerjakan super cepat dan hasilnya keren banget. Gak nyangka bisa sebagus ini dalam waktu singkat.",
  },
  {
    name: "Nathania Grace",
    username: "natdigital",
    text: "Kerja sama bikin website company profile berjalan mulus. Selalu kasih update dan revisi pun dilayani dengan sabar. Profesional banget pokoknya.",
  },
  {
    name: "Fajar Nugroho",
    username: "fajarmusik",
    text: "Aku order website buat promosi jasa musikku. Tampilan dan UX-nya cakep banget! Bisa custom sesuai gaya yang aku mau. Mantap!",
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
