# 🎬 Netflix Clone — React

> Веб-приложение с интерфейсом в стиле Netflix. Авторизация, поиск фильмов и просмотр трейлеров.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=flat-square)](https://netflexclone-l9i95do1f-olegs-projects-dbc9c07d.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 📖 О проекте

Приложение с интерфейсом в стиле Netflix. Пользователи могут зарегистрироваться, войти в аккаунт, искать фильмы и сериалы через TMDB API и смотреть трейлеры прямо внутри приложения. После авторизации приложение запоминает имя пользователя и отображает его в интерфейсе.

---

## ✨ Функциональность

- 🔐 Регистрация и вход через Firebase Authentication
- 👤 Отображение имени пользователя после авторизации
- 🔍 Поиск фильмов и сериалов в реальном времени
- 🎥 Просмотр трейлеров внутри приложения
- 📜 Горизонтальная прокрутка рядов с фильмами
- 📱 Адаптивный интерфейс для мобильных и десктоп

---

## 🛠️ Технологии

| Технология | Назначение |
|---|---|
| **React** | UI и компонентная архитектура |
| **Firebase Auth** | Регистрация и авторизация пользователей |
| **TMDB API** | Данные о фильмах и сериалах |
| **Vite** | Сборка и dev-сервер |

---

## 📸 Скриншоты

![Главная страница](screens/homepage.png)
![Поиск](screens/search.png)
![Войти](screens/signin.png)
![Регистрация](screens/singup.png)
![Трейлер фильма](screens/trailer.png)

---

## ⚠️ Ограничения

- Поддерживаются преимущественно англоязычные трейлеры
- Часть фильмов может быть недоступна в зависимости от региона

---

## 🚀 Запуск локально

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/op7en/netflexclone1.git
   cd netflexclone1
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Создайте `.env` файл и добавьте свои ключи:
   ```
   VITE_FIREBASE_API_KEY=ваш_ключ
   VITE_TMDB_API_KEY=ваш_ключ
   ```

4. Запустите проект:
   ```bash
   npm run dev
   ```

---

## 🌐 Демо

👉 **[https://netflexclone-l9i95do1f-olegs-projects-dbc9c07d.vercel.app/](https://netflexclone-l9i95do1f-olegs-projects-dbc9c07d.vercel.app/)**

---

## 👤 Автор

**Oleg Perevalov**
[GitHub](https://github.com/op7en)
