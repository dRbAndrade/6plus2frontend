import Header from "../components/header"
import AboutCard from "../components/about-card"
import '../styles/about.scss'
import Container from "react-bootstrap/Container"
import ToggleText from "../components/toggleText"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

const AboutUs  = ()=>{

  const developers = [
    {
      key:1,
      name:"Matheus Andrade",
      url:"https://scontent.fbel18-1.fna.fbcdn.net/v/t39.30808-6/224380060_3051443991844956_6316769821200787081_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHeFdtt3PCfPCQyPuattuWVk0O3lzilKs-TQ7eXOKUqz_TSC-Sg_9-c8ZY8Cc_y0E5xPTPr0Gvx6ZTVIpXez0Gg&_nc_ohc=4UGzqYK5X4gAX8JdTKn&tn=9a9UITIeJL0pwdHA&_nc_ht=scontent.fbel18-1.fna&oh=3092b277cbeaaed755cba71710fc198c&oe=61B2B33E",
      description:"Metaleiro, nerd, geek, otaku, amante da comédia. Gosto de consertar bugs (que eu mesmo crio sem querer)",
      linkedin:"https://www.linkedin.com/in/matheus-drb-andrade/",
      github:"https://github.com/dRbAndrade"
    },
    {
      key:2,
      name:"Luiza Dragonetti",
      url:"https://bit.ly/3D9hlgt",
      description:"Apaixonada por tecnologia e design, atualmente estudante de programação.",
      linkedin:"https://www.linkedin.com/in/luizadragonetti",
      github:"https://github.com/lulutti"
    },
    {
      key:3,
      name:"Flávio Malto de Oliveira",
      url:"https://bit.ly/31mFX88",
      description:"Pai de menina, atleta nas horas vagas e apaixonado por tecnologia, interrompi a carreira de engenheiro para me dedicar à programação.",
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

  const aboutText = {

    title:"Sobre o projeto",
    description: "E-commerce desenvolvido para o projeto final integrador do 3º bimestre do curso Certified Tech Developer oferecido pela Digital House em parceria com a Globant e Mercado Livre.",

  }

  const toolsText = {
    title:"Tecnologias utilizadas",
    description:"Bootstrap, React, Spring Boot, Scss, MySQL"
  }
 
  return(
    <>
      <Helmet><title>Sobre nós | 6pluS2store</title></Helmet>
      <div>
        <Header/>
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
            <ToggleText toggle={aboutText}/>
            <ToggleText toggle={toolsText}/>

          </Container>
        </main>
      </div>
      <Footer/>
    </>
    )

}

export default AboutUs;