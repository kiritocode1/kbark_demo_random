import Image
    from "next/image";



import bg_purple_image_cut from "@/components/backgroundimage.png";


import { FC } from 'react'

interface backgroundProps {

}

export const Background: FC<backgroundProps> = ({}) => {
    return (
      <main className="bg-[#D9D9D9] h-[96vh] overflow-hidden">
        <Image src={bg_purple_image_cut} alt="Background purple" className="translate-x-40" />
      </main>
    );

}

