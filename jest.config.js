module.exports = {
  roots: ["<rootDir>/tests"], // Adicione o diretório 'tests' aqui
  testMatch: ["**/tests/**/*.js"], // Atualize o padrão de teste
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/tests/$1",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
