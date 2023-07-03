import styled from 'styled-components';
import { Counter } from '../../components/Counter';

export { Page };

const Container = styled.div`
	width: 100%;
	background-color: red;
`;

function Page() {
	return (
		<Container>
			<h1>Welcome</h1>
			This page is:
			<ul>
				<li>Rendered to HTML.</li>
				<li>
					Interactive. <Counter />
				</li>
			</ul>
			<a href='/blog/2023-07-03'>Blog post</a>
		</Container>
	);
}
