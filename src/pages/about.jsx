import Header from "../components/header"
import AboutCard from "../components/about-card"
import '../styles/about.scss'
import Container from "react-bootstrap/Container"

const AboutUs  = ()=>{

  const developers = [
    {
      key:1,
      name:"Matheus Andrade",
      url:"https://bit.ly/3lqOT3B",
      description:"Dev backend se aventurando no frontend",
      linkedin:"https://www.linkedin.com/in/matheus-drb-andrade/",
      github:"https://github.com/dRbAndrade"
    },
    {
      key:2,
      name:"Luiza Dragonetti",
      url:"https://bit.ly/3D9hlgt",
      description:"DEPOIS EU FAÇO ISSO, ANDRADE",
      linkedin:"https://www.linkedin.com/in/luizadragonetti",
      github:"https://github.com/lulutti"
    },
    {
      key:3,
      name:"Flávio Malto",
      url:"https://bit.ly/31mFX88",
      description:"Só sei que nada sei",
      linkedin:"https://www.linkedin.com/in/flávio-malto-de-oliveira-03215a90/",
      github:"https://github.com/FlavioMalto"
    },
    {
      key:4,
      name:"Matheus Andrade",
      url:"https://bit.ly/3lqOT3B",
      description:"Dev backend se aventurando no frontend",
      linkedin:"https://www.linkedin.com/in/matheus-drb-andrade/",
      github:"https://github.com/dRbAndrade"
    },
    {
      key:5,
      name:"Luíza Dragonetti",
      url:"https://bit.ly/3D9hlgt",
      description:"DEPOIS EU FAÇO ISSO, ANDRADE",
      linkedin:"https://www.linkedin.com/in/luizadragonetti",
      github:"https://github.com/lulutti"
    },
    {
      key:6,
      name:"Flávio Malto",
      url:"https://bit.ly/31mFX88",
      description:"Só sei que nada sei",
      linkedin:"https://www.linkedin.com/in/flávio-malto-de-oliveira-03215a90/",
      github:"https://github.com/FlavioMalto"
    },
    {
      key:7,
      name:"Matheus Andrade",
      url:"https://bit.ly/3lqOT3B",
      description:"Dev backend se aventurando no frontend",
      linkedin:"https://www.linkedin.com/in/matheus-drb-andrade/",
      github:"https://github.com/dRbAndrade"
    },
    {
      key:8,
      name:"Luíza Dragonetti",
      url:"https://bit.ly/3D9hlgt",
      description:"DEPOIS EU FAÇO ISSO, ANDRADE",
      linkedin:"https://www.linkedin.com/in/luizadragonetti",
      github:"https://github.com/lulutti"
    }
  ]
 
  return(
    <>
      <Header></Header>
      <Container className="mt-5">
        <div className="card-container">
        {developers.map(e=>{
          return(
            <AboutCard key={e.key} name={e.name} url={e.url} github={e.github}
            description = {e.description} linkedin = {e.linkedin}></AboutCard>
          )
        })}
        </div>
      </Container>
    </>
    )

}

export default AboutUs;