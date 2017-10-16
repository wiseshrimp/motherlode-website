import * as React from 'react'
import './PillowTalk.css'

const GoFundMeLink = 'https://www.gofundme.com/newincresidency'

export default class PillowTalk extends React.Component {
  goFundMe = () => {
    window.open(GoFundMeLink)
  }

  render() {
    return (
      <div className="pillow-talk animate-in">
        <div className="pillow-text">
          <div className="s-text">
            Conventional sex education underrepresents the spectrum of sexual identity, and what is lacking often leads to misinformation from alternative sources.
          </div>
          Pillow Talk is a computer-generated virtual reality experience that covers sex positive topics which are often omitted from traditional sex education curriculum. These topics include, but are not limited to, inclusivity within the vast sexual spectrum, communication in and out of the bedroom, and counteracting stigmas.
          <div className="s-text">
            Pillow Talk will act as an interactive platform that welcomes and celebrates the vast field of sexuality by including marginalized perspectives that have systematically been excluded from the conversation. This experience will be developed for the HTC Vive and Oculus Rift.
          </div>
          <div className="s-text">
            We acknowledge the fact that we do not have the right to speak on behalf of other people’s sexual identities and experiences. Therefore, we will implement our artistic and technical skills to act act as developers rather than educators.
          </div>
          <div className="s-text">
            Pillow Talk is a collaborative project, welcoming any and all ideas encompassing sexuality. We are seeking input, critique, and suggestions as Pillow Talk develops and materializes. Please feel free to contact Motherlode - your voice is indispensable.
          </div>
          <div className="donate" onClick={this.goFundMe} />
        </div>
      </div>
    )
  }
}