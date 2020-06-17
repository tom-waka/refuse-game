import React, {useState, useEffect, useCallback} from 'react';
import './assets/styles/style.css';
import {AnswersList, Chats} from './components/index';
import {db} from './firebase/index';

const App = () => { 
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState('init');
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats( {
      text: nextDataset.question,
      type: 'question'
    })

    setAnswers(nextDataset.answers);
    setCurrentId(nextQuestionId);
  }

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      default:
        addChats( {
          text: selectedAnswer,
          type: 'answer'
        })
        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 800);
        break;
    }
  }

  const addChats = (chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  }

  useEffect(() => {
   (async() => {
     const initDataset = {};

     await db.collection('questions').get().then(snapshots => {
       snapshots.forEach(doc => {
         const id = doc.id;
         const data =doc.data();
         initDataset[id] = data;
       })
     });

     setDataset(initDataset)
     displayNextQuestion(currentId, initDataset[currentId])
   })()
  }, [])

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  })

  return (
    <div>
      <section className="c-section">
        <div className="c-box">
          <div className="chats_area">
            <Chats chats={chats}/>
          </div>
          <div className="answers_area">
            <AnswersList answers={answers} select={selectAnswer}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
