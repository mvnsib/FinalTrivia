import {db} from '../utilities/init-firebase'

export const Createquiz = ( currentQuizId, title, description) => {
    return db().collection('Quizzes').doc(currentQuizId).set({
        title,
        description,
    });
};
