import React from 'react';
import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import { Card, LinkBotao } from "./styles";

interface ProjetoProps {
  name: string;
  description: string | null;
  url: string;
}

const Projeto: React.FC<ProjetoProps> = ({ name, description, url }) => (
  <Card>
    <Titulo>{name}</Titulo>
    <Paragrafo tipo="secundario">{description || 'Descrição não disponível'}</Paragrafo>
    <LinkBotao href={url} target="_blank" rel="noopener noreferrer">Visualizar</LinkBotao>
  </Card>
);

export default Projeto;
