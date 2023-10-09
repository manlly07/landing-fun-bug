import Image from 'next/image'
import Navbar from './components/Navbar'
import { Fira_Code } from 'next/font/google'
import HeroSection from './components/HeroSection'
import Quote from './components/Quote'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import SkillSection from './components/SkillSection'
import AboutusSection from './components/AboutusSection'

const firacode = Fira_Code(
  {
    weight: '400',
    subsets: ['latin']
  }
)
export default function Home() {
  return (
    <main className={"flex flex-col min-h-screen bg-background " + firacode.className}>
      <Navbar />
      <div className='max-w-5xl w-full mt-24 mx-auto py-4'>
        <HeroSection />
        <ProjectSection />
        <SkillSection />
        <AboutusSection />
        <ContactSection />
      </div>
    </main>
  )
}
