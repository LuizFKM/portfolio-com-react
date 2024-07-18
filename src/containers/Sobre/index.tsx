import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Illum sapiente velit, quod ipsum est natus id,
      nam ipsam tempora vitae quia distinctio quam saepe
      delectus? Tempore, debitis expedita?
    </Paragrafo>
    <GithubSecao>
      <img src="https://copyreadmeservicefkm-luizfkms-projects.vercel.app/api?username=luizfkm&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://copyreadmeservicefkm-luizfkms-projects.vercel.app/api/top-langs/?username=luizfkm&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
