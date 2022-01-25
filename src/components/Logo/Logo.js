import LogoAntorcha from '../../assets/images/logo_antorcha.png';
import { Wrapper, Link, TextLogo, ImageWrapper } from './styles';

const Logo = () => {
	return (
		<Link
			href="https://www.antorchadigital.com/"
			target="_blank"
			rel="noreferrer"
		>
			<Wrapper>
				<TextLogo component="h1" noWrap>
					ToDo App for
				</TextLogo>
				<ImageWrapper component="img" src={LogoAntorcha} height="40px" />
			</Wrapper>
		</Link>
	);
};

export default Logo;