import {memo} from 'react';

import { portfolioItems } from "../data/data";
const Collections = () => {
    return (
        <section id='collections'>
          <div className='p-10'>
            <div className="flex flex-col gap-y-8">
                <h2 className="self-center text-xl font-bold text-black">Check out some of my work</h2>
                <div className="px-20 w-full columns-2 md:columns-3 lg:columns-4">
                {portfolioItems.map((item, index) => {
                    const {title, image} = item;
                    return (
                    <div className="pb-6" key={`${title}-${index}`}>
                        <div className="relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
                          <img alt={title} className="h-full w-full" placeholder="blur" src={image} />
                          <ItemOverlay item={item} />
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
          </div>
        </section>
    )
}

const ItemOverlay = memo(({item: {url, title, description}}) => {
    return (
      <a className="absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300 opacity-0 hover:opacity-80"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
            <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
          </div>
        </div>
      </a>
    );
  });

export default Collections;