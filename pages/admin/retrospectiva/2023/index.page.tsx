import { NextPage } from "next"
import { Container, Section } from "./2023"
import { useRouter } from "next/router"


const VinteTres: NextPage = () => {
  const router = useRouter()
  
  return (
      <Container>
        <Section id="intro">
          <header>
            <h1>✨2023✨</h1>
            <h3>retrospectiva</h3>
          </header>
          <div id="intro-text">
            <h2>Onde tudo começou...</h2>
            <p>O nosso sistema começou a ser utilizado em larga escala no ano de 2023, conseguimos disponibilizar ele para nossos clientes (Escolas, Órgãos Governamentais, etc) e, com a sua ajuda, ajustamos e melhoramos o que era preciso. Sabemos que não usamos ainda da forma ideal, mas sei que de alguma forma, conseguimos ajudar tanto nossos clientes quanto nós mesmos. Essa retrospectiva é uma forma de reconhecimento e agradecimento para você que com muito esforço e trabalho, ajuda a alimentar milhares de crianças pelo Estado de Goiás.</p>
            <p>Leia de cima para baixo, da esquerda para a direita, com muita calma e usem as setas para navegar e acompanhar alguns dados e curiosidades de 2023...</p>
            <a href="#first">⇓</a>
          </div>
        </Section>
        <Section id="first">
          <h1>o primeiro pedido</h1>
          <h2>no primeiro mês, uma segunda-feira, dia 30/01/2023 <br/>foi realizado o primeiro pedido no sistema</h2>
          <p>E foi para a Prefeitura de Aparecida de Goiânia! (Agradecimento em especial para a Ingrid ;D)</p>
          <div id="navigation">
            <a href="#second">⇓</a>&nbsp;
            <a href="#intro">⇑</a>
          </div>
        </Section>
        <Section id="second">
          <h1>quem faz mais?</h1>
          <h3>abaixo estão os principais usuários e seus pedidos no nosso sistema:</h3>
          <ol>
            <li>Prefeitura de Aparecida de Goiânia - 1283 pedidos</li>
            <li>CEPI Cultura e Cooperativismo - 635 pedidos</li>
            <li>CEPI Dr. Antônio R. Gomes da Frota - 603 pedidos</li>
            <li>CEPI Carlos Alberto de Deus - 573 pedidos</li>
            <li>CEPI Bandeirante - 562 pedidos</li>
          </ol>
          <p>“Quais sabores de suco têm aí?” - Ribas</p>
          <div id="navigation">
            <a href="#third">⇓</a>&nbsp;
            <a href="#first">⇑</a>
          </div>
        </Section>
        <Section id="third">
          <h1>clientela JUBO</h1>
          <h2>constatamos que existem <b><u>204 clientes distintos</u></b><br />com no mínimo um pedido feito no ano de 2023<br /><p>consideramos apenas pedidos com status ‘confirmado’</p></h2> 
          <p>“Porque pra mim, quem tem fome é sempre cliente.” - Vinsmoke Sanji</p>
          <div id="navigation">
            <a href="#fourth">⇓</a>&nbsp;
            <a href="#second">⇑</a>
          </div>
        </Section>
        <Section id="fourth">
          <h1>siga bem, caminhoneiro</h1>
          <h2>
            contando todos os veículos (vans, caminhões, furgões, etc), foram <br />percorridos <b><u>768.431,08km</u></b> no ano de 2023<br />
            <p>para dar a volta na terra é necessário percorrer a distância de <br />40.072 km, isso quer dizer que poderíamos dar mais de 19 voltas ao mundo!</p>
          </h2>
          <p>Pedro e Bino nunca passariam por uma cilada se tivessem o Léo cuidando da frota deles...</p>
          <div id="navigation">
            <a href="#fifth">⇓</a>&nbsp;
            <a href="#third">⇑</a>
          </div>
        </Section >
        <Section id="fifth">
          <h1>monopólio licitatório?</h1>
          <h2>temos clientes distribuídos em <b>56 cidades</b><br /> o que dá <b><u>21%</u></b> do território de Goiás!</h2>
          <p>“Uma licitação de merenda em aberto? Me segura........” - Philipe Estevão</p>
          <div id="navigation">
            <a href="#sixth">⇓</a>&nbsp;
            <a href="#fourth">⇑</a>
          </div>
        </Section>
        <Section id="sixth">
          <h1>a refeição dos campeões</h1>
          <h2>imaginemos um PF com arroz, feijão, macarrão, carne e salada e <br />vejamos a quantidade pedida de cada um desses itens no ano de 2023</h2>
          <ul>
            <li>Arroz: 5224 pacotes</li>
            <li>Feijão: 5123 pacotes</li>
            <li>Macarrão: 4760 pacotes</li>
            <li>Carne: 10837 kg</li>
            <li>Salada: 1455 und/mç de alface e 4763kg de tomate</li>
          </ul>
          <p>“Chama” - Alex Poatan do UFC ao ver um PF desses na sua frente</p>
          <div id="navigation">
            <a href="#seventh">⇓</a>&nbsp;
            <a href="#fifth">⇑</a>
          </div>
        </Section>
        <Section id="seventh">
          <h1>comer para poder crescer</h1>
          <h2>
            sabemos que muitas crianças vão a escola somente por um prato de comida<br />
            e com os nossos atendimentos, aproximadamente <b><u>110 mil crianças</u></b><br />
            do estado de Goiás, podem pelo menos ter uma refeição feita na escola<br />
          </h2>
          <p>Um bom aprendizado começa com uma barriga cheia</p>
          <div id="navigation">
            <a href="#finale">⇓</a>&nbsp;
            <a href="#sixth">⇑</a>
          </div>
        </Section>
        <Section id="finale">
          <h1>já é natal e ano novo também!</h1>
          <h2>o ano de 2023 foi extremamente desafiador e sem o nosso trabalho em <br />equipe, tudo o que alcançamos/realizamos seria impossível!</h2>
          <h2>um agradecimento sincero a todos os colaboradores da “Padaria” e o <br />desejo de que possamos continuar evoluindo e crescendo cada vez mais.</h2>
          <p>Nos vemos no final do ano que vem ;D</p>
          <div id="navigation">
            <a href="#seventh">⇑</a>&nbsp;
            <a href="/admin/dashboard">⇓ dashboard</a>
          </div>
        </Section>
      </Container>
    
  )
}

export default VinteTres