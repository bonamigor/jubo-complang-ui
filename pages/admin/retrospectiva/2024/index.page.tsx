import { NextPage } from "next"
import { Container, Section } from "./2024"
import { useRouter } from "next/router"
import 'animate.css';


const VinteQuatro: NextPage = () => {
  const router = useRouter()
  
  return (
      <Container>
        <Section id="intro">
          <header>
            <h1><span className="animate__animated animate__flash animate__delay-4s">🎉</span><span className="animate__animated animate__bounceInDown">2</span><span className="animate__animated animate__fadeInTopRight animate__delay-3s">0</span><span className="animate__animated animate__bounceInDown animate__delay-2s">2</span><span className="animate__animated animate__bounceInDown animate__delay-1s">4</span><span className="animate__animated animate__flash animate__delay-4s">🎆</span></h1>
            <h2 className="animate__animated animate__fadeInLeft animate__delay-2s">retrospectiva</h2>
          </header>
          <div id="intro-text">
            <h2>Aniversário de 1 ano</h2>
            <p>Muito trabalho feito, muito trabalho por fazer... e, quando você acha que acabou, sempre chega mais um pouquinho, né? Esse foi o resumo do ano de 2024 aqui na nossa &quot;Padaria&quot;! Além de atender várias escolas, conseguimos melhorar vários processos internos e até realizar melhorias no sistema. Foi, com certeza, um ano de muita evolução, comprometimento e, claro, muito trabalho (já mencionei trabalho hoje? 😅). Mais uma vez, nosso muito obrigado a você, que faz parte disso tudo e ajuda a transformar milhares de vidas. Bora para mais? 🧡</p>
            <p>Já se acostumaram com retrospectiva?<br />Basta ler com calma e paciência, usando as setas (não do teclado, da página mesmo!) para navegar para cima e para baixo.</p>
            <a href="#first">próximo</a>
          </div>
        </Section>
        <Section id="first">
        <h1>os ganhadores</h1>
          <h3>abaixo estão os principais usuários e seus pedidos no nosso sistema:</h3>
          <ol>
            <li>CEPI Bandeirante - 411 pedidos</li>
            <li>CEPI Pré-Universitário - 400 pedidos</li>
            <li>CEPI Novo Horizonte - 387 pedidos</li>
            <li>CEPI Carlos Alberto de Deus - 386 pedidos</li>
            <li>CEPI Dom Abel SU - 382 pedidos</li>
          </ol>
          <p>Não consideramos a Pref. de Aparecida (1326 pedidos) para dar espaço a outras escolas<br />E para aqueles que sentiram falta do Ribas, ele ficou em 8º lugar com 365 pedidos.</p>
          <div id="navigation">
            <a href="#second">próximo</a>&nbsp;
            <a href="#intro">voltar</a>
          </div>
        </Section>
        <Section id="second">
          <h1>o mês mais corrido</h1>
          <h2>Outubro teve o maior número de pedidos do ano<br />sendo <b><u>2.111</u></b> pedidos</h2>
          <p>O mês das bruxas foi o mais caótico. Coincidência?</p>
          <div id="navigation">
            <a href="#third">próximo</a>&nbsp;
            <a href="#first">voltar</a>
          </div>
        </Section>
        <Section id="third">
          <h1>quantidade de pedidos</h1>
          <h2>houve um aumento de 22,81% de pedidos em 2024<br />fomos de <b><u>14.511</u></b> para <b><u>18.800</u></b> pedidos!</h2> 
          <p>Quem pediu, pediu — e em 2024, foi muita gente pedindo! 😄</p>
          <div id="navigation">
            <a href="#fourth">próximo</a>&nbsp;
            <a href="#second">voltar</a>
          </div>
        </Section>
        <Section id="fourth">
        <h1>quem dá mais?</h1>
          <h3>veja os pedidos mais caros do sistema no ano de 2024:</h3>
          <ol>
            <li>Ministério Filantrópico Terra Fértil - R$36.399,99 (22/11)</li>
            <li>CPMG Hugo de Carvalho Ramos - R$34.499,99 (23/07)</li>
            <li>Ministério Filantrópico Terra Fertil - R$28.599,99 (21/02)</li>
            <li>CEPI João Carneiro - R$19.999,98 (31/05)</li>
            <li>CEPMG de Itauçu - R$19.499,99 (09/02)</li>
          </ol>
          <p>Eu já não sei mais se esse ministério é filantrópico ou se essa terra que é fértil demais! 😄</p>
          <div id="navigation">
            <a href="#fifth">próximo</a>&nbsp;
            <a href="#third">voltar</a>
          </div>
        </Section >
        <Section id="fifth">
        <h1>feras da logística?</h1>
          <h2>
            foram percorridos <b>329.312,59km</b> esse ano<br />
            são <b>439.118,49km</b> (-57,15%) a menos que 2023!
          </h2>
          <p>É a &quot;padaria&quot; ou a Coca-Cola com uma logística dessas?</p>
          <div id="navigation">
            <a href="#sixth">próximo</a>&nbsp;
            <a href="#fourth">voltar</a>
          </div>
        </Section>
        <Section id="sixth">
          <h1>comidas e seus tipos</h1>
          <h2>aqui estão listados os produtos mais pedidos por tipos:</h2>
          <ul>
            <li>Legume: Cebola (4047kg)</li>
            <li>Verdura: Repolho (2861kg)</li>
            <li>Proteína: Peito de Frango (2056kg)</li>
            <li>Cereal: Arroz (17100kg)</li>
            <li>Fruta: Tomate (3145kg)</li>
            <li>Panificado: Pão Francês (2147kg)</li>
          </ul>
          <p>Esse é um cardápio de respeito, não é?</p>
          <div id="navigation">
            <a href="#seventh">próximo</a>&nbsp;
            <a href="#fifth">voltar</a>
          </div>
        </Section>
        <Section id="seventh">
          <h1>um banquete de impacto</h1>
          <h2>
            fizemos o seguinte cálculo:
          </h2>
          <h3>
            <b><u>(quantidade de alunos * refeições feitas na escola) * dias letivos</u></b>
          </h3>
          <h2>
            e descobrimos que foram servidas <br />mais de <b><u>66 milhões</u></b> de refeições em 2024.<br />
          </h2>
          <p>Se fizermos uma fileira com essa quantidade de pratos servidos, daríamos meia volta ao mundo!</p>
          <div id="navigation">
            <a href="#finale">próximo</a>&nbsp;
            <a href="#sixth">voltar</a>
          </div>
        </Section>
        <Section id="finale">
          <h1>e vai se criando um clima de final de ano...</h1>
          <h3>
            Chegamos ao fim da nossa retrospectiva 2024, mas o trabalho continua! 🚀<br />
            Este ano, enfrentamos desafios, superamos metas e, acima de tudo, fizemos a diferença.<br />
            Cada pedido, cada entrega, cada refeição servida trouxe mais do que números — trouxe impacto real na vida de milhares de pessoas.
          </h3>
          <h3>
          A todos os colaboradores da &quot;Padaria&quot;, um enorme obrigado. Vocês são as mãos que moldam o pão, <br />
          o coração que move o sistema e a força que garante nosso sucesso! 🧡
          </h3>
          <h3>
            Agora, bora descansar (um pouquinho, vai!) e recarregar as energias para 2025.<br />
            Porque o próximo ano promete ainda mais desafios, conquistas e histórias para contar.<br />
            Nos vemos na próxima retrospectiva! ✨
          </h3>
          <h3>
            Com gratidão e expectativa,<br />
            Da &quot;Padaria&quot; para a &quot;Padaria&quot;.
          </h3>
          <div id="navigation">
            <a href="#intro">voltar ao início</a>
            <a href="/admin/dashboard">ir p/ o dashboard</a>
          </div>
        </Section>
      </Container>
    
  )
}

export default VinteQuatro