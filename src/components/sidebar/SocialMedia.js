import React from 'react';

const SocialMedia = (props) => {
  const passToProps = (e) => {
    if (e) e.preventDefault();
    props.login(true);
  };
  return (
    <div className="row">
      <a href="/api/auth/twitter">
        <img
          className="responsive-img waves-effect"
          src="./img/twitterSignin.png"
          alt="pic"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
