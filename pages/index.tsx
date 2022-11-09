import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import LogoAnimate from '@images/Logo.svg';
import arrowDown from '@images/arrow-down.svg';
import arrowRight from '@images/arrow-right.svg';
import green from '@images/green.svg';
import { useAuth } from '@contexts/auth-context';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Home = (props: { isMobile: any }) => {
	const { user, setUser } = useAuth();
	let slackname = 'obby dev';
	const router = useRouter();

	return (
		<div className="home">
			<SEO title="home" />
			{/* <Text text="name"/>
			<Button text='button'/> */}

			<div className="navbar  h-[100px] bg-white flex items-center justify-between px-[105px]">
				<div className="logo-box cursor-pointer">
					<Link href="/">
						<Image src={LogoAnimate} width={150} height={60} alt="logo" />
					</Link>
				</div>

				<div className="nav-list  p-2">
					<ul className="list middle space-x-8">
						<li className="list-item middle ">
							<p className="text cap pr-2">products</p>
							<Image src={arrowDown} width={20} height={20} alt="logo" />
						</li>

						<li className="list-item middle ">
							<p className="text cap pr-2">products</p>
							<Image src={arrowDown} width={20} height={20} alt="logo" />
						</li>

						<li className="list-item middle">
							<p className="text cap pr-2">products</p>
							<Image src={arrowDown} width={20} height={20} alt="logo" />
						</li>
					</ul>
				</div>

				<div className="button_box ">
					<button className="btn light">book a demo</button>
				</div>
			</div>

			<div className="hero relative">
				<div className="hero_content w-[580px]  space-y-6">
					<motion.h1
						initial={{
							opacity: 0
						}}
						animate={{
							opacity: 1
						}}
						transition={{
							duration: 0.8
						}}
						className="text-[32px] font-toma-sb"
					>
						Verify your Customer’s Identity Instantly, with Seamless Authentication Processes
					</motion.h1>

					{/*  */}
					<div className="radio_list">
						<motion.div
							initial={{
								opacity: 0
							}}
							animate={{
								opacity: 1
							}}
							transition={{
								duration: 1.2
							}}
							className="row middle"
						>
							<Image src={green} width={20} height={20} alt="logo" />

							<p className=" font-toma-reg text-2xl ml-5 ">Maximise identity coverage</p>
						</motion.div>

						<motion.div
							initial={{
								opacity: 0
							}}
							animate={{
								opacity: 1
							}}
							transition={{
								duration: 1.6
							}}
							className="row middle"
						>
							<Image src={green} width={20} height={20} alt="logo" />

							<p className="font-toma-reg text-2xl ml-5">
								Reduce drop-offs and false positives
							</p>
						</motion.div>
					</div>
					{/*  */}

					<motion.p
						initial={{
							opacity: 0
						}}
						animate={{
							opacity: 1
						}}
						transition={{
							duration: 2
						}}
						className="text-hero text-lg"
					>
						Verify your customers’ identity instantly, with our end-to-end identity verification
						and fraud detection services
					</motion.p>

					<motion.div
						initial={{
							x: -10,
							opacity: 0
						}}
						animate={{
							x: 0,
							opacity: 1
						}}
						transition={{
							duration: 2.2
						}}
						className="button_box "
					>
						<button onClick={() => router.push('/auth')} className="btn light middle ">
							<p className="mr-4">book a demo</p>

							<Image src={arrowRight} width={20} height={20} alt="logo" />
						</button>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Home;
