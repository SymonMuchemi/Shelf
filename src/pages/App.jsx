import bookShelfLogo from './shelf-logo.png'

function App() {
	document.title = 'Sign In'

	return (
			<div className="box">
				<div className='imageContainer'>
					<img src={bookShelfLogo} alt="logo" className='image'/>		
				</div>
				<h2>Welcome Back!</h2>
				<p className="message">Sign in to you digital library</p>
				<form>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" placeholder='username@collegename.ac.in'/>                
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password"/>
					<div className='remember_forget'>
						<div className='checkbox'>
							<input type="checkbox" name="remember"/>
							<span>Remember me</span>
						</div>
						<a href="/">Forget Password?</a>
					</div>
					<input type="submit" value="Sign In" className='button'/>
					<div className='user_options'>
						<p>Already a user? <a href='#'>Login</a></p>
					</div>
				</form>
			</div>
	)
}

export default App
