import React from "react"

class HubspotAppointments extends React.Component {
  componentDidMount() {
  	const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    document.body.appendChild(script);
    
    {/*script.addEventListener('load', () => {
    	if(window.hbspt) {
      	window.hbspt.forms.create({
        	portalId: '2323210',
          formId: 'd8232cf6-b9ed-4abc-a81e-585801849cea',
          target: '#hubspotForm'
        })
      }
    });*/}
  }
  
	render() {
  	return (
  		<div>
  		  <div
          className="meetings-iframe-container"
          data-src="https://meetings.hubspot.com/kyle532?embed=true"
        ></div>
  		</div>
    );
  }
}

export default HubspotAppointments