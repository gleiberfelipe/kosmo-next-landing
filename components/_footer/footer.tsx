
"use client"



import { HeaderBox } from './style';


const RealFooter = () => {

    return (
        <HeaderBox>
<hr className='special' />
            <div className="links">
                <a href="">Quem Somos</a>
                <a href=""> Atmosfera</a>
                <a href="">Clube de Vantagens</a>
                <a href="">Soluções</a>
                <a href="">Criador</a>
                <a href="">Membro</a>
                <a href="">Investidor</a>
            </div>
            <hr />
            <p>Kosmos CNPJ: 22.543.331/0001-00</p>
            <p>Rua Vespasiano - Vila Romana</p>
            <p>São Paulo/SP - CEP: 05044-050</p>
            <hr />
            <p>Horario de funcionamento: 9h as 18h</p>
            <p>telefone: (11) 3862-4497</p>
            <p>E-mail: contato@grupoks.info</p>

        </HeaderBox>
    );
};

export default RealFooter;