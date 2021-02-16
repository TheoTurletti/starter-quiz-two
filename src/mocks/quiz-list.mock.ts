import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};
export const QUESTION_SPORTS: Question = {
  label: 'Bolt est ...',
  answers: [
    {
      value: 'champion du monde de volley',
      isCorrect: false,
    },
    {
      value: 'champion du monde de sprint',
      isCorrect: true,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Actor',
        date: new Date(),
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sports',
        theme : 'Sports',
        date: new Date(),
        questions: [QUESTION_SPORTS],
    }
];
