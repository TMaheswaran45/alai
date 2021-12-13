import React from 'react'

export default function About() {
	return (
		<section className="about-area ptb-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">

						<div className="col-lg-6"><br /></div>
						<div className="about-image">
						{/*<div className="bar"></div> */}
							<img src={require("../../static/images/about-sq.jpeg")}
								alt="image" />
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="about-content">

							<div className="section-title">

								<p class="text-justify">Alai Labs was founded in 2016 in Singapore by three aspiring enterpreneurs with the aim of bring smaart homes with in the reach of everyone.
									Alai Labs is head quartered in Singapore, while the R&D and technology delivery center is in chennai.
									We are a 20 member strong team of highly passionate and enthusiastic people focussed on delivering exciting products and solutions for our customers.
									Though we started out with products for smart homes, we have diversified a lot in the last 4 years working on multiple domains and projects.
									Healthcare, Port operations, Smart Home/property management, Biometrics based access control  are some of the areas where we have made our presence felt.
									The team has a very exciting blend of skill sets that enables it to solve complex problems and deploy solutions rapidly.
									With the experience we have gained in the past 4 years as a team, added to the excellent industrial connects and combined with the expertise of the founding team, the company is poised for a very bright future.
									Alai Labs is built on the core values of doing the right thing always, transparency, honoring commitments to customers, freedom of expression and keeping the employees happy.
									We foster a culture of openness and respect for every other team member. Everyone in our team is considered as valuable as the core founders.
									When it comes to decision making on product ideas and engineering, everyone's view points/opinions are taken into consideration.
									This makes everyone in the team responsible and passionate about the work they do.</p>
							</div>

						</div>
					</div>
				</div>

				 <div className="about-inner-area"> 
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our History</h3>
								<p class="text-justify">Alai Labs was founded in 2016 in Singapore by three aspiring enterpreneurs with the aim of bringing smart solutions with in the reach of everyone. Alai Labs is head quartered in Singapore, while the R&D and technology delivery center is in chennai</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our Mission</h3>
								<p class="text-justify">Our mission has always been to make technology affordable through smart engineering. We intend to make meaningful impact to the society through our solutions</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
							<div className="about-text">
								<h3>Our Values</h3>
								<p class="text-justify">Alai Labs is built on the core values of doing the right thing always, transparency, honoring commitments to customers, freedom of expression and keeping the employees happy. We foster a culture of openness and respect for every other team member. Everyone in our team is considered as valuable as the core founders</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}