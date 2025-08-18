# Imagen base ligera
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Instalar deps (aprovecha cache)
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar el resto
COPY . .

# Cloud Run usa PORT
ENV PORT=8080

# Exponer (informativo)
EXPOSE 8080

# Comando de arranque
CMD ["npm", "start"]
