import React from 'react';
import './styles.css';

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <div className='itemRepo'>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div className='btn'>
      <a className='btnRepo' href={repo.html_url} target="_blank" rel="noopener noreferrer"><button>Ver repositório</button></a>
      <button onClick={handleRemove}>Remover</button>
      </div>
      <hr/>
    </div>
  );
}

export default ItemRepo;
