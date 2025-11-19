import { categories, heroSlides } from '../data/mockData'
import HeroSlider from '../components/HeroSlider'
import Categories from '../components/Categories'

const HomePage = () => {
  return (
    <>
      <HeroSlider heroSlides={heroSlides} />
      <Categories categories={categories} />
    </>
  )
}

export default HomePage