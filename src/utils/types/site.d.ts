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

}

interface Work {
  label: string
  title: string
  description: string
  link: string
}

interface Projects {
  title: string
  tech: Array<Tech>
  description: string
  links: Array<Links>
  image: string
}

interface Tech {
  name:  string
  icon: Array<string>
}

interface Links {
  name: string
  url: string
}

interface Skills {
  name: string
  level: string
  keywords: Array<string>
}

interface About {
  title: string
  description:string
  image: string
}


