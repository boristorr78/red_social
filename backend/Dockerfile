# Usa una imagen de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Exponemos el puerto que utilizará el backend
EXPOSE 3001

# Inicia el servidor
CMD ["node", "app.js"]
