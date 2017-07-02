import React from 'react';

const SocialMedia = (props) => {
  const passToProps = (e) => {
    if (e) e.preventDefault();
    props.login(true);
  };
  return (
    <div className="row">
      <img
        className="responsive-img waves-effect"
        src="./img/twitterSignin.png"
        alt="pic"
        onClick={passToProps}
      />
    </div>
  );
};

export default SocialMedia;
