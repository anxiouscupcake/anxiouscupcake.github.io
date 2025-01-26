import '../../styles/Resume.css'
import {
  EMAIL,
  LEGAL_NAME,
  LINK_GITHUB,
  LINK_LINKEDIN,
  LOCATION,
  NAME,
  PHONE_NUMBER,
  SURNAME,
} from '../../Constants'
import { useState } from 'react'

export default function ResumePage() {
  const [useLegalName, setUseLegalName] = useState(true)

  function handleUseLegalNameChange() {
    setUseLegalName(!useLegalName)
  }

  return (
    <div>
      <div className='resume'>
        <div className='header'>
          <div className='summary-block'>
            <h1>{getFullName(useLegalName)}</h1>
            <h2>Software Engineer</h2>
            <p>
              My name is {useLegalName ? LEGAL_NAME : NAME}, I'm a Software
              Engineer with extensive experience in front-end development with
              Flutter and React. I'm always striving for learning new things and
              I'm very passionate about technology. I believe that collaborative
              efforts and teamwork are key to achieving great results in
              software development.
            </p>
          </div>
          <div>
            <p>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <p>{PHONE_NUMBER}</p>
            <p>{LOCATION}</p>
            <p>
              <a href={`https://${LINK_GITHUB}`} target='_blank'>
                {LINK_GITHUB}
              </a>
            </p>
            <p>
              <a href={`https://${LINK_LINKEDIN}`} target='_blank'>
                {LINK_LINKEDIN}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className='controls'>
        {/* TODO: implement PDF download */}
        <button>Download PDF</button>
        <button onClick={handleUseLegalNameChange}>
          {useLegalName ? 'Switch to my real name' : 'Switch to my legal name'}
        </button>
      </div>
    </div>
  )
}

function getFullName(isLegalName: boolean): string {
  return isLegalName ? `${LEGAL_NAME} ${SURNAME}` : `${NAME} ${SURNAME}a`
}
