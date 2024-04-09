import { useState } from "react";
import gitLogo from "../assets/github-logo.png";
import Input from "../components/Input/Input.jsx";
import ItemRepo from "../components/ItemRepo/ItemRepo.jsx";
import Button from "../components/Button/Button.jsx";
import "./styles.css";
import { api } from '../services/api';

const Index = () => {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
      } else {
        console.log('Repositório já adicionado');
      }
    } catch (error) {
      console.error('Erro ao buscar repositório:', error);
    }
  };

  const handleRemoveRepo = (repoId) => {
    setRepos(prev => prev.filter(repo => repo.id !== repoId));
  };

  return (
    <div>
      <img src={gitLogo} alt="gitLogo" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </div>
  );
};

export default Index;
