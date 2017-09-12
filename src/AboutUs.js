import * as React from 'react'
import './AboutUs.css'
import './media.css'

const About = {
  leah: ` is a New York-based 3D/VR artist who visually examines our sociological relationship with technology. As a strong advocate for gender equality and sex positivity, she stresses her individual experiences as a woman of color in a patriarchal industry through her work, experimenting with various mediums of storytelling to explore the human condition.`,
  carol: ` is a 3D/multimedia artist from Italy, where art is often seen in a classical way and where certain social structures remain rather conservative. Her work strives to overcome the boundaries of art and culture with which she was raised, with a specific focus on deconstructing the complicated relationship between women, technology, and art.`,
  isa: ` is a 2D/3D animator, compositor, and VR artist whose work delves into storytelling through the fusion of  abstract and narrative lenses. As a member of the LGBTQ community, she is passionate about breaking down the historically cis/hetero/male-dominated creative tech industries by utilizing her  foundation of inclusivity, representation, and boundary-pushing storytelling. `
}

const Names = {
  leah: 'Leah Roh',
  carol: 'Carol Civre',
  isa: 'Isa Ghaffari'
}

const PeopleEnum = {
  Leah: 'leah',
  Carol: 'carol',
  Isa: 'isa'
}

export default class AboutUs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: null
    }
  }

  onMouseEnter = ev => {
    this.setState({
      active: ev.target.dataset.type
    })
  }

  onMouseOut = ev => {
    this.setState({
      active: null
    })
  }

  preventImageDrag = ev => {
    ev.preventDefault()
    return
  }

  renderText = () => {
    switch (this.state.active) {
      case PeopleEnum.Leah:
        return About.leah
      case PeopleEnum.Isa:
        return About.isa
      case PeopleEnum.Carol:
        return About.carol
      default:
        return  
    }
  }

  render() {
    return (
      <div>
        <div className="about-us-header">about us</div>
        <div className="about-us animate-in">
          <img
            alt="headshot"
            className="headshot"
            onDragStart={this.preventImageDrag}
            src={require('./assets/images/headshot.png')} />
          <img id="isa"
            alt="isa"
            className="person"
            src={require('./assets/images/isa.png')}
            data-type="isa"
            onDragStart={this.preventImageDrag}
            onTouchStart={this.onMouseEnter}
            onMouseEnter={this.onMouseEnter}
            onMouseOut={this.onMouseOut} />
          <img id="leah"
            alt="leah"  
            className="person"
            src={require('./assets/images/leah.png')}
            data-type="leah"
            onDragStart={this.preventImageDrag}
            onTouchStart={this.onMouseEnter}
            onMouseEnter={this.onMouseEnter}
            onMouseOut={this.onMouseOut} />
          <img id="carol"
            alt="carol"  
            className="person"
            src={require('./assets/images/carol.png')}
            data-type="carol"
            onDragStart={this.preventImageDrag}
            onTouchStart={this.onMouseEnter}
            onMouseEnter={this.onMouseEnter}
            onMouseOut={this.onMouseOut} />
          </div>
        <div
          id="person-text">
          <b>{this.state.active ? Names[this.state.active] : null}</b>
          {this.renderText()}
        </div>
      </div>
    )
  }
}
