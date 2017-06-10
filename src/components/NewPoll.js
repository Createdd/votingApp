import React from 'react';

const NewPoll = () =>
  (<div id="modal1" className="modal modal-fixed-footer teal darken-2 center-align">

    <div className="modal-content">
      <h2>New Poll</h2>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <i className="material-icons prefix">question_answer</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">Your Question</label>
            </div>
            <div className="input-field col s10">
              <i className="material-icons prefix">queue</i>
              <input id="icon_telephone" type="text" className="validate" />
              <label htmlFor="icon_telephone">Answer 1</label>
            </div>
            <div className="input-field col s10">
              <i className="material-icons prefix">queue</i>
              <input id="icon_telephone" type="text" className="validate" />
              <label htmlFor="icon_telephone">Answer 2</label>
            </div>
          </div>
        </form>
      </div>

    </div>

    <div className="modal-footer blue-grey darken-4">
      <a
        href="#!"
        className="modal-action modal-close waves-effect waves-green btn blue-grey darken-4 orange-text"
      >
				Save
			</a>
    </div>
  </div>);

export default NewPoll;
