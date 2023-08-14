"use client";
import checkWindowSize from "@/utils/checkWindowSize";
import styles from "./Coupon.module.css";
import { useEffect } from "react";

const Coupon = () => {
  const isMobile = checkWindowSize();

  useEffect(() => {}, [isMobile]);

  return (
    <div class="">
      <div className={`${styles["container"]}`}>
        <div class="flex h-full">
          <div class={`${styles["details"]} w-full lg:w-5/6 `}>
            <div class="uppercase mb-2 ">All Night Wings 8 Pads</div>
            <div class="text-xs mb-1 line-clamp-2">
              10tk Joya Anti-Bacterial Sanitary Napkin All Night Wings 8 Pads
              Pack
            </div>
            <div class="text-sm font-semibold">Code: JNW08</div>
            <div className={`${styles["details-btn"]} btn`}>See Details</div>
          </div>
          {!isMobile && (
            <div class="text-center border-dashed border-l-2 w-2/5 pl-3 pr-6 pt-5 font-light text-white">
              <div class="text-sm">Spend: 200TK</div>
              <h3 class="text-2xl mt-2">30TK</h3>
              <span class="text-sm">Max Discount</span>
              <div class="text-xs opacity-80">Valid Until 06 Mar 2023</div>
            </div>
          )}
        </div>
        <div
          className={`${styles[`circle`]} ${styles[`left-circle`]} px-3 h-100`}
        ></div>
        <div
          className={`${styles[`circle`]} ${styles[`right-circle`]} px-3 h-100`}
        ></div>
      </div>
    </div>
  );
};

export default Coupon;
