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
import { validateField } from './validate';

const Auth = (props: { isMobile: any }) => {
	// hooks
	let slackname = 'obby dev';
	const router = useRouter();
	const [isLoggingIn, setMode] = React.useState(true);
	const [passMode, setpassMode] = React.useState('password');
	const [notify, setNotify] = React.useState({
		type: 'error',
		message: ''
	});
	const [isLoading, seIsLoading] = React.useState(false);
	const [user, setUser] = React.useState<UserTypes>({});
	const [errMsg, setErrMsg] = React.useState('');
	const { push } = useRouter();
	// hooks

	// handlers
	function Notify(type: 'success' | 'error', message: string) {
		return setNotify({
			...notify,
			type: type,
			message: message
		});
	}



	function getUserDetails(e: any, fieldName: string) {
		let fieldValue = e && e.target.value;

		Notify('error', '');

		let { valid, errMsg } = validateField(fieldName, fieldValue);

		if (errMsg) {
			return Notify('error', errMsg);
		}

		valid &&
			setUser({
				...user,
				[fieldName]: fieldValue
			});
	}
	// handlers


	// functions
	function switchMode() {
		setMode(!isLoggingIn);
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	return (
		<div className={`auth ${isLoggingIn && 'active'} relative`}>
			<SEO title="auth" />

			<div className="background-partern ">
				<div className="main_content">
					<Image src={Logo} width={150} height={60} alt="logo" />

					{/* uth componrnt */}

					<div className="auth_card ">
						<div className="text-center">
							<h1 className="logIn">
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
								onChange={(e) => getUserDetails(e,'email')}
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
									onChange={(e) => getUserDetails(e,'phone')}
									className="input_field p-4 font-toma-reg border border-gray-200 rounded-lg"
									placeholder="Please enter your phone number"
								/>
							</div>
						)}

						{/* password field */}
						<div className="input_box  flex flex-col space-y-3 relative">
							<label className="body" htmlFor="body">
								Password
							</label>
							<input
								type={passMode}
								onChange={(e) => getUserDetails(e,'password')}
								className="input_field  p-4 font-toma-reg border border-gray-200 rounded-lg"
								placeholder=""
							/>
							{passMode === 'password' ? (
								<div
									role={'button'}
									title={'Hide pasword'}
									onClick={() => setpassMode('text')}
									className={`top-[45px] eyes absolute right-6  `}
								>
									<FiEye className="text-2xl text-gray-400" />
								</div>
							) : (
								<div
									role={'button'}
									title={'Hide pasword'}
									onClick={() => setpassMode('password')}
									className="eyes absolute right-6 top-[45px]"
								>
									<FiEyeOff className="text-2xl text-gray-400" />
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
						{/* password field */}

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
								{isLoggingIn ? 'login' : 'register'}
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

export default Auth;
