import Link from "next/link";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Container className="px-4">
      <div className="h-full flex flex-col justify-center items-center">
        <p>
          بزودی در این مکان، لندینگ پیج <strong>طلا زود</strong> پیاده سازی
          خواهد شد ...
        </p>

        <Link href="/accounts/login" className="w-full mt-8">
          <Button className="w-full">ثبت‌نام / ورود</Button>
        </Link>
      </div>
    </Container>
  );
}
