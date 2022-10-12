import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "animate.css";
import "../styles/About.css";
import { motion } from "framer-motion";

const About = () => {
	// https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
	const handleDownload = () => {
		fetch("Update-Beta_5.pdf").then((response) => {
			response.blob().then((blob) => {
				const url = window.URL.createObjectURL(blob);

				let anchorLink = document.createElement("a");

				anchorLink.href = url;
				anchorLink.download = "Diego-Resume.pdf";
				anchorLink.click();
			});
		});
	};

	return (
		<div>
			<div>
				<h1 className="text-white display-1 mt-5 text-center" id="top">
					About Me
				</h1>
			</div>
			<div className="vh-100">
				<motion.section className="section-1">
					<h3 className="text-warning display-4 animate__animated animate__fadeIn animate__slow">
						The Story So Far
					</h3>

					<p className="text-white my-3 animate__animated animate__fadeIn animate__slower animate__delay-2s">
						Saturday, May 13<sup>th</sup>, 1995...
					</p>

					<p className="text-white my-3 animate__animated animate__fadeIn animate__delay-4s">
						KIDDING!{" "}
						<span className="animate__animated animate__fadeIn animate__fast animate__delay-5s">
							Boy, wouldn't that have been a long "About" section
							to read? Yeah I agree, would have been TOTALLY crazy
							and wouldn't make much sense either so we are going
							to hit the fast forward button and skip a few years
							so we can ignore the "boring stuff." Trust me, you
							don't want to read about my emo phase. It's so bad I
							still randomly wince about it.
						</span>
					</p>

					<p className="text-white my-3 animate__animated animate__fadeIn animate__fast animate__delay-5s">
						As you've probably already seen, my name is{" "}
						<span className="text-warning">Diego</span> and I am a
						Software Engineer currently enrolled in Springboard's
						Software Engineering Bootcamp. So, how is it that I
						ended up here? Well, for that we go back to 2019 when my
						roommate noticed that I had a knack for being very
						analytical about how the software of our company worked
						and was more curious to explore those questions with our
						IT department. Since I was curious about the more
						technical side of our work, my roommate suggested I
						start learning <code>Python</code> since it was (and
						still is), a beginner friendly language which covers
						most of the big topics that Software Engineers learn in
						school.
					</p>
				</motion.section>

				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
				>
					<h3 className="text-warning display-4">Python...First?</h3>

					<p className="text-white my-3">
						Yep! I didn't know how to start working with the
						language on my machine or how to even create the code
						that would run my file on the terminal so I started by
						going to the best source of knowledge I thought of
						first. Barnes and Noble! I started with a "basic" crash
						course book that taught Python but there was one little
						thing that I would later discover when running the code
						on my machine. The book was teaching Python 2 and NOT
						Python 3 which is what I installed on my machine. A few
						family vacation and a few google searches later and I
						found my problem which introduced me to the wonderful
						joys of this little thing we call <b>debugging</b>. So
						what was my first code that I executed? Well, not to
						show off, but <b>I</b>, wrote the code below.
						<br />
						<br />
						<code>print("hello world!")</code>
						<br />
						<br />
						Pretty neat huh?
					</p>

					<p className="text-white my-3">
						{" "}
						So what happened after writing my revolutionary program
						in Python? Well I had no real direction so after
						spending a few hours on YouTube looking at several
						different channels that specialized on teaching newbies
						such as myself, I realised I had no idea what the videos
						were talking about nor how to actually learn a
						programming language. This is where I was introduced to
						the wonderful online platform known as Udemy and where I
						would <b>TRULY</b> begin to learn about Software
						Engineering and programming languages. My main
						instructor for these last four years has been Colt
						Steele and I owe him more than I can really say in this
						section so Colt, if you're reading this, Thank you!!!!
					</p>

					<p className="text-white my-3">
						{" "}
						After a long 2019, I finally completed the base Python
						course on Udemy and got myself a nice little certificate
						for it! Now came the biggest question after completing a
						large achievement: What now?
					</p>
				</motion.section>

				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
				>
					<h3 className="text-warning display-4">
						Web Development 101
					</h3>

					<p className="text-white my-3">
						{" "}
						It was clear that I was hooked on creating helpful tools
						or just learning about navigating the web withotu having
						to touch a browser as I learned to do with Python but it
						was hard for me to visualize what my code was actually
						doing since my Python course didn't really feature GUI
						projects. Since I wanted to dive further into learning
						how to create websites, databases, and more, I started
						searching Udemy for this information and as luck would
						have it, Colt had a popular course that had great
						reviews for this very topic: The Modern Developer
						Bootcamp 2020.
					</p>

					<p className="text-white my-3">
						{" "}
						I started this journey in late 2019 which was right
						before...You know the world was forced to stay inside
						for a little. It was also here that I started to learn
						about the basics of how websites are built in general
						and what <code>HTML</code> was actually used for! The
						first few sections of the course focused on generating
						basic HTML content like creating unordered lists and
						creating headings/paragraphs from popular websites like
						Wikipedia. These mini code-along projects further
						reinforced my understanding of how web pages are
						displayed under all the fancy styling and animations
						that the websites today use and display.
					</p>

					<p className="text-white my-3">
						{" "}
						After a few assignments creating HTML elements, we moved
						on to what is to this day one of my bigger challenges:{" "}
						<code>CSS</code>. Now why do I consider this one of my
						bigger challenges? I hear you ask. Well, that's because
						I am not really an artisitic person but more
						importantly, I had no idea how to keep centering divs
						within divs with vanilla CSS instead of using styling
						frameworks such as Bootstrap or Bulma, or even Material
						UI. This doesn't mean I won't dig further but I will
						always need a study buddy for this because well, CSS and
						I really don't get along. Sorry CSS!
					</p>

					<p className="text-white my-3">
						{" "}
						After completing the styling assignmetns, I further
						understood why CSS is considered a powerful tool seeing
						real world examples using base HTML and CSS to create
						tickets or credit card animations or even just a basic
						weather applicaiton boilerplate for styling! The main
						concept that we were informed of is that the
						possibilities are endless for your website once you've
						become comfortable with the rules and syntax of CSS.
						Lastly, and the main point of the entire web development
						course, we were introduced to my best friend{" "}
						<code>Javascript</code>!
					</p>

					<p className="text-white my-3">
						{" "}
						Javscript was the final piece of the Udemy course and
						without getting too into the details (because these
						sections were really REALLY dense with content), I were
						introduced to the base syntax of Javscript along with
						creating HTML elements from my Javascript files and
						inserting them into the web page based on specific user
						interactions! I was also shown how to make Asynchronous
						Ajax requests to external APIs to track the price of
						Bitcoin and the history of how engineers previously had
						to make these calls using nested functions (callbacks)
						which yes, sounds just as confusing as it was reading
						that.
					</p>

					<p className="text-white my-3">
						{" "}
						After the introduction sections were completed, I was
						introduced to <code>MongoDB</code> for creating backend
						databases along with using <code>Mongoose</code> for
						route creation and <code>JOI</code> for creating the
						backend database schema so that future users of the
						final project could log in and use the fake data that my
						project was seeded with. The final topic of the project
						was ensuring user authentication and authorization andI
						I was introduced to the <code>Bcrypt</code>
						library for the first time and I can say that to this
						day, I have not used anything else not just because of
						the ease of use for different languages but because of
						the complexity to ensure a user's information is kept in
						a secure manner. Unfortunately, I had to remove the
						project that was completed for the bootcamp but the
						overall Udemy course was completed in early November
						2021 and I once again found myself wanting more to learn
						and in a more strucutred environment so I began looking
						up potential education paths which is when I stumbled on
						a previous stream that Colt did which he provided more
						information on a recent partnership with Springboard to
						create a structured online bootcamp which would teach us
						frontend and backend technologies so that we would be
						comfortable and confident as Full Stack Engineers.
						Finding this video sparked my interest in joining this
						course and it wasn't long before I found myself speaking
						with Springboard's administration team.
					</p>
				</motion.section>

				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					className="springboard-section"
				>
					<h3 className="text-warning display-4">
						Springboard - Current
					</h3>

					<p className="text-white my-3">
						I began my journey with Springboard in November of 2021
						and by December 2021, I was able to pass the entrance
						technical test and join the main cohort! Since that time
						I have learned so much and even better, learned to
						improve my skills with creating sites or applications
						myself with each time the process getting easier and
						faster. Don't believe me? This entire website is a{" "}
						<code>React</code> application! This is a technology
						that I had no knowledge of about two-ish months ago and
						here I am using the latest version to create static
						pages using routes and all!
					</p>

					<p className="text-white my-3">
						Additionally, I was able to reconnect with my first
						language <code>Python</code> and created several
						projects such as my Currency converter, Poke-Forum, and
						more. I primarily used <code>Flask</code> to serve the
						HTML pages but the main point is that the routes,
						authentication, and authorization went all through the
						server and it responded with the correct
						HTML/CSS/Javascript for that route! This was somethig
						that I previously had no knowledge of nor did I know how
						to actually implement. In addition, I was also introdued
						to setting up databases with <code>SQL</code> and{" "}
						<code>PostgreSQL</code> to make backend queries from
						model files in my projects without having one giant
						application file.
					</p>

					<p className="text-white my-3">
						The final new topics that I was introduced to was
						creating <code>APIs</code> using both Python and{" "}
						<code>Express.js</code> so that I can use either Python
						or React as a way to display my applications. Using
						Express has opened the door for me understanding how I
						can create a backend database that will display data on
						the frontend using React and CSS. With regards to
						authentication and authorization in Express, we were
						taught how to use <code>JSON Web Tokens</code> which is
						a more secure way of ensuring that a user is properly
						authenticated and that the information being received in
						our application has not been intercepted by a malicious
						actor (hacker man). These final topics now provides a
						well rounded base understanding of how a tech stack
						works with relation to each other.
					</p>

					<p className="text-white my-3">
						And now we find ourselves back at the ultimate question:
						What now? Well, if you've made it this far, then first,
						stretch because this was a lot of reading. I am glad you
						stuck around and hopefully enjoyed all the things I've
						learned in my long three going on four year learning
						experience. This is the part where I am now looking for
						my first position as a Software Engineer but if you're
						curious about what I do away from the keyboard when I go
						outside and see the sun, then you can head over to the{" "}
						<Link
							to="/contact"
							className="text-warning text-decoration-none"
						>
							contact
						</Link>{" "}
						page which will have a lot less writing (trust me, I've
						been writing this for about two hours now listening to
						the same song so I am ready to end this long note) and
						will include the social medial links where you can reach
						out or just follow to see what else I am up to. You can
						download my resume from the button below if you are a
						recruiter or something along those lines. Ok that's all
						I got, Thanks for reading friends :)
					</p>

					<button
						className="btn btn-warning download-btn mx-1"
						onClick={handleDownload}
					>
						Download CV
					</button>
					<Link to="/" className="btn btn-warning mx-1">
						Home <i className="bi bi-house"></i>
					</Link>
					<a href="#top" className="btn btn-warning mx-1">
						Top <i class="bi bi-arrow-bar-up"></i>
					</a>
				</motion.section>
			</div>
		</div>
	);
};

export default About;
