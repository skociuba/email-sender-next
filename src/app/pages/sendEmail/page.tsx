'use client';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

import Nav from '../../nav';
import Layout from '../../components/Layout';

const Main = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          'service_4z832gj',
          'template_tdn1169',
          form.current,
          '6KKLRD4Gqko0hKQ90',
        )
        .then(
          (result) => {
            console.log(result.text);
            if (form.current) {
              form.current.reset();
              alert('Wiadomość została wysłana');
            }
          },
          (error) => {
            console.log(error.text);
            alert('Wystąpił błąd podczas wysyłania wiadomości');
          },
        );
    }
  };

  return (
    <Layout>
      <Nav />
      <div className="flex min-h-screen  items-center justify-center">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex w-1/3 flex-col space-y-4  text-white">
          <label>
            Name:
            <input
              type="text"
              name="user_name"
              className=" mt-1 block h-10 w-full rounded border bg-black pl-1 opacity-80"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="user_email"
              className=" mt-1 block h-10 w-full rounded border bg-black pl-1 opacity-80"
            />
          </label>
          <label>
            Topic:
            <input
              type="text"
              name="subject"
              className="mt-1 block h-10 w-full rounded border bg-black pl-1 opacity-80"
            />
          </label>
          <label>
            Content:
            <textarea
              name="message"
              className="mt-1 block h-32 w-full rounded border bg-black pl-1 opacity-80"
            />
          </label>
          <input
            type="submit"
            value="Wyślij"
            className="mt-1  block  h-10 rounded border hover:bg-custom-purple"
          />
        </form>
      </div>
    </Layout>
  );
};

export default Main;
