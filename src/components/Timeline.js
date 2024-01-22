import '../styling/ResumeSection.css'

const Timeline = ({ item}) => {

    return(
        <div className="container timeline-container ">
            <div className="pb-4">
                <div className="">
                    <span>
                    <h2 className="text-xl font-bold">
                        <span>{item.Name}</span>
                    </h2>

                    { (item.SubName != null && item.SubName !== "") ? (
                        <h6>
                        <span className="flex-1 text-sm font-medium font-bold sm:flex-none">{item.SubName}</span>
                        <span>, </span>
                        <span className="flex-1 text-sm font-medium font-bold sm:flex-none">{item.Position}</span>
                        </h6>
                    )
                        :
                        <span className="flex-1 text-sm font-medium font-bold sm:flex-none">{item.Position}</span>
                        }
                        {

                        }
                    </span>
                    <div>
                        
                    </div>
                    <div className="flex items-center justify-center gap-x-2 md:justify-start">
                        <span className="flex-1 text-sm font-medium font-italic sm:flex-none">{`${item.City}, ${item.Country}`}</span>
                        <span> • </span>
                        <span className="flex-1 text-sm sm:flex-none font-italic">{`${item['start-date']} - ${item['end-date']}`}</span>
                    </div>
                </div>
                <p className="text-justify"style={{whiteSpace:'pre-line'}}>
                {item.description}
                </p>
            </div>
        </div>
    )
};

export default Timeline;