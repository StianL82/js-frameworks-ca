import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './index.styles';

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, 'Full name must be at least 3 characters.')
      .required('Full name is required.'),
    subject: yup
      .string()
      .min(3, 'Subject must be at least 3 characters.')
      .required('Subject is required.'),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Must be a valid email address'
      )
      .required('Email is required.'),
    body: yup
      .string()
      .min(3, 'Body must be at least 3 characters.')
      .required('Body is required.'),
  })
  .required();

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setShowAlert(true);
    reset();
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="container">
      <h1 className="my-5 text-center">Contact Us</h1>
      <S.FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="full-name">Full Name:</label>
          <input id="full-name" {...register('fullName')} />
          <p className="text-danger">{errors.fullName?.message}</p>

          <label htmlFor="subject">Subject:</label>
          <input id="subject" {...register('subject')} />
          <p className="text-danger">{errors.subject?.message}</p>

          <label htmlFor="email">Email:</label>
          <input id="email" {...register('email')} />
          <p className="text-danger">{errors.email?.message}</p>

          <label htmlFor="body">Body:</label>
          <textarea id="body" {...register('body')} />
          <p className="text-danger">{errors.body?.message}</p>

          <S.ButtonContainer>
            <S.Button type="submit" className="btn btn-success">
              Submit
            </S.Button>
          </S.ButtonContainer>
        </form>
        {showAlert && (
          <div className="alert alert-success mt-3" role="alert">
            Your message has been successfully sent!
          </div>
        )}
      </S.FormContainer>
    </div>
  );
}

export default Contact;
