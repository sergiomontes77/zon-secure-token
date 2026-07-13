import Image from "next/image";
import statusbarSignal from "@/assets/icons/statusbar-signal.svg";
import statusbarWifi from "@/assets/icons/statusbar-wifi.svg";
import statusbarBattery from "@/assets/icons/statusbar-battery.svg";

export function StatusBar() {
  return (
    <div className="flex w-full shrink-0 items-center justify-between px-6 pt-[21px] pb-[19px]">
      <span className="font-body-zon text-[17px] leading-[22px] text-black">9:41</span>
      <div className="flex items-center gap-[7px]">
        <Image src={statusbarSignal} alt="" className="h-3 w-[19px]" />
        <Image src={statusbarWifi} alt="" className="h-3 w-[17px]" />
        <Image src={statusbarBattery} alt="" className="h-[13px] w-[27px]" />
      </div>
    </div>
  );
}
