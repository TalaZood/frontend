import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { CoinsIcon, GemIcon } from "lucide-react";

export default function Home() {
  const totalBalance = 27;
  return (
    <Container className="px-4">
      <div className="text-center pt-20">
        {totalBalance ? (
          <>
            <span className="text-gray-950 text-5xl font-bold">
              {totalBalance}
            </span>
            <span className="text-gray-500 ms-2">تومان</span>
          </>
        ) : (
          <span className="text-gray-950 text-4xl font-bold">هیچی :(</span>
        )}
      </div>

      <div className="flex gap-x-4 mt-20">
        <Button className="flex-1">خرید</Button>
        <Button variant="outline" className="flex-1">
          فروش
        </Button>
      </div>

      <div>
        <h3 className="text-base text-gray-950 mt-20">دارایی</h3>

        <div className="mt-4">
          <div className="flex items-center py-4">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-300 rounded-full">
              <CoinsIcon />
            </div>

            <div className="flex flex-col mr-2">
              <span className="text-lg text-gray-950 font-bold">طلا</span>
              <span className="text-sm text-gray-500">5,350 تومان</span>
            </div>

            <div className="flex flex-col ms-auto">
              <span className="text-xl text-gray-950 font-bold">0 میلیگرم</span>
              <span className="text-sm text-gray-500">0 تومان</span>
            </div>
          </div>

          <div className="flex items-center py-4">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-300 rounded-full">
              <GemIcon />
            </div>

            <div className="flex flex-col mr-2">
              <span className="text-lg text-gray-950 font-bold">کیف پول</span>
              <span className="text-sm text-gray-500">موجودی ریالی شما</span>
            </div>

            <div className="flex flex-col ms-auto">
              <span className="text-xl text-gray-950 font-bold">
                500,000 تومان
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
