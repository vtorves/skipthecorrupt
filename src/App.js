import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Profile from './components/Profile';

const bio = [
	{
		id: 2,
		name: 'Lula',
		profile_url: '/assets/lula.jpeg',
		corrupt: true,
		political_party: 'PT',
		position: 'president',
		resume: 'Sed sollicitudin imperdiet sapien. Cras tempor tempus faucibus. Morbi interdum risus id purus commodo, a egestas ante porta.',
	},
	{
id: 3, 
		name: 'Dilma',
		profile_url: '/assets/dilma.jpeg',
		corrupt: true,
		political_party: 'PT',
		position: 'president',
		resume: 'Sed sollicitudin imperdiet sapien. Cras tempor tempus faucibus. Morbi interdum risus id purus commodo, a egestas ante porta.',
	},
	{
id:4,
		name: 'Jhon Doe',
		profile_url: '/assets/jhon_doe.jpeg',
		corrupt: false,
		political_party: 'JD',
		position: 'congressman',
		resume: 'Sed sollicitudin imperdiet sapien. Cras tempor tempus faucibus. Morbi interdum risus id purus commodo, a egestas ante porta.',
	}
]


class App extends Component {

	state = { bio }

	render() {
		const bio_state = Array.from(this.state.bio)
		return(
			<div>
					{bio_state.map((bio =>
						<Profile key={bio.id}
							name={bio.name}
							profile_url={bio.profile_url}
							political_party={bio.political_party}
							corrupt={bio.corrupt}
							resume={bio.resume}
						/>
					))}
			</div>
		);
	}
}

export default App;
