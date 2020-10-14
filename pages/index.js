import Nav from '../src/components/nav';

function IndexPage() {
	return (
		<div>
			<Nav />
			<div className='py-20'>
				<h1 className='test'>Next.js + Tailwind CSS</h1>
				<style jsx>{`
					h1.test {
						@apply bg-green-500 text-5xl text-center text-accent-1;
					}
				`}</style>
			</div>
		</div>
	);
}

export default IndexPage;
