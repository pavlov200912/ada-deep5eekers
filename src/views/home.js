import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Overview from '../components/overview'
import AppComponent from '../components/component'
import SliderGenders from '../components/slider-genders'
import Sliderclusters from '../components/sliderclusters'
import Wordclouds from '../components/wordclouds'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <div className="home-container11">
          <svg
            width="40"
            height="40"
            viewBox="0 0 256 256"
            className="home-icon10"
          >
            <path
              d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM104 88a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40-40a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-80 80a16 16 0 1 1-16-16a16 16 0 0 1 16 16m80 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"
              fill="currentColor"
            ></path>
          </svg>
          <span className="home-text100">
            <span> </span>
            <span className="home-text102">Deep</span>
            <span className="home-text103">5</span>
            <span className="home-text104">eekers</span>
          </span>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon12">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links">
              <span className="home-text105">About</span>
              <span className="home-text106">Features</span>
              <span className="home-text107">Pricing</span>
              <span className="home-text108">Team</span>
              <span className="home-text109">Blog</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon16">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon18">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon20">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <img
          alt="image"
          src="/icons/epfl%20ecole%20polytechnique%20federale%20de%20lausanne.svg"
          className="home-image1"
        />
      </header>
      <section className="home-hero">
        <div className="home-container12">
          <span className="home-text110">
            Exploring Gender Dynamics in Film
          </span>
        </div>
      </section>
      <Overview
        text={
          <Fragment>
            <span className="home-text111">Key Question of our Research</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="home-text112">
              What gender imbalances exist in acting roles, and how do these
              differences vary over time, across genres, and between countries?
            </span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="home-text113">GENDER IMBALANCES</span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="home-text114">
              What stereotypical character types are associated with each
              gender?
            </span>
          </Fragment>
        }
        text131={
          <Fragment>
            <span className="home-text115">GENDER STEREOTYPES</span>
          </Fragment>
        }
        text1211={
          <Fragment>
            <span className="home-text116">
              Are male and female characters typically assigned different
              actions and portrayals? Do the words used in each case convey
              positive or negative connotations?
            </span>
          </Fragment>
        }
        text1311={
          <Fragment>
            <span className="home-text117">PLOT ANALYSIS</span>
          </Fragment>
        }
        text12111={
          <Fragment>
            <span className="home-text118">
              Is unequal gender representation in films linked to a movie&apos;s
              failure or success? Are Oscar nominations balanced across both
              genders?
            </span>
          </Fragment>
        }
        text13111={
          <Fragment>
            <span className="home-text119">REPRESENTATION &amp; SUCCESS</span>
          </Fragment>
        }
        text121111={
          <Fragment>
            <span className="home-text120">
              Does gender inequality exist in production roles as well? Does a
              director&apos;s gender influence the portrayal of male and female
              characters in films?
            </span>
          </Fragment>
        }
        text131111={
          <Fragment>
            <span className="home-text121">BEHIND THE CAMERA</span>
          </Fragment>
        }
        rootClassName="overviewroot-class-name"
      ></Overview>
      <AppComponent
        text7={
          <Fragment>
            <span className="home-text122">NUMBER OF MOVIES</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="home-text123">88K</span>
          </Fragment>
        }
        text25={
          <Fragment>
            <span className="home-text124">
              The number of movies in the CMU dataset.
            </span>
          </Fragment>
        }
        text32={
          <Fragment>
            <span className="home-text125">PERIOD OF TIME</span>
          </Fragment>
        }
        text42={
          <Fragment>
            <span className="home-text126">NUMBER OF IMDB VOTES</span>
          </Fragment>
        }
        text52={
          <Fragment>
            <span className="home-text127">NUMBER OF OSCAR NOMINATIONS</span>
          </Fragment>
        }
        text112={
          <Fragment>
            <span className="home-text128">1888-2016</span>
          </Fragment>
        }
        text122={
          <Fragment>
            <span className="home-text129">635M</span>
          </Fragment>
        }
        text132={
          <Fragment>
            <span className="home-text130">11K</span>
          </Fragment>
        }
        text212={
          <Fragment>
            <span className="home-text131">
              The movies in the CMU dataset were released between 1888 and
              2016. 
            </span>
          </Fragment>
        }
        text222={
          <Fragment>
            <span className="home-text132">
              The number of ratings retrieved from IMDB.
            </span>
          </Fragment>
        }
        text232={
          <Fragment>
            <span className="home-text133">
              The number of Oscar nominations retrieved.
            </span>
          </Fragment>
        }
        rootClassName="app-componentroot-class-name"
      ></AppComponent>
      <section className="home-container13">
        <span className="home-text134">
          <br></br>
          <span className="home-text136">At first glance</span>
          <span>
            ,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text138">
            the chart seems to tell a simple yet striking story: women&apos;s
            representation in films is significantly lower than men&apos;s. This
            visual gives the impression of a film industry where opportunities
            for female characters are far fewer compared to their male
            counterparts.
          </span>
          <br></br>
          <br></br>
          <span className="home-text141">
            While this distribution highlights the quantitative gap, it raises
            deeper questions: How are these characters portrayed? What roles are
            women given compared to men? Are female characters limited to
            certain archetypes or supporting roles? We aim to dive deeper into
            these patterns, questioning not just how many female characters
            exist, but also how they are represented and valued in cinematic
            narratives.
          </span>
        </span>
        <iframe
          src="https://scanton-epfl.github.io/ada-figures/gender_distribution_pie.html"
          className="home-iframe1"
        ></iframe>
      </section>
      <div section="1" className="home-gender-imbalances-header">
        <section className="home-header10">
          <div className="home-header11">
            <h2 className="home-heading1">
              <span>
                Gender imbalances across
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text143">time</span>
              <span>
                ,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text145">genres</span>
              <span>
                {' '}
                and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text147">countries</span>
            </h2>
          </div>
          <div className="home-selector">
            <p className="home-caption1">
              <span className="home-text148">
                The graphs highlight gender imbalances in acting roles by
                examining trends over time, across genres, and between regions.
                The insights suggest that gender disparities in acting are not
                uniform and depend heavily on cultural, temporal, and
                genre-specific factors.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </div>
        </section>
      </div>
      <div className="home-sliderimbalances">
        <SliderGenders
          button={
            <Fragment>
              <span className="home-text150">Time</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="home-text151">
                <span className="home-text152">Time</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="home-text160">
                Over the decades, male characters have consistently outnumbered
                female characters in movies. In earlier years, women had fewer
                roles, with men dominating the screen. By the 2000s, the number
                of roles grew significantly, but the gender gap remained large.
                In recent years, female representation has started to increase,
                reflecting gradual progress toward greater inclusivity in
                film.&quot;
              </span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="home-text161">
                <span className="home-text162">
                  From the regression line in this plot, we see that the male
                  ratio in movies is decreasing. That said, the ratio of male
                  roles is still 0.69 on average.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text163"></br>
                <br></br>
              </span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="home-text165">
                <span className="home-text166">
                  This plot shows that generally, no matter the region, the
                  gender gap is clear for films. The majority of our data can be
                  seen in the North America, Europe, and Asia plots. In these
                  continents, there is a fairly similar distribution of gender
                  roles. In the more sparse distributions, in Africa and South
                  America, we can still see that film is male dominated. These
                  distributions are generalized to continents, but maybe there
                  is more diversity at the country level.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text167"></br>
                <br></br>
              </span>
            </Fragment>
          }
          text18={
            <Fragment>
              <span className="home-text169">
                <span className="home-text170">
                  As shown in the map, the majority of countries are a darker
                  color, symbolizing that the percentage of men is higher than
                  women. The most extreme examples are the United States, India,
                  and the United Kingdom. Only a few countries such as Peru and
                  Libya appear to have a balanced amount of characters. However,
                  there is only one movie entry for both countries, so these
                  shouldn’t be considered representative of the country’s film
                  industry.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text171"></br>
                <br></br>
              </span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="home-text173">Genres</span>
            </Fragment>
          }
          button2={
            <Fragment>
              <span className="home-text174">Geography</span>
            </Fragment>
          }
          text141={
            <Fragment>
              <span className="home-text175">
                <span className="home-text176">Geography</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </span>
            </Fragment>
          }
          text151={
            <Fragment>
              <span className="home-text184">
                <span>
                  How does this gender imbalance vary across the world? Are some
                  countries or continents more inclusive to women?
                </span>
                <br className="home-text186"></br>
                <br></br>
              </span>
            </Fragment>
          }
          text181={
            <Fragment>
              <span className="home-text188">
                <span className="home-text189">
                  With these two plots we get a sense of the popularity of the
                  genre and the female representation in each. Women have the
                  highest representation in romance films, while the lowest in
                  action/adventure films.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text190"></br>
                <br className="home-text191"></br>
                <br></br>
              </span>
            </Fragment>
          }
          text1411={
            <Fragment>
              <span className="home-text193">
                <span>Genres</span>
                <br></br>
              </span>
            </Fragment>
          }
          text1511={
            <Fragment>
              <span className="home-text196">
                <span>
                  We have explored gender representation across time and
                  geography, now let’s see if there are certain genres that
                  women are more represented in. With the wide range of genres
                  represented in the dataset, we will focus on the top ten
                  genres with the most overall actors/actresses. The first plot
                  shows the average ratio of female actresses in films by genre.
                  The second plot shows the count of each gender by genre.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text198"></br>
                <br></br>
                <br></br>
              </span>
            </Fragment>
          }
          rootClassName="slider-gendersroot-class-name"
        ></SliderGenders>
      </div>
      <section className="home-header12">
        <div className="home-header13">
          <h2 className="home-heading2">
            <span>
              Gender
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text202">stereotypes</span>
          </h2>
        </div>
        <span className="home-text203">
          <span>
            While the previous analysis has revealed a persistent gender
            imbalance in the number of male and female characters, the story
            becomes even more compelling when we examine the types of roles each
            gender is assigned. Beyond the numbers, films often reinforce gender
            stereotypes by associating men and women with specific character
            archetypes and behaviors.
          </span>
          <br></br>
          <span>
            Are female characters typically portrayed as caregivers, love
            interests, or secondary figures? Are male characters predominantly
            represented as heroes, leaders, or action-driven protagonists? By
            analyzing these stereotypical patterns, we can uncover how cinema
            shapes, reflects, and sometimes reinforces societal perceptions of
            gender roles.
          </span>
        </span>
      </section>
      <Sliderclusters
        text5={
          <Fragment>
            <span className="home-text207">
              <span className="home-text208">
                Since the dataset is heavily tailed towards male characters, the
                top clusters across both genders is mainly dominated by
                stereotypical male roles. To get a better idea of the
                stereotypical roles played, we can look at each genders’
                character clusters individually.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text209"></br>
              <br></br>
            </span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text211">
              Stereotypes across both genders
            </span>
          </Fragment>
        }
        text52={
          <Fragment>
            <span className="home-text212">
              <span className="home-text213">
                Each figure gives us an idea of the stereotypical roles played
                by both genders. Women are more associated with dumb, beautiful
                characters while men are more associated with manic, corrupt,
                and heroic characters. Both cases present harmful views of women
                and men. In general, the character types are not exactly
                something you want to be associated with. Interestingly, the
                stereotypes are mainly negative for both genders but in very
                different ways. Women are seen as unintelligent beauties, but
                men are seen as threatening.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        text62={
          <Fragment>
            <span className="home-text216">Stereotypes across Males</span>
          </Fragment>
        }
        text511={
          <Fragment>
            <span className="home-text217">
              <span className="home-text218">
                Each figure gives us an idea of the stereotypical roles played
                by both genders. Women are more associated with dumb, beautiful
                characters while men are more associated with manic, corrupt,
                and heroic characters. Both cases present harmful views of women
                and men. In general, the character types are not exactly
                something you want to be associated with. Interestingly, the
                stereotypes are mainly negative for both genders but in very
                different ways. Women are seen as unintelligent beauties, but
                men are seen as threatening.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text219"></br>
              <br></br>
            </span>
          </Fragment>
        }
        text611={
          <Fragment>
            <span className="home-text221">Stereotypes across Females</span>
          </Fragment>
        }
        rootClassName="sliderclustersroot-class-name"
      ></Sliderclusters>
      <div className="home-header14">
        <h2 className="home-heading3">
          <span className="home-text222">
            Plot
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text223">Analysis</span>
          <br className="home-text224"></br>
        </h2>
        <span className="home-text225">
          <span className="home-text226">
            The plot descriptions in the CMU dataset contains around 43,000 data
            entries. We used the BookNLP library to extract named-entity
            recognition and coreference data from the plots. From the plots we
            were able to extract agent, patient, and possessive events
            associated with each gender.
          </span>
          <br></br>
          <br className="home-text228"></br>
        </span>
      </div>
      <div className="home-container14">
        <Wordclouds
          text2={
            <Fragment>
              <span className="home-text229">
                <span className="home-text230">
                  The agent event words across the genres tend to show men
                  displaying more aggressive and initiative actions while women
                  are involved in more evasive and responsive actions. For
                  example we can look at the top genre, thrillers. In this
                  genre, men do acts of killing, following, sending, leading,
                  and using. These actions are strong in nature. Women do acts
                  of living, running, dying, and hearing. These are actions
                  taken as a response.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text232">
                <span className="home-text233">
                  The patient event words tend to show men being the recipient
                  of aggressive acts and confrontational events. Women tend to
                  be recipients of acts of rescue. Four of the five top genres
                  have the word ‘save’ as one of the most frequent patient event
                  words for women.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="home-text235">
                <span className="home-text236">
                  The possessive event words don’t show as clear of a difference
                  between genders as the previous events do. Both genders have
                  words associated with family, spouses, and friends. One
                  difference is that men tend to be associated with ownership of
                  weapons more than women. However
                </span>
                <span>
                  , adventure films display distinct gendered patterns. Men are
                  frequently associated with terms like &quot;wife,&quot;
                  &quot;girlfriend,&quot; &quot;gang,&quot; &quot;crew,&quot;
                  &quot;mission,&quot; and &quot;team,&quot; emphasizing
                  action-driven roles and group dynamics. In contrast, women are
                  more commonly linked to words such as &quot;husband,&quot;
                  &quot;children,&quot; &quot;love,&quot; &quot;home,&quot;
                  &quot;parent,&quot; and &quot;room,&quot; reflecting familial
                  roles and emotional connections. These patterns suggest a
                  narrative tendency to portray men in external and
                  action-oriented contexts while associating women with
                  relational and domestic domains.
                </span>
              </span>
            </Fragment>
          }
          rootClassName="wordcloudsroot-class-name"
        ></Wordclouds>
      </div>
      <section className="home-customer1">
        <div className="home-header15">
          <h2 className="home-heading4">
            <span className="home-text238">
              The implicit
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text239">
              bias
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text240">
              of
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text241">commonsense</span>
            <br></br>
          </h2>
        </div>
        <div className="home-container15">
          <img
            alt="image"
            src="/images/wordcloud_commonsense-500h.jpg"
            className="home-image2"
          />
          <div className="home-container16">
            <div className="home-quote1">
              <div className="home-author1">
                <span className="home-name1">
                  <span className="home-text243">
                    The word clouds above illustrate the most frequent inferred
                    attributes for male and female characters, derived using
                    commonsense inference from events. For men, prominent
                    attributes include
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text244">victorious</span>
                  <span className="home-text245">
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text246">commanding</span>
                  <span className="home-text247">
                    , and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text248">peaceful</span>
                  <span className="home-text249">
                    , which highlight traits associated with power, leadership,
                    and control. In contrast, attributes for women prominently
                    feature
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text250">pregnant</span>
                  <span className="home-text251">
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text252">flirtatious</span>
                  <span className="home-text253">
                    , and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text254">sexy</span>
                  <span className="home-text255">
                    , emphasizing stereotypes related to physical appearance,
                    relationships, and reproductive roles.
                  </span>
                  <br className="home-text256"></br>
                  <br className="home-text257"></br>
                  <span className="home-text258">
                    These results reveal a stark contrast in how male and female
                    characters are often depicted, reinforcing gendered
                    stereotypes. Male attributes lean toward competence and
                    dominance, while female attributes are more associated with
                    sexuality, emotionality, and relational roles. This analysis
                    underscores the pervasive biases in how characters are
                    conceptualized and portrayed, reflecting broader societal
                    stereotypes.
                  </span>
                </span>
                <span className="home-location1">Briville</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container17">
        <section className="home-growth">
          <div className="home-content1">
            <div className="home-header16">
              <div className="home-header17">
                <h2 className="home-heading5">
                  <span>
                    Representation &amp;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text260">success</span>
                  <br></br>
                </h2>
              </div>
              <p className="home-caption2">
                The information that helped us get insights into the relation
                between success and gender representation of movies was the
                following: 
              </p>
            </div>
            <div className="home-testimonial"></div>
          </div>
          <div className="home-container18"></div>
        </section>
      </div>
      <div className="home-content2">
        <div className="home-objectives-list">
          <div className="objective">
            <h3 className="home-text262">Oscar nominations</h3>
            <p className="home-text263">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="objective home-objective2">
            <h3 className="home-text264">IMDB ratings</h3>
            <p className="home-text265">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="objective home-objective3">
            <h3 className="home-text266">BoxNow revenue</h3>
            <p className="home-text267">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="home-container19">
        <span className="home-text268">
          <span>
            The chart highlights a striking gender imbalance among Oscar
            nominees, where 83.6% are male and only 16.4% are female. This
            significant disparity underscores a broader trend in the film
            industry: while women&apos;s presence in film remains limited, their
            recognition in prestigious awards is even more disproportionately
            low, highlighting a persistent gap in both representation and
            success.
          </span>
          <br></br>
          <br></br>
          <span>
            This section, &quot;Representation &amp; Success&quot;, will explore
            how gender representation translates into opportunities for
            recognition and success. Are female characters less likely to play
            award-worthy roles? Does systemic bias persist in the nomination
            process?
          </span>
        </span>
        <section className="home-create">
          <iframe
            src="https://scanton-epfl.github.io/ada-figures/success_plots/oscar_gender_imbalance.html"
            className="home-iframe2"
          ></iframe>
        </section>
      </div>
      <section className="home-experience1">
        <iframe
          src="https://scanton-epfl.github.io/ada-figures/success_plots/oscar_category_gender.html"
          className="home-iframe3"
        ></iframe>
      </section>
      <div className="home-container20">
        <section className="home-experience2">
          <span className="home-text273">
            <span className="home-text274">
              The Oscar nomination data shows men getting much larger
              representation in terms of individual awards. But is a movie’s
              success related to the number of women featured in the film?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="home-text275"></br>
            <br></br>
          </span>
          <iframe
            src="https://scanton-epfl.github.io/ada-figures/success_plots/female_ratio_to_revenue_fixed.html"
            className="home-iframe4"
          ></iframe>
          <span className="home-text277">
            This plot shows us that box office revenue is largest for films with
            female casts percentages between 0.1 and 0.4. This would lead to the
            conclusion that male dominated movies are better performing, but
            this isn’t really fair to say since the vast majority of movies are
            male dominated. Nevertheless, the average box office revenue of male
            dominated films is around 192 million USD while for female dominated
            films it is 57 million USD.
          </span>
        </section>
      </div>
      <section className="home-customer2">
        <div className="home-header18">
          <h2 className="home-heading6">
            <span className="home-text278">
              Three
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text279">
              against
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text280">
              the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text281">odds</span>
            <br></br>
          </h2>
          <span className="home-text283">
            Despite the overwhelming dominance of male nominees, a few
            exceptional women have managed to break through and earn a place
            among the most nominated individuals in Oscar history. In the top 10
            of all-time Oscar nominees, only three women—Meryl Streep, Sandy
            Powell, and Colleen Atwood—have secured their spots, standing out in
            a field otherwise dominated by men.
          </span>
        </div>
        <div className="home-quotes">
          <div className="home-container21">
            <img
              alt="image"
              src="/images/meryl_streep-300h.jpg"
              className="home-image3"
            />
            <div className="home-container22">
              <div className="home-quote2">
                <div className="home-author2">
                  <span className="home-name2">Meryl Streep</span>
                  <span className="home-location2">Briville</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container23">
            <img
              alt="image"
              src="/images/sandy_powell-300h.jpg"
              className="home-image4"
            />
            <div className="home-container24">
              <div className="home-quote3">
                <div className="home-author3">
                  <span className="home-name3">Sandy Powell</span>
                  <span className="home-location3">Briville</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container25">
            <img
              alt="image"
              src="/images/colleen_atwood-200w.webp"
              className="home-image5"
            />
            <div className="home-quote4">
              <div className="home-author4">
                <span className="home-name4">Colleen Atwood</span>
                <span className="home-location4">Briville</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-behindthecamera">
        <div className="home-container26">
          <div className="home-container27">
            <div className="home-header-container">
              <div className="home-header19">
                <h2 className="home-heading7">
                  <span className="home-text284">
                    Behind the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text285">camera</span>
                  <span className="home-text286"> </span>
                  <br className="home-text287"></br>
                </h2>
              </div>
              <p className="home-caption3">
                Does gender inequality exist in production roles as well? Does a
                director&apos;s gender influence the portrayal of male and
                female characters in films?
              </p>
            </div>
          </div>
          <span className="home-text288">
            <span>
              This pie chart sends a strong message of how disproportionately
              men work as directors compared to women. This imbalance partially
              explains why men were overwhelmingly nominated for the best
              director Oscar’s award compared to women.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
          </span>
        </div>
        <iframe
          src="https://scanton-epfl.github.io/ada-figures/directors_plots/directors_gender_pie.html"
          className="home-iframe5"
        ></iframe>
      </section>
      <section className="home-experience3">
        <iframe
          src="https://scanton-epfl.github.io/ada-figures/directors_plots/avg_rating_by_director_gender_violin.html"
          className="home-iframe6"
        ></iframe>
      </section>
      <span className="home-text292">
        This plot highlights the average rating distribution of movies based on
        the director&apos;s gender, shedding light on the dynamics behind the
        camera in the film industry. While both male and female directors
        exhibit similar median ratings, the plot reveals that movies directed by
        men dominate in number, with a much broader range of ratings. In
        contrast, the tighter distribution for female directors reflects their
        significant underrepresentation in the field.
      </span>
      <iframe
        src="https://scanton-epfl.github.io/ada-figures/directors_plots/female_ratio_by_director_gender_violin.html"
        className="home-iframe7"
      ></iframe>
      <span className="home-text293">
        <span>
          The violin plot shows how the movies created by male and female
          directors vary in the female cast ratio. Interestingly, men direct
          movies with a median of 30% women cast members while women direct
          movies with a median of 44% women cast members. The distributions show
          us that female directors tend to cast more women in their movies than
          men do. Also, the distribution for female directors is more spread,
          indicating women are potentially more open to diverse cast ratios.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <br></br>
      </span>
      <iframe
        src="https://scanton-epfl.github.io/ada-figures/directors_plots/directors_number_over_time.html"
        className="home-iframe8"
      ></iframe>
      <span className="home-text297">
        <span>
          The line plot illustrates the number of directors of each gender over
          time. This plot is very telling as male directors display an
          exponential or parabolic growth pattern while female directors have
          increased minimally. This disparity suggests the presence of systemic
          barriers that disproportionately affect women in the directing
          profession. It is unlikely that the difference arises from inherent
          abilities, as there is no evidence to suggest that women are less
          capable of directing than men. Instead, the trend possibly points to
          historical biases, limited access to opportunities, or societal
          stigmas that have made entry into directing more challenging for
          women.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <br></br>
      </span>
      <section className="home-faq">
        <div className="home-header20">
          <h2 className="home-heading8">
            <span>Recap </span>
            <span className="home-text302">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-content3">
          <div className="home-column1">
            <div className="home-element1">
              <h3 className="home-header21">
                What gender imbalances exist in acting roles?
              </h3>
              <p className="home-content4">
                Women have been disproportionately cast in films across time,
                around the world, and across genres. However, in the past 80
                years, the ratio of women in movies has very slowly increased. 
              </p>
            </div>
            <div className="home-element2">
              <h3 className="home-header22">
                Are male and female characters associated with different common
                actions or events?
              </h3>
              <p className="home-content5">
                Yes, but these differences are mainly genre specific. However,
                we can generalize that men are commonly involved in aggressive
                and confrontational events, while women are commonly involved in
                acts of evasion and recipients of saving.
              </p>
            </div>
            <div className="home-element3">
              <h3 className="home-header23">
                Are women equally represented behind the camera in production
                roles?
              </h3>
              <p className="home-content6">
                No, women make up nearly 5% of all directors in our dataset.
                Male hirings as directors continue to outpace the slight growth
                in female director jobs significantly. 
              </p>
            </div>
          </div>
          <div className="home-column2">
            <div className="home-element4">
              <h3 className="home-header24">
                Are male and female actors given stereotypically roles?
              </h3>
              <p className="home-content7">
                Yes, women tend to be more associated with dumb, beautiful
                characters while men are more associated with manic, corrupt,
                and heroic characters. Both cases are harmful, but are presented
                in different ways.
              </p>
            </div>
            <div className="home-element5">
              <h3 className="home-header25">
                Is success in the movie industry correlated to gender
                representation?
              </h3>
              <p className="home-content8">
                Yes, men have received roughly 84% of the Oscar nominations and
                films with a majority of male cast members perform better on
                average in the box office than the female counterpart. This
                correlation may feel inevitable since men represent a much
                larger percentage of the film industry, but relative to the
                total number of each gender, men are actually being nominated at
                a higher rate than women. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-team">
        <div className="home-container28">
          <div className="home-container29">
            <span className="home-text304">Our Team </span>
          </div>
          <div className="home-container30">
            <div className="home-simon">
              <span className="home-text305">
                <span className="home-text306">Simon Anton</span>
                <br className="home-text307"></br>
                <br></br>
                <span>Computational Sciences and Engineering</span>
                <br></br>
              </span>
              <div className="home-container31">
                <a
                  href="https://github.com/scanton-epfl"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link10"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="home-icon22"
                  >
                    <path
                      d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="mailto:simon.anton@epfl.ch?subject="
                  className="home-link11"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon24"
                  >
                    <path
                      d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="home-kyuhee">
              <span className="home-text311">
                <span className="home-text312">Kyuhee Kim</span>
                <br className="home-text313"></br>
                <br className="home-text314"></br>
                <span>Data Science</span>
              </span>
              <div className="home-container32">
                <a
                  href="https://github.com/koreankiwi99?tab=overview&amp;from=2021-12-01&amp;to=2021-12-31"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link12"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="home-icon26"
                  >
                    <path
                      d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="mailto:kyuhee.kim@epfl.ch?subject="
                  className="home-link13"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon28"
                  >
                    <path
                      d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="home-christina">
              <span className="home-text316">
                <span className="home-text317">Christina Kopidaki</span>
                <br className="home-text318"></br>
                <br></br>
                <span>Data Science</span>
                <br></br>
              </span>
              <div className="home-container33">
                <a
                  href="https://github.com/christinakopi"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link14"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="home-icon30"
                  >
                    <path
                      d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="mailto:christina.kopidaki@epfl.ch?subject="
                  className="home-link15"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon32"
                  >
                    <path
                      d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="home-margarita">
              <span className="home-text322">
                <span className="home-text323">Margarita Mikhelson</span>
                <br className="home-text324"></br>
                <br></br>
                <span>Computer Science</span>
                <br></br>
              </span>
              <div className="home-container34">
                <a
                  href="https://github.com/Margarita-Mikhelson"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link16"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="home-icon34"
                  >
                    <path
                      d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="mailto:margarita.mikhelson@epfl.ch?subject="
                  className="home-link17"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon36"
                  >
                    <path
                      d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="home-ivan">
              <span className="home-text328">
                <span className="home-text329">Ivan Pavlov</span>
                <br className="home-text330"></br>
                <br className="home-text331"></br>
                <span className="home-text332">Data Science</span>
                <br></br>
              </span>
              <div className="home-container35">
                <a
                  href="https://github.com/pavlov200912"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link18"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="home-icon38"
                  >
                    <path
                      d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="mailto:ivan.pavlov@epfl.ch?subject="
                  className="home-link19"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon40"
                  >
                    <path
                      d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
