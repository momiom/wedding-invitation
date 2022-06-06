import { useState } from 'react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';

import { useSendNotion } from '@/hooks/useSendNotion';

import AddGuestForm from './AddGuestForm';
import MainForm from './MainForm';

export type MainInput = {
  attendance: string;
  familyName: string;
  givenName: string;
  familyNameKana: string;
  givenNameKana: string;
  postCode: string;
  pref: string;
  addressLevel2: string;
  addressLevel3: string;
  tel: string;
  email: string;
  allergy: string;
  message: string;
  guests?: Array<AddGuest>;
};

export type AddGuest = {
  familyName: string;
  givenName: string;
  familyNameKana: string;
  givenNameKana: string;
  allergy: string;
};

const InvitationForm = () => {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
    setValue,
  } = useForm<MainInput>({});

  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: 'guests',
  });

  const { doPost, isLoading } = useSendNotion();
  const [success, setSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const onSubmit: SubmitHandler<MainInput> = (data) => {
    console.log(data);
    void doPost({
      params: data,
      onSuccess: (response) => {
        setTimeout(() => {
          setSuccess(true);
        }, 1000);
        console.log(response);
      },
      onError: (err) => {
        setTimeout(() => {
          setHasError(true);
        }, 1000);
        console.log(err);
      },
    });
  };

  return (
    <div className="py-16 mx-auto mt-10 mb-8 max-w-xl font-form">
      <div className="flex flex-col py-8 px-4 mx-6 bg-white">
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <h2 className="py-8 text-3xl italic text-center font-form-title">rsvp</h2>
        <p className="px-4 pt-4 font-medium leading-8">
          お手数ではございますが、出席情報のご登録をお願い申し上げます。
          <br />
          こちらでご登録いただいたご住所に招待状を送付させていただきます。
        </p>

        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className="flex flex-col gap-8 text-base" onSubmit={handleSubmit(onSubmit)}>
          <MainForm {...{ register, errors }} />

          {fields.map((item, index) => {
            return <AddGuestForm key={item.id} {...{ register, remove, errors, index }} />;
          })}

          <hr />
          <button
            type="button"
            onClick={() => {
              append({
                familyName: '',
                givenName: '',
                familyNameKana: '',
                givenNameKana: '',
              });
            }}
            className="flex flex-row justify-center items-center"
          >
            <span className="inline-block relative mr-2 w-9 h-9 text-2xl font-bold text-secondary/90 bg-primary rounded-full ">
              <span className="absolute top-0 left-[7px]">+</span>
            </span>
            お連れ様を追加する
          </button>

          {/* {!isLoading && (
            <button
              type="submit"
              className="py-2.5 px-5 text-sm font-medium text-center bg-primary active:bg-primary/50 rounded-lg focus:ring-4 focus:ring-blue-300 duration-300 ease-in-out"
            >
              送信する
            </button>
          )}
          {isLoading && (
            <button
              type="submit"
              className="flex flex-row justify-center content-center items-center py-2.5 px-5 text-sm font-medium text-center bg-primary/50 rounded-lg focus:ring-4 focus:ring-blue-300 duration-300 ease-in-out"
              disabled
            >
              <span className="inline-block">送信中...</span>
              <span className="loading-spinner"></span>
            </button>
          )} */}

          <button
            type="submit"
            className={`py-2.5 px-5 text-sm font-medium text-center bg-primary active:bg-primary/50 rounded-lg focus:ring-4 focus:ring-blue-300 duration-300 ease-in-out ${
              !isLoading ? '' : 'hidden'
            }`}
          >
            送信する
          </button>

          <button
            type="submit"
            className={`flex flex-row justify-center content-center items-center py-2.5 px-5 text-sm font-medium text-center bg-primary/50 rounded-lg focus:ring-4 focus:ring-blue-300 duration-300 ease-in-out ${
              isLoading ? '' : 'hidden'
            }`}
            disabled
          >
            <span className="inline-block">送信中...</span>
            <span className="loading-spinner"></span>
          </button>

          <div
            className={`w-full text-center transition-all duration-300 ${success ? '' : 'hidden'}`}
          >
            ご回答ありがとうございました。
            <br />
            修正したいときには再度ご入力して送信をお願いします。
          </div>

          <div
            className={`w-full text-center transition-all duration-300 ${
              hasError ? 'opacity-1' : 'opacity-0'
            }`}
          >
            申し訳ございません。エラーが発生しました。
            <br />
            繰り返し発生する場合は河崎までご連絡をお願いします。
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvitationForm;
