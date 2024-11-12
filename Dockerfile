# Use uma imagem Node.js oficial como base
FROM node:18-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e o package-lock.json (ou yarn.lock) para dentro do contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install --production

# Copie todo o código fonte da aplicação para dentro do contêiner
COPY . .

# Compile o código TypeScript para JavaScript
RUN npm run build

# Exponha a porta em que a API irá rodar
EXPOSE 3000

# Defina o comando para iniciar o servidor
CMD ["npm", "run", "start"]
