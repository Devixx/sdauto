import React, { FC } from 'react'

const Socials: FC = () => {
  return (
    <div className="sidebar">
      <div className="social facebook">
        <a href=" https://www.facebook.com " target="_blank">
          <p><i className="fa fa-facebook "></i> </p>
        </a>
      </div>
      <div className="social twitter">
        <a href=" https://www.twitter.com " target="_blank">
          <p><i className="fa fa-twitter"></i> </p>
        </a>
      </div>
      <div className="social google">
        <a href=" https://www.plus.google.com " target="_blank">
          <p><i className="fa fa-google-plus"></i> </p>
        </a>
      </div>
    </div>
  )
}

export default Socials
