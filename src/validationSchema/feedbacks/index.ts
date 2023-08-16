import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  message: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
