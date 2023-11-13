
import { GetStaticProps } from 'next';

const DetailPage:React.FC<{cryptoId: string}> = (props) => {
	console.log(props.cryptoId);
	return <h1>H1</h1>;
};

export const getStaticPaths = () => {
    return {
        fallback: false,
        paths: []
    }
}

export const getStaticProps = ((context) => {
    const cryptoId = context.params?.cryptoId;
    
	return {
        props: { id: cryptoId },
	};
}) satisfies GetStaticProps;


export default DetailPage;