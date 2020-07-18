import React from "react"
import ScrollAnimation from 'react-animate-on-scroll'
import content from "../../content/features.yaml"

export default () => (

  <section id='features'>
    {content.map((value, index) => {

      let pos, imagepos
      if (index%2 === 0){
        pos = "right"
        imagepos = "left"
      }else{
        pos = "left"
        imagepos = "right"
      }

      let media
      if (value.image){
        media = ( <img src={ value.image } alt="" /> )
      } else if (value.youtube) {
        media = (
            <div className="fluid-video-wrapper">
              <iframe 
              title="video" width="560" height="315" 
              src={"https://www.youtube-nocookie.com/embed/" + value.youtube } frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>            
            </div>
        )
      }

      return(
        <div className={ 'row feature ' + value.name }>
          <div className={ 'six columns ' + pos }>
            <h3>{ value.title }</h3>
            <p>{ value.body }</p>
          </div>

          <ScrollAnimation
            animateIn="pulse"
            animateOnce={true}
            initiallyVisible={true}
            className={ 'six columns feature-media ' + imagepos }
            >
            { media }
          </ScrollAnimation>
       </div>
     )
   })}
  </section>
)
