/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        {' '}
        Cadastro de Categoria:
        {' '}
        {values.nome}
        {' '}
      </h1>
      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);

          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {' '}
        {/* <div>
                <label>
                  Descrição:
                  <textarea
                    type="text"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}
                  />
                </label>
              </div> */}
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {' '}
        {/* <div>
                <label>
                  Cor:
                  <input
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}
                  />
                </label>
              </div> */}
        <Button> Cadastrar </Button>
        {' '}
      </form>
      <ul>
        {' '}
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {' '}
            {categoria.nome}
            {' '}
          </li>
        ))}
        {' '}
      </ul>
      <Link to="/"> Ir para home </Link>
      {' '}
    </PageDefault>
  );
}

export default CadastroCategoria;
