import React, { useEffect, useState } from 'react';
import Projeto from "../../components/Projeto";
import Titulo from "../../components/Titulo";
import { Lista } from './styles';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

const Projetos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/luizfkm/repos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Repo[] = await response.json();
        setRepos(data.slice(0, 8)); // Limitar a 8 projetos
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('An unknown error occurred'));
        }
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section>
      <Titulo>Projetos</Titulo>
      <Lista>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Projeto
              name={repo.name}
              description={repo.description}
              url={repo.html_url}
            />
          </li>
        ))}
      </Lista>
    </section>
  );
};

export default Projetos;
