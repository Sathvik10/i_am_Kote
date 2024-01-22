
  import React from "react"
  import '../styling/Carousel.scss'
  
  // =========================
  // Slide
  // =========================

  const ProjectSlide = ({title, description, code, link})=>{
    return(
      <div className="card min-h-full bg-neutral-100">
        <div className="card-header">
          <h2 className="text-xl font-bold uppercase text-neutral-800">
            {title}
          </h2>
        </div>
        <div className="card-body overflow-scroll ">
          <p className="overflow-scroll text-justify">
            {description}
          </p>
        </div>
        <div className="card-footer">
          {/* <article className="">
              <a href={code}>
              <button className="btn" >Code</button>
              </a>
            </article> */}
            {
              (code !== "") ?
              (<a
                className="-m-2 bg-[#1D1F2F] justify-center flex rounded-md p-2 text-neutral-300 focus:ring-2 "
                href={code}>
                <button className="ml-3 text-sm sm:text-base">Code</button>
              </a>): ("")
            }
            {
              (link !== "") ? 
              (<a
                className="-m-2 bg-[#1D1F2F] justify-center flex rounded-md p-2 text-neutral-300 focus:ring-2 "
                href={link}target="_blank">
                <button className="ml-3 text-sm sm:text-base "  disable={link === ""?false:true}  >Link</button>
              </a>) : (<a></a>)
            }
        </div>
      </div>
    );

  }
  
  class Slide extends React.Component {
    constructor(props) {
      super(props)
  
      this.handleMouseMove = this.handleMouseMove.bind(this)
      this.handleMouseLeave = this.handleMouseLeave.bind(this)
      this.handleSlideClick = this.handleSlideClick.bind(this)
      this.imageLoaded = this.imageLoaded.bind(this)
      this.slide = React.createRef()
    }
    
    handleMouseMove(event) {
      const el = this.slide.current
      const r = el.getBoundingClientRect()
  
      el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
      el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
    }
    
    handleMouseLeave(event) {    
      this.slide.current.style.setProperty('--x', 0)
      this.slide.current.style.setProperty('--y', 0)
    }
    
    handleSlideClick(event) {
      this.props.handleSlideClick(this.props.index)
    }
    
    imageLoaded(event) {
      event.target.style.opacity = 1
    }
    
    render() {
      const index = this.props.index

      const { name, description, code, link} = this.props.project
      const current = this.props.current
      let classNames = 'slide'
      
      if (current === index) classNames += ' slide--current'
      else if (current - 1 === index) classNames += ' slide--previous'
      else if (current + 1 === index) classNames += ' slide--next'
          
      return (
        <li 
          ref={this.slide}
          className={classNames} 
          onClick={this.handleSlideClick}
          // onMouseMove={this.handleMouseMove}
          // onMouseLeave={this.handleMouseLeave}
        >
          <div className="slide__image-wrapper min-h-full">
            {/* <img 
              className="slide__image"
              alt={headline}
              src={src}
              onLoad={this.imageLoaded}
            /> */}
            <ProjectSlide title={name} description={description} code={code} link={link}/>

          </div>
        </li>
      )
    }
  }
  
  
  // =========================
  // Slider control
  // =========================
  
  const SliderControl = ({ type, title, handleClick, disable }) => {
    return (
      <button className={`btn btn--${type}`} title={title} onClick={handleClick} disabled={disable}>
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </button>
    )
  }
  
  
  // =========================
  // Slider
  // =========================
  
  class Slider extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = { current: 0 }
      this.handlePreviousClick = this.handlePreviousClick.bind(this)
      this.handleNextClick = this.handleNextClick.bind(this)
      this.handleSlideClick = this.handleSlideClick.bind(this)
    }
    
    handlePreviousClick() {
      const previous = this.state.current - 1
          
      this.setState({ 
        current: (previous < 0) 
          ? this.props.slides.length - 1
          : previous
      })
    }
    
    handleNextClick() {
      const next = this.state.current + 1;
      
      this.setState({ 
        current: (next === this.props.slides.length) 
          ? 0
          : next
      })
    }

    shouldDisableRight(){
      const next = this.state.current;
      return next  === this.props.slides.length - 1
    }

    shouldDisableLeft(){
      const next = this.state.current;
      return next  === 0
    }
    
    handleSlideClick(index) {
      if (this.state.current !== index) {
        this.setState({
          current: index
        })
      }
    }
  
    render() {
      const { current} = this.state
      const { slides, heading } = this.props 
      const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
      const wrapperTransform = {
        'transform': `translateX(-${current * (100 / slides.length)}%)`
      }

      return (
        <div className='slider' aria-labelledby={headingId}>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} className="visuallyhidden">{heading}</h3>
            
            {
              slides.map((slide, index) => {
                  return (
                    <Slide
                      key={index}
                      index={index}
                      project={slide}
                      current={current}
                      handleSlideClick={this.handleSlideClick}
                    />
                  )
                }
              )
            }
          </ul>
          
          <div className="slider__controls">
            <SliderControl 
              type="previous"
              title="Go to previous slide"
              handleClick={this.handlePreviousClick}
              disable={this.shouldDisableLeft()}
            />
            
            <SliderControl 
              type="next"
              title="Go to next slide"
              handleClick={this.handleNextClick}
              disable={this.shouldDisableRight()}
            />
          </div>
        </div>
      )
    }
  }
  
  export default Slider;