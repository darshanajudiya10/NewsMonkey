# 🐵 NewsMonkey

**NewsMonkey** is a daily news web application built with React that fetches and displays the latest news articles across various categories in real time.

---

## 🚀 Features

- 📰 Browse latest news from multiple categories (Technology, Sports, Entertainment, Business, Health, Science, etc.)
- 🔄 Real-time news fetched using the [NewsAPI](https://newsapi.org/)
- 📄 Infinite scroll / pagination for smooth news browsing
- 🌐 Responsive design — works on desktop and mobile
- ⚡ Fast and lightweight React app

---

## 🛠️ Tech Stack

| Technology | Description |
|---|---|
| **React** | Frontend UI library |
| **JavaScript (ES6+)** | Core programming language |
| **CSS** | Styling and layout |
| **NewsAPI** | REST API for fetching news |
| **HTML5** | Markup |

---

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/darshanajudiya10/NewsMonkey.git
cd NewsMonkey
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up your API key**

   - Sign up at [https://newsapi.org/](https://newsapi.org/) and get your free API key.
   - Create a `.env` file in the root of the project and add:

```env
REACT_APP_NEWS_API_KEY=your_api_key_here
```

4. **Run the app**

```bash
npm start
```

The app will open at `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
NewsMonkey/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── News.js
│   │   └── NewsItem.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

---

## 🔑 API Reference

This project uses the **NewsAPI** to fetch news articles.

- Base URL: `https://newsapi.org/v2/top-headlines`
- Parameters used: `country`, `category`, `apiKey`, `page`, `pageSize`

> **Note:** The free tier of NewsAPI only works on `localhost`. For production deployment, you'll need a paid plan.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Darshana Judiya**  
GitHub: [@darshanajudiya10](https://github.com/darshanajudiya10)

---

> ⭐ If you found this project helpful, please give it a star!
