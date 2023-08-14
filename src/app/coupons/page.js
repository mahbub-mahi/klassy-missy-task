import Coupon from "@/components/Coupon/Coupon";
export default function Home() {
  return (
    <div class="w-5/6 sm:w-4/5 m-auto mt-10">
      <div class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
      </div>
    </div>
  );
}
