import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Библиотека для супер-анимаций! 🎬

const GeminiProject = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Варианты анимации для карточек
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <div style={styles.wrapper}>
      {/* Главный заголовок с анимацией появления */}
      <motion.header 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.header}
      >
        <h1 style={styles.mainTitle}>Никита <span style={styles.accent}>x</span> Gemini 3 Flash</h1>
        <p style={styles.subtitle}>Будущее веба строится здесь и сейчас ⚡️⚛️</p>
      </motion.header>

      <div style={styles.grid}>
        {/* Карточка 1: Про Никиту */}
        <motion.div 
          custom={1}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          style={styles.card}
        >
          <div style={styles.icon}>👋</div>
          <h2 style={styles.cardTitle}>О создателе</h2>
          <p style={styles.cardText}>
            Меня зовут <b>Никита</b>. Мне скоро 12 лет, и я уже кожу на React. 
            Пока другие учат HTML, я создаю динамические интерфейсы! 🔥
          </p>
        </motion.div>

        {/* Карточка 2: Почему 3 Flash лучше Pro */}
        <motion.div 
          custom={2}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          style={styles.cardHighlight}
        >
          <div style={styles.icon}>🧠</div>
          <h2 style={styles.cardTitle}>Gemini 3 Flash vs 3 Pro</h2>
          <ul style={styles.list}>
            <li><b>Точность:</b> 78% в кодинге (выше, чем у Pro!) ✅</li>
            <li><b>Скорость:</b> Мгновенная генерация кода 🏎️💨</li>
            <li><b>Логика:</b> Новое динамическое мышление 3.0 💎</li>
            <li><b>Стабильность:</b> Меньше ошибок в сложных скриптах 🛠️</li>
          </ul>
        </motion.div>

        {/* Карточка 3: Стек технологий */}
        <motion.div 
          custom={3}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          style={styles.card}
        >
          <div style={styles.icon}>💻</div>
          <h2 style={styles.cardTitle}>Мой Стек</h2>
          <div style={styles.badgeContainer}>
            <span style={styles.badge}>React ⚛️</span>
            <span style={styles.badge}>Framer Motion 🎬</span>
            <span style={styles.badge}>Gemini 3 Flash 🤖</span>
            <span style={styles.badge}>JavaScript ES6+ 💛</span>
          </div>
        </motion.div>
      </div>

      {/* Интерактивная кнопка */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ 
          scale: 1.1, 
          backgroundColor: "#ff0080",
          boxShadow: "0px 0px 20px rgba(255, 0, 128, 0.6)" 
        }}
        onClick={() => alert('Сайт запущен на Gemini 3 Flash! 🎈🚀')}
        style={styles.button}
      >
        Запустить Проект 🚀
      </motion.button>
    </div>
  );
};

// Стили объекта (для чистоты кода)
const styles = {
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0c',
    color: '#ffffff',
    fontFamily: "'Inter', sans-serif",
    padding: '50px 20px',
    textAlign: 'center',
    overflowX: 'hidden'
  },
  header: { marginBottom: '60px' },
  mainTitle: { fontSize: '3.5rem', fontWeight: '800', margin: '0' },
  accent: { color: '#00d8ff' },
  subtitle: { fontSize: '1.2rem', color: '#888', marginTop: '10px' },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    background: '#16161a',
    padding: '30px',
    borderRadius: '24px',
    width: '300px',
    border: '1px solid #333',
    textAlign: 'left'
  },
  cardHighlight: {
    background: 'linear-gradient(135deg, #1e1e26 0%, #2d2d3d 100%)',
    padding: '30px',
    borderRadius: '24px',
    width: '300px',
    border: '1px solid #00d8ff',
    textAlign: 'left',
    boxShadow: '0 10px 30px rgba(0, 216, 255, 0.1)'
  },
  icon: { fontSize: '3rem', marginBottom: '20px' },
  cardTitle: { fontSize: '1.5rem', marginBottom: '15px', color: '#00d8ff' },
  cardText: { lineHeight: '1.6', color: '#ccc' },
  list: { paddingLeft: '20px', color: '#ccc', lineHeight: '2' },
  badgeContainer: { display: 'flex', wrap: 'wrap', gap: '10px', marginTop: '15px' },
  badge: { 
    background: '#333', 
    padding: '5px 12px', 
    borderRadius: '20px', 
    fontSize: '0.8rem',
    border: '1px solid #444'
  },
  button: {
    marginTop: '60px',
    padding: '15px 40px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    border: 'none',
    backgroundColor: '#00d8ff',
    color: '#000',
    cursor: 'pointer',
    transition: '0.3s'
  }
};

export default GeminiProject;