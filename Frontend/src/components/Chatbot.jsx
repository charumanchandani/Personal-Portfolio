import { useState, useEffect, useRef } from 'react';
import '../styles/chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const knowledgeBase = {
    greeting:
      "Hi 👋 I'm Charu's AI assistant. You can ask me about her skills, projects, certifications, or experience!",

    skills: {
      frontend: [
        'React.js',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Responsive Design',
        'UI/UX Fundamentals'
      ],
      backend: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'MySQL',
        'RESTful APIs',
        'CRUD Operations'
      ],
      tools: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
        'Vite',
        'npm',
        'Figma'
      ],
      soft: [
        'Problem Solving',
        'Team Collaboration',
        'Clear Communication',
        'Adaptability',
        'Time Management'
      ]
    },

    projects: [
      {
        name: 'Full Stack Web Applications',
        tech: 'React, Node.js, MongoDB, Express',
        desc:
          'Built scalable full-stack web applications with authentication, REST APIs, and responsive UI.'
      },
      {
        name: 'Analytics & Data Projects',
        tech: 'Python, Data Visualization',
        desc:
          'Worked on data visualization and analytics-based projects during certification programs.'
      },
      {
        name: 'Portfolio Website',
        tech: 'React, CSS, Modern UI Design',
        desc:
          'Designed and developed a premium responsive portfolio with animations and chatbot integration.'
      }
    ],

    certifications: [
      'Python for Data Visualization — IBM (Jan 2024)',
      'Data Analytics Job Simulation — Deloitte (Mar 2025)',
      'Full Stack Development — Softpro X AKTU (2025)',
      'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate'
    ],

    experience: {
      role: 'Full Stack Developer',
      summary:
        'Charu is a passionate Full Stack Developer specializing in React.js and Node.js. She focuses on building modern, scalable, and user-friendly web applications with clean architecture and strong backend integration.'
    },

    contact: {
      email: 'charu@example.com',
      linkedin: 'linkedin.com/in/charu',
      github: 'github.com/charu'
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(knowledgeBase.greeting);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text }]);
      setIsTyping(false);
    }, 800);
  };

  const getResponse = (userInput) => {
    const input = userInput.toLowerCase();

    // Greetings
    if (input.match(/^(hi|hello|hey|greetings)/)) {
      return "Hello! 👋 I'm here to help you learn more about Charu. What would you like to know?";
    }

    // About
    if (input.match(/who (are you|is charu)|about charu|tell me about/)) {
      return `Charu is a passionate Full Stack Developer specializing in React.js and Node.js. She builds modern, scalable web applications with a strong focus on clean code, performance, and user experience.`;
    }

    // Skills
    if (input.match(/skill|technology|tech stack|what (can|does) (she|charu) (know|use)/)) {
      return `**Frontend:** ${knowledgeBase.skills.frontend.join(', ')}\n\n**Backend:** ${knowledgeBase.skills.backend.join(', ')}\n\n**Tools:** ${knowledgeBase.skills.tools.join(', ')}\n\n**Soft Skills:** ${knowledgeBase.skills.soft.join(', ')}`;
    }

    // Projects
    if (input.match(/project|work|portfolio|built|created/)) {
      let response = "Here are some of Charu's key projects:\n\n";
      knowledgeBase.projects.forEach((proj, idx) => {
        response += `**${idx + 1}. ${proj.name}**\n${proj.desc}\nTech: ${proj.tech}\n\n`;
      });
      return response;
    }

    // Certifications
    if (input.match(/certification|certificate|course|learning/)) {
      return `**Certifications:**\n${knowledgeBase.certifications.map((cert, i) => `${i + 1}. ${cert}`).join('\n')}`;
    }

    // Experience
    if (input.match(/experience|background|work history|role/)) {
      return `**Role:** ${knowledgeBase.experience.role}\n\n${knowledgeBase.experience.summary}`;
    }

    // Contact
    if (input.match(/contact|email|reach|connect|linkedin|github/)) {
      return `📧 **Email:** ${knowledgeBase.contact.email}\n💼 **LinkedIn:** ${knowledgeBase.contact.linkedin}\n🔗 **GitHub:** ${knowledgeBase.contact.github}\n\nFeel free to connect!`;
    }

    // Frontend
    if (input.match(/frontend|react|javascript|css|html/)) {
      return `Charu is highly skilled in frontend development using:\n${knowledgeBase.skills.frontend.join(', ')}.\n\nShe builds responsive, modern user interfaces with React and follows best UI practices.`;
    }

    // Backend
    if (input.match(/backend|server|database|node|express|mongo/)) {
      return `Charu's backend expertise includes:\n${knowledgeBase.skills.backend.join(', ')}.\n\nShe develops REST APIs, manages databases, and ensures scalable server-side architecture.`;
    }

    // Strengths
    if (input.match(/strength|good at|best at|expertise/)) {
      return `Charu excels at:\n• Full-stack application development\n• Modern React.js development\n• Backend API integration\n• Problem-solving\n• Clean and scalable architecture\n• Team collaboration`;
    }

    return "I can help you with information about:\n• Skills & Technologies\n• Projects & Portfolio\n• Certifications\n• Experience & Background\n• Contact Information\n\nWhat would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: input }]);
    const userMessage = input;
    setInput('');

    setTimeout(() => {
      const response = getResponse(userMessage);
      addBotMessage(response);
    }, 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        className={`chatbot-toggle ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chatbot"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <circle cx="9" cy="10" r="1" fill="currentColor"/>
          <circle cx="15" cy="10" r="1" fill="currentColor"/>
        </svg>
      </button>

      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-content">
            <h3>Ask me about Charu</h3>
            <p>AI assistant powered portfolio guide</p>
          </div>
          <button
            className="chatbot-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chatbot"
          >
            ✕
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>
              <div className="message-content">
                {msg.text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line.split('**').map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                    )}
                    {i < msg.text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot typing">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input-area">
          <input
            type="text"
            className="chatbot-input"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="chatbot-send"
            onClick={handleSend}
            disabled={!input.trim()}
          >
            ➤
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
