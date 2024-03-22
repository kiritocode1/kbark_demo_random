import { FC } from 'react'
import { HeadingFont ,MeadumFont } from '@/utils/font_Import'
interface HeroDeclarationProps {
className : string
}

const HeroDeclaration: FC<HeroDeclarationProps> = ({className}) => {
    return (
      <div className={className}>
        <h2 className='text-xl' style={MeadumFont.style}>Professional Valorant player</h2>
        <h1
          className="text-center text-4xl font-bold"
          style={HeadingFont.style}
        >
          PARADOX
        </h1>
      </div>
    );
}

export default HeroDeclaration