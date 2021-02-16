import { Question } from './question.model';

export interface Quiz {
    name: string;
    theme: string;
    date?: Date;
    questions: Question[];
}
