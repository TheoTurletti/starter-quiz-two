import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {QUIZ_LIST} from '../mocks/quiz-list.mock';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = QUIZ_LIST;

  /**
   *
   * @private
   */
  private quizUrl = 'https://raw.githubusercontent.com/NablaT/starter-quiz-two/master/mock-quiz.json';

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QUIZ_LIST);

  constructor(
    private http: HttpClient) {
    this.getQuizzes();
  }

  getQuizzes() {
    this.http.get<Quiz[]>(this.quizUrl).subscribe((quizList) => {
      this.quizzes = quizlist;
      console.log(quizList);
      this.quizzes$.next(this.quizzes);
    });
  }

  addQuiz(quiz: Quiz): void {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz): void {
    this.quizzes.forEach((element, index) => {
      // tslint:disable-next-line:triple-equals
      if (element == quiz) {
        this.quizzes.splice(index, 1);
      }
    });
    this.quizzes$.next(this.quizzes);
  }
}
