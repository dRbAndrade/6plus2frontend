import Header from "../components/header"
import AboutCard from "../components/about-card"
import '../styles/about.scss'
import Container from "react-bootstrap/Container"
import { Helmet } from "react-helmet"

const AboutUs  = ()=>{

  const developers = [
    {
      key:1,
      name:"Matheus Andrade",
      url:"https://bit.ly/3lqOT3B",
      description:"Metaleiro, nerd, geek, otaku, amante da comédia. Gosto de consertar bugs (que eu mesmo crio sem querer)",
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
      name:"Débora Beatriz Figueiró",
      url:"https://bit.ly/3rvC4sz",
      description:"Musicista, vegana, professora, iniciante em programação e prestes a se tornar mãe de primeira viagem.",
      linkedin:"https://www.linkedin.com/in/d%C3%A9bora-beatriz-figueir%C3%B3-449920207/",
      github:"https://github.com/deborabeatriz-f"
    },
    {
      key:5,
      name:"Nayla Honorato",
      url:"https://i.ibb.co/HY3z0rT/photo01.jpg",
      description:"Sou uma antiga amante da tecnologia. Em 05/21 decidi dar uma reviravolta na minha vida profissional e me dedicar 100% a essa área.",
      linkedin:"https://www.linkedin.com/in/naylahonorato",
      github:"https://github.com/naylahonorato"
    },
    {
      key:6,
      name:"Ruth Teixeira",
      url:"https://i.ibb.co/mTyw20f/Whats-App-Image-2021-12-02-at-4-06-19-PM.jpg",
      description:"Estudante de Programação, estudante de Italiano, prof de Inglês, prof de dança, vegana e apaixonada pelos animais",
      linkedin:"https://www.linkedin.com/in/ruth-teixeira/",
      github:"https://github.com/Ruthi-ctd"
    },
    {
      key:7,
      name:"Ravi Honorato",
      url:"https://bit.ly/31qWus6",
      description:"Dei um susto na mamãe com minha chegada, uma semana antes de começar o curso. Mas seguimos aqui firmes e fortes para a conclusão do curso.",
      linkedin:"",
      github:""
    },
    {
      key:8,
      name:"Eva Morena Figueiró",
      url:"https://ih1.redbubble.net/image.2124899359.4563/st,small,507x507-pad,600x600,f8f8f8.jpg",
      description:"Filha de dois alunos do curso CTD, nasce em março de 2022 e terá como fiel escudeiro um boxer chamado Dom Vito Corleone.",
      linkedin:"",
      github:""
    }
  ]
 
  return(
    <>
      <Helmet>
        <title>Sobre nós | 6pluS2store</title>
      </Helmet>
      <Header></Header>
      <main>
        <Container>
          <div className="card-container">
          {developers.map(e=>{
            return(
              <AboutCard key={e.key} name={e.name} url={e.url} github={e.github}
              description = {e.description} linkedin = {e.linkedin}></AboutCard>
            )
          })}
          </div>
        </Container>
      </main>
    </>
    )

}

export default AboutUs;