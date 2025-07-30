import Slider from "@/components/Slider"
import "./MovieDetails.scss"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import PersonCard from "@/components/PersonCard"
import Button from "@/components/Button"
import ReviewCard from "@/components/ReviewCard"
import Tags from "@/components/Tags"
import { Icon } from "minista"
import Ratings from "@/components/Ratings"

const MovieDetails = () => {
  const titleId = "movie-details-title"
  const castSliderNavigationId = "movie-card-slider-navigation"
  const castItems = [
    { imgSrc: "/src/assets/images/people/cast1.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/src/assets/images/people/cast2.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/src/assets/images/people/cast3.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/src/assets/images/people/cast4.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/src/assets/images/people/cast5.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/src/assets/images/people/cast6.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/src/assets/images/people/cast7.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/src/assets/images/people/cast8.jpg", imgAlt: "Ivan Ivanov" },
  ]

  const reviewItems = [
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
  ]

  return (
    <section className="movie-details container" aria-labelledby={titleId}>
      <h2 className="visually-hidden" id={titleId}>
        Detailed move information
      </h2>
      <div className="movie-details__main">
        <div className="movie-details__panel">
          <div className="movie-details__group">
            <h3 className="movie-details__title">Description</h3>
            <div className="movie-details__description">
              <p>
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.
              </p>
            </div>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Cast</h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              mode="rounded"
              buttonMode="black-08"
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: "auto",
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
          >
            {castItems.map((castItem, index) => (
              <PersonCard {...castItem} key={index} />
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Reviews</h3>
            <Button
              label="Add Your Review"
              mode="black-08"
              iconName="plus"
              href="/"
            />
          </header>
          <Slider
            navigationMode="rounded"
            isNavigationHiddenMobile={false}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
          >
            {reviewItems.map((reviewItem, index) => (
              <ReviewCard {...reviewItem} key={index} />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel">
          <div className="movie-details__groups">
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="calendar" />
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time className="h6" datetime="2022">
                  2022
                </time>
              </div>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="translate" />
                <span>Available Languages</span>
              </h3>
              <Tags
                items={["English", "Hindi", "Tamil", "Telegu", "Kannada"]}
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="star" />
                <span>Ratings</span>
              </h3>
              <Ratings
                items={[
                  {
                    title: "IMDb",
                    ratingValue: 4.5,
                  },
                  {
                    title: "StreamVibe",
                    ratingValue: 4,
                  },
                ]}
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="genres" />
                <span>Gernes</span>
              </h3>
              <Tags item={["Action", "Adventure"]} />
            </div>
            //ЗАКОНЧИТЬ
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="calendar" />
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time className="h6" datetime="2022">
                  2022
                </time>
              </div>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="calendar" />
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time className="h6" datetime="2022">
                  2022
                </time>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MovieDetails
