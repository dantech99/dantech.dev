type Links = {
  name: string;
  link: string;

}

type About = {
  title: string;
  description: string;
  links: Links[];
}

const aboutme: About = {
  title: "About Me",
  description: "jdfslkdfe ljenflejf lwieflawkedfe nflwiej efwejifhweif eflwieflkeefe  efnwieflwf efliwefe feinfoweffwef oIWEFwenfi lwiejfwefe ejfWEJFEF EIJFEJejfefe ijefnlejfeefe efnefdnfejflef efjefnee fef eflkefefeof efefwlekjfwlekfw;lkefwefekjfwejf;lwkwefel efwef;klj efwe efwefkwe efbwlhfwef wefbwleefiwewbefwefiw efweihfwebfiew fwefwe feifhbwifw f efweoflwe fkewfiwef wefbwf webfe fefbewe",

  links: [
    {
      name: "Descarga CV",
      link: "/"
    }
  ]
}

export default aboutme;