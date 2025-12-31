# Базовий образ
FROM node:20-alpine

# Створюємо папку для додатку
WORKDIR /app

# Копіюємо package.json і package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо решту файлів
COPY . .

# Виставляємо порт, який слухає Express
EXPOSE 5000

# Команда для запуску сервера
CMD ["npm", "start"]
