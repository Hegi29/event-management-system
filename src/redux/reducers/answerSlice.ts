import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const answerSlice = createSlice({
    name: 'answer',
    initialState: {
        answer: {
            health: { answered: 0, question: 0 },
            security: { answered: 0, question: 0 },
            safety: { answered: 0, question: 0 },
            environment: { answered: 0, question: 0 }
        },
        totalQuestion: 0,
        totalAnsweredQuestion: 0
    },
    reducers: {
        setProgressHealth: (state, action: PayloadAction<any>) => {
            state.answer.health.answered = action.payload.answered;
            state.answer.health.question = action.payload.question;
        },
        setProgressSecurity: (state, action: PayloadAction<any>) => {
            state.answer.security.answered = action.payload.answered;
            state.answer.security.question = action.payload.question;
        },
        setProgressSafety: (state, action: PayloadAction<any>) => {
            state.answer.safety.answered = action.payload.answered;
            state.answer.safety.question = action.payload.question;
        },
        setProgressEnvironment: (state, action: PayloadAction<any>) => {
            state.answer.environment.answered = action.payload.answered;
            state.answer.environment.question = action.payload.question;
        },
        setTotalQuestion: (state, action: PayloadAction<any>) => {
            state.totalQuestion = action.payload;
        },
        setTotalAnsweredQuestion: (state, action: PayloadAction<any>) => {
            state.totalAnsweredQuestion = action.payload;
        }
    }
});

export const { setProgressHealth, setProgressSecurity, setProgressSafety, setProgressEnvironment, setTotalQuestion, setTotalAnsweredQuestion } = answerSlice.actions;

export const selectAnswerTab = (state: any) => state.answer.answer;
export const selectQuestionTotal = (state: any) => state.answer.totalQuestion;
export const selectAnsweredQuestionTotal = (state: any) => state.answer.totalAnsweredQuestion;

export default answerSlice.reducer;