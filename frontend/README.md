\documentclass{article}
\usepackage{hyperref}
\begin{document}

\section*{WisePal}

\textbf{WisePal} is a conversational AI web application that allows users to interact with an intelligent assistant through a modern, responsive chat interface. This project demonstrates practical skills in backend API development, frontend engineering, and AI model integration.

\subsection*{Project Overview}
\begin{itemize}
    \item Conversational AI platform built with Python (FastAPI), React (Next.js), and Tailwind CSS.
    \item Integrates open-source natural language models from Hugging Face Transformers for real-time chatbot responses.
    \item Features a clean, user-friendly chat UI with dynamic conversation history.
    \item Designed, implemented, and documented entirely by me as a demonstration of end-to-end product engineering.
\end{itemize}

\subsection*{Technologies Used}
\begin{tabular}{ | l | l | }
    \hline
    \textbf{Layer} & \textbf{Technology} \\
    \hline
    Backend    & Python, FastAPI \\
    Frontend   & Next.js (React), Tailwind CSS \\
    AI Model   & Hugging Face Transformers (e.g., BlenderBot) \\
    Versioning & Git, GitHub \\
    \hline
\end{tabular}

\subsection*{Key Features}
\begin{itemize}
    \item Modern, responsive chat interface with real-time messaging and auto-scrolling.
    \item RESTful API connecting frontend and backend for seamless communication.
    \item Natural language understanding and generation using pre-trained transformer models.
    \item Clean repository management with \texttt{.gitignore} to exclude unnecessary files and dependencies.
    \item Comprehensive documentation for setup, usage, and customization.
\end{itemize}

\subsection*{How to Run Locally}
\textbf{1. Clone the Repository}
\begin{verbatim}
git clone https://github.com/yourusername/wisepal.git
cd wisepal
\end{verbatim}

\textbf{2. Backend Setup}
\begin{verbatim}
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
\end{verbatim}

\textbf{3. Frontend Setup}
\begin{verbatim}
cd frontend
npm install
npm run dev
\end{verbatim}

Visit \url{http://localhost:3000} in your browser.

\subsection*{Project Highlights}
\begin{itemize}
    \item Designed and implemented the entire stack, from backend API to frontend UI.
    \item Integrated Hugging Face conversational models for interactive, context-aware chat.
    \item Managed project with Git and GitHub, following best practices for clean code and version control.
    \item Documented setup and usage for easy onboarding and demonstration to recruiters.
\end{itemize}

\subsection*{Customization}
\begin{itemize}
    \item Swap out the AI model in \texttt{backend/main.py} to try different Hugging Face models.
    \item Update UI styles in the frontend for your preferred look and feel.
\end{itemize}

\subsection*{License}
MIT

\vspace{1em}
\noindent
\textbf{Built and maintained by [Your Name].}\\
If you’re a recruiter or collaborator interested in my work, feel free to reach out or explore the codebase!

\end{document}
