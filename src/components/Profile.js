import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'
import BioProfile from './BioProfile';

class Profile extends Component {

  state = {
		id: this.props.id,
    name: this.props.name || 'Jhon Doe',
    profile_url: this.props.profile_url ||'/assets/lula.jpeg',
    political_party: this.props.name || 'not found',
    position: this.props.position || 'not found',
    corrupt: this.props.corrupt || false,
    resume: this.props.resume || 'Sed sollicitudin imperdiet sapien. Cras tempor tempus faucibus. Morbi interdum risus id purus commodo, a egestas ante porta.',
  }

  render() {
    const { name, profile_url, corrupt, position, political_party, resume } = this.state

    const color = corrupt ? 'red' : 'green'
    const content = corrupt ? 'Corrupt' : 'Honest'
		const icon = corrupt ? 'remove': 'checkmark'

		return(
			<Card.Group>
				<Card>
					<Image 
						src={profile_url}
						label={{ as: 'a', color: color, content: content, icon: icon, ribbon: true }}
					/>
					<Card.Content>
						<Card.Header> name: {name}</Card.Header>
						<Card.Meta>Political_party: {political_party}</Card.Meta>
						<Card.Meta>last position: {position}</Card.Meta>
						<Card.Description>Description: {resume}... read more </Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name='user' />
							10 users monitoring
						</a>
					</Card.Content>
				</Card>
			</Card.Group>
		)

  } 
}

Profile.propTypes = {
  id: PropTypes.number,
	name: PropTypes.string,
	profile_url: PropTypes.string,
	political_party: PropTypes.string,
	position: PropTypes.string,
	corrupt: PropTypes.bool,
	resume: PropTypes.string
};


export default  Profile
