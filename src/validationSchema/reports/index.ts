import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  date_time: yup.date().nullable(),
  type_of_issue: yup.string().nullable(),
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  status: yup.string().nullable(),
  reporter_id: yup.string().nullable(),
});
