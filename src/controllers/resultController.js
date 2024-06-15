// Importa o modelo resultModel que contém as funções para interagir com a base de dados dos resultados
const resultModel = require('../models/resultModel');

// Função para salvar um novo resultado
const saveResult = (req, res) => {
  // Obtém o valor de 'house' do corpo da requisição
  const { house } = req.body;

  // Verifica se o campo 'house' está presente no corpo da requisição
  if (!house) {
    console.error('House is required'); // Loga um erro no console
    // Retorna uma resposta de erro 400 (Bad Request) se 'house' não estiver presente
    return res.status(400).json({ error: 'House is required' });
  }

  // Loga no console a tentativa de salvar o resultado
  console.log('Attempting to save result:', { house });

  // Chama a função saveResult do resultModel para salvar o resultado no banco de dados
  resultModel.saveResult(house, (err, result) => {
    // Verifica se houve um erro ao salvar o resultado
    if (err) {
      console.error('Error saving result:', err); // Loga o erro no console
      // Retorna uma resposta de erro 500 (Internal Server Error) se houve um problema ao salvar
      return res.status(500).json({ error: 'Error saving result' });
    }
    // Loga no console que o resultado foi salvo com sucesso
    console.log('Result saved successfully:', result);
    // Retorna uma resposta de sucesso 200 (OK) com uma mensagem indicando que o resultado foi salvo
    res.status(200).json({ message: 'Result saved successfully' });
  });
};

// Função para obter todos os resultados
const getResults = (req, res) => {
  // Loga no console a tentativa de obter os resultados
  console.log('Attempting to get results');

  // Chama a função getResults do resultModel para obter todos os resultados do banco de dados
  resultModel.getResults((err, results) => {
    // Verifica se houve um erro ao obter os resultados
    if (err) {
      console.error('Error getting results:', err); // Loga o erro no console
      // Retorna uma resposta de erro 500 (Internal Server Error) se houve um problema ao obter os resultados
      return res.status(500).json({ error: 'Error getting results' });
    }
    // Loga no console que os resultados foram obtidos com sucesso
    console.log('Results retrieved successfully:', results);
    // Retorna uma resposta de sucesso 200 (OK) com os resultados obtidos
    res.status(200).json(results);
  });
};

// Exporta as funções saveResult e getResults para que possam ser usadas em outras partes da aplicação
module.exports = {
  saveResult,
  getResults
};
