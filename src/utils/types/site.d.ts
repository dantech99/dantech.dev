export interface SiteConfig {
  intro: IntroBasic
  work: Array<Work>
  project: Array<Projects>
  skill: Array<Skills>
  about: About

}

interface IntroBasic {
  image: string
  label: string
  name: string
  url: string
  description: string
  social: Array<Social>

}

interface Social {
  name: string
  link: string
}


