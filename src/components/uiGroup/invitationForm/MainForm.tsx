import { FieldErrors, UseFormRegister } from 'react-hook-form';

import InputPref from '@/components/uiParts/InputPref';
import InputText from '@/components/uiParts/InputText';
import InputTextField from '@/components/uiParts/InputTextField';
import {
  REGEX_BOOL,
  VALIDATE_MESSAGE_REQUIRED,
  VALIDATE_MESSAGE_MAX_LENGTH,
  REGEX_KANJI_KANA,
  VALIDATE_MESSAGE_PATTERN,
  REGEX_HIRAGANA_KATAKANA,
  REGEX_POSTAL_CODE,
  REGEX_PHONE_NUMBER,
  REGEX_EMAIL,
} from '@/lib/const';

import { MainInput } from '.';

type Props = {
  register: UseFormRegister<MainInput>;
  errors: FieldErrors<MainInput> | undefined;
};

const MainForm = ({ register, errors }: Props) => {
  return (
    <>
      <fieldset className="py-10 text-center">
        <input
          className=""
          type="radio"
          id="attendance"
          value="true"
          {...register('attendance', {
            required: true,
            maxLength: 5,
            pattern: REGEX_BOOL,
          })}
          checked
        />
        <label htmlFor="attendance">出席</label>
        <input
          type="radio"
          id="decline"
          value="false"
          {...register('attendance', {
            required: true,
            maxLength: 5,
            pattern: REGEX_BOOL,
          })}
        />
        <label htmlFor="decline">欠席</label>
      </fieldset>
      <div className="px-4">
        <p className="mb-4 text-sm font-light text-red-500">* は必ず入力をお願いします。</p>

        <div className="flex flex-col gap-8 text-base">
          <InputTextField label="お名前（姓・名）" htmlFor="family-name" required={true}>
            <div className="flex flex-row gap-4">
              <InputText
                type="text"
                autoComplete="family-name"
                placeholder="河﨑"
                register={register('familyName', {
                  required: { value: true, message: VALIDATE_MESSAGE_REQUIRED('お名前') },
                  maxLength: { value: 20, message: VALIDATE_MESSAGE_MAX_LENGTH('お名前', 20) },
                  pattern: { value: REGEX_KANJI_KANA, message: VALIDATE_MESSAGE_PATTERN('お名前') },
                })}
              />
              <InputText
                type="text"
                autoComplete="given-name"
                placeholder="一希"
                register={register('givenName', {
                  required: { value: true, message: VALIDATE_MESSAGE_REQUIRED('お名前') },
                  maxLength: { value: 20, message: VALIDATE_MESSAGE_MAX_LENGTH('お名前', 20) },
                  pattern: { value: REGEX_KANJI_KANA, message: VALIDATE_MESSAGE_PATTERN('お名前') },
                })}
              />
            </div>

            {(errors?.familyName || errors?.givenName) && (
              <div className="text-xs font-thin text-red-500 transition duration-300">
                {errors.familyName?.message ?? errors.givenName?.message}
              </div>
            )}
          </InputTextField>
          <InputTextField
            label="おなまえ（姓かな・名かな）"
            htmlFor="family-name-kana"
            required={true}
          >
            <div className="flex flex-row gap-4">
              <InputText
                type="text"
                autoComplete="family-name-kana"
                placeholder="かわさき"
                register={register('familyNameKana', {
                  required: { value: true, message: VALIDATE_MESSAGE_REQUIRED('おなまえ') },
                  maxLength: {
                    value: 20,
                    message: VALIDATE_MESSAGE_MAX_LENGTH('おなまえ', 20),
                  },
                  pattern: {
                    value: REGEX_HIRAGANA_KATAKANA,
                    message: VALIDATE_MESSAGE_PATTERN('おなまえ'),
                  },
                })}
              />
              <InputText
                type="text"
                autoComplete="given-name-kana"
                placeholder="かずき"
                register={register('givenNameKana', {
                  required: { value: true, message: VALIDATE_MESSAGE_REQUIRED('おなまえ') },
                  maxLength: {
                    value: 20,
                    message: VALIDATE_MESSAGE_MAX_LENGTH('おなまえ', 20),
                  },
                  pattern: {
                    value: REGEX_HIRAGANA_KATAKANA,
                    message: VALIDATE_MESSAGE_PATTERN('おなまえ'),
                  },
                })}
              />
            </div>
            {(errors?.familyNameKana || errors?.givenNameKana) && (
              <div className="text-xs font-thin text-red-500 transition duration-300">
                {errors.familyNameKana?.message ?? errors.givenNameKana?.message}
              </div>
            )}
          </InputTextField>
          <InputTextField label="〒 郵便番号" htmlFor="postal-code" required={true}>
            <InputText
              type="text"
              autoComplete="postal-code"
              placeholder="123-4567"
              register={register('postCode', {
                required: { value: true, message: VALIDATE_MESSAGE_REQUIRED('郵便番号') },
                maxLength: { value: 8, message: VALIDATE_MESSAGE_MAX_LENGTH('郵便番号', 8) },
                pattern: {
                  value: REGEX_POSTAL_CODE,
                  message: VALIDATE_MESSAGE_PATTERN('郵便番号'),
                },
              })}
            />
            {errors?.postCode && (
              <div className="text-xs font-thin text-red-500 transition duration-300">
                {errors.postCode?.message}
              </div>
            )}
          </InputTextField>
          <InputTextField label="住所（都道府県）" htmlFor="pref" required={true}>
            <InputPref
              type="text"
              autoComplete="pref"
              placeholder="東京都"
              register={register('pref', {
                required: { value: true, message: VALIDATE_MESSAGE_REQUIRED('都道府県') },
                maxLength: { value: 4, message: VALIDATE_MESSAGE_MAX_LENGTH('都道府県', 4) },
              })}
            />
            {errors?.pref && (
              <div className="text-xs font-thin text-red-500 transition duration-300">
                {errors.pref?.message}
              </div>
            )}
          </InputTextField>
          <InputTextField label="住所" htmlFor="address-level2" required={true}>
            <InputText
              type="text"
              autoComplete="address-level2"
              placeholder="大田区蒲田5-13-14"
              register={register('addressLevel2', {
                required: { value: true, message: VALIDATE_MESSAGE_REQUIRED('住所') },
                maxLength: { value: 120, message: VALIDATE_MESSAGE_MAX_LENGTH('住所', 120) },
              })}
            />
            {errors?.addressLevel2 && (
              <div className="text-xs font-thin text-red-500 transition duration-300">
                {errors.addressLevel2.message}
              </div>
            )}
          </InputTextField>
          <InputTextField label="建物名" htmlFor="address-level3" required={false}>
            <InputText
              type="text"
              autoComplete="address-level3"
              placeholder="大田ビル903"
              register={register('addressLevel3', {
                maxLength: { value: 120, message: VALIDATE_MESSAGE_MAX_LENGTH('建物名', 120) },
              })}
            />
            {errors?.addressLevel3 && (
              <div className="text-xs font-thin text-red-500 transition duration-300">
                {errors.addressLevel3.message}
              </div>
            )}
          </InputTextField>
          <InputTextField label="電話番号" htmlFor="tel" required={true}>
            <InputText
              type="text"
              autoComplete="tel"
              placeholder="070-1234-5678"
              register={register('tel', {
                required: { value: true, message: VALIDATE_MESSAGE_REQUIRED('電話番号') },
                maxLength: { value: 20, message: VALIDATE_MESSAGE_MAX_LENGTH('電話番号', 20) },
                pattern: {
                  value: REGEX_PHONE_NUMBER,
                  message: VALIDATE_MESSAGE_PATTERN('電話番号'),
                },
              })}
            />
            {errors?.tel && (
              <div className="text-xs font-thin text-red-500 transition duration-300">
                {errors.tel.message}
              </div>
            )}
          </InputTextField>
          <InputTextField label="メールアドレス" htmlFor="email" required={false}>
            <InputText
              type="email"
              autoComplete="email"
              placeholder="kawasaki@example.com"
              register={register('email', {
                pattern: {
                  value: REGEX_EMAIL,
                  message: VALIDATE_MESSAGE_PATTERN('メールアドレス'),
                },
              })}
            />
            {errors?.email && (
              <div className="text-xs font-thin text-red-500 transition duration-300">
                {errors.email.message}
              </div>
            )}
          </InputTextField>
          <InputTextField label="アレルギー・苦手な食べ物" htmlFor="allergy" required={false}>
            <textarea
              className="input-textarea"
              id="allergy"
              placeholder="エビ、落花生、桃"
              {...register('allergy', {})}
            ></textarea>
          </InputTextField>
          <InputTextField label="メッセージ" htmlFor="message" required={false}>
            <textarea
              className="input-textarea"
              id="message"
              placeholder="やっほー"
              {...register('message', {})}
            ></textarea>
          </InputTextField>
        </div>
      </div>
    </>
  );
};

export default MainForm;
