import { FC } from 'react'
import Image from "next/image";
import slas from "@/assets/blackslash.png";

import { MeadumFont } from '@/utils/font_Import';

interface NameCardProps {
  Name:string,
    className : string,
    Surname : string
}



const NameCard: FC<NameCardProps> = ({Name , className , Surname}) => {
    return (
      <main className={className}>
        <div className={"relative flex items-center justify-center"}>
          <Image src={slas} alt="Background purple" width={450} />
          <div
            className="absolute z-10 flex gap-6 p-2 text-6xl"
            style={MeadumFont.style}
          >
            <p>{Name}</p>
            <p className="text-[#280099]">{Surname}</p>
          </div>
        </div>
      </main>
    );
}

export default NameCard