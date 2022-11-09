import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/Logo-white.svg';
import arrowDown from '@images/arrow-down.svg';
import arrowRight from '@images/arrow-right.svg';
import google from '@images/goggle.svg';
import { useAuth } from '@contexts/auth-context';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Home = (props: { isMobile: any }) => {
	const { user, setUser } = useAuth();
	let slackname = 'obby dev';
	const router = useRouter();
	const [isLoggingIn, setMode] = React.useState(true);
	const [passMode, setpassMode] = React.useState('password');

	function switchMode() {
		setMode(!isLoggingIn);
		window.scrollTo({
			top: 0,
			// left: 100,
			behavior: 'smooth'
		});
	}

	return (
		<div className={`auth ${isLoggingIn && 'active'} relative`}>
			<SEO title="auth" />
			{/* <Text text="name"/>
			<Button text='button'/> */}

			<div className="background-partern absolute top-0 left-0 w-full h-full flex items-center justify-center">
				<div className="main_content  p-2 flex flex-col items-center space-y-9">
					<Image src={Logo} width={150} height={60} alt="logo" />

					{/* uth componrnt */}

					<div className="auth_card space-y-11 bg-white px-24 py-16 h-auto w-[778px] rounded-lg">
						<div className="text-center">
							<h1 className="logIn text-black font-bold text-[32px]">
								{isLoggingIn ? 'Login to your account' : 'Create your account'}
							</h1>

							<p className="body mt-3">
								{isLoggingIn
									? 'Securely login to your Authect'
									: 'Create your Authect account'}
							</p>
						</div>
						{/*  */}

						<div className="input_box  flex flex-col space-y-3">
							<label className="body" htmlFor="body">
								Email
							</label>
							<input
								type="email"
								className="input_field p-4 font-toma-reg border border-gray-200 rounded-lg"
								placeholder="Enter your email address"
							/>
						</div>

						{!isLoggingIn && (
							<div className="input_box  flex flex-col space-y-3">
								<label className="body" htmlFor="body">
									Phone number
								</label>
								<input
									type="phone"
									className="input_field p-4 font-toma-reg border border-gray-200 rounded-lg"
									placeholder="Please enter your phone number"
								/>
							</div>
						)}

						<div className="input_box  flex flex-col space-y-3 relative">
							<label className="body" htmlFor="body">
								Password
							</label>
							<input
								type={passMode}
								className="input_field  p-4 font-toma-reg border border-gray-200 rounded-lg"
								placeholder=""
							/>
							{passMode === 'password' ? (
								<div role={'button'} title={'Hide pasword'} onClick={() =>setpassMode('text')} className="eyes absolute right-6  bottom-4">
									<FiEye className="text-2xl" />
								</div>
							) : (
								<div role={'button'} title={'Hide pasword'} onClick={() =>setpassMode('password')}  className="eyes absolute right-6  bottom-4">
									<FiEyeOff className="text-2xl font-bold" />
								</div>
							)}
							
							{!isLoggingIn && (
								<div className="strong-pass">
									<h1 className="body">
										Password must be 8 character or longer, with atleast one
										number or symbol (!@#$%&...)
									</h1>
								</div>
							)}
						</div>

						<div className="">
							{!isLoggingIn && (
								<p className="body">
									By registering, you are agreeing to our{' '}
									<span className="text-light-blue">Terms of Use</span> and
									<span className="text-light-blue mx-1">Privacy Policy</span>
								</p>
							)}
						</div>

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
							className="button_box w-full"
						>
							<button
								onClick={() => router.push('/dashboard')}
								className="btn light middle w-full centered"
							>
								{isLoggingIn ? "login" : "register"}
							</button>
						</motion.div>

						<p className="body w-full text-center">Or contiue with</p>

						<div className="bg-white  centered mx-auto">
							<Image src={google} width={37} height={38} alt="logo" />
						</div>
					</div>
					{/* uth componrnt */}

					{isLoggingIn ? (
						<h1 className="text-white">
							Don’t have an account?{' '}
							<strong
								role={'button'}
								title={'create an account'}
								onClick={switchMode}
								className="text-light-blue"
							>
								Register
							</strong>
						</h1>
					) : (
						<h1 className="text-white">
							Already have an account?{' '}
							<strong
								role={'button'}
								title={'sign in into your account'}
								onClick={switchMode}
								className="text-light-blue"
							>
								{' '}
								Logint?
							</strong>
						</h1>
					)}

					<h1 className="text-white">Forget Password?</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
