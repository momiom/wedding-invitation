import { FieldErrors, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form';

import { MainInput } from '@/components/uiGroup/invitationForm';
import InputText from '@/components/uiParts/InputText';
import InputTextField from '@/components/uiParts/InputTextField';
import {
  VALIDATE_MESSAGE_REQUIRED,
  VALIDATE_MESSAGE_MAX_LENGTH,
  REGEX_KANJI_KANA,
  VALIDATE_MESSAGE_PATTERN,
  REGEX_HIRAGANA_KATAKANA,
} from '@/lib/const';

type Props = {
  register: UseFormRegister<MainInput>;
  remove: UseFieldArrayRemove;
  errors: FieldErrors<MainInput> | undefined;
  index: number;
};

const AddGuestForm = ({ register, remove, errors, index }: Props) => {
  return (
    <>
      <hr />
      <h2 className="font-medium text-center">お連れ様 {index + 1}人目</h2>
      <div className="flex flex-col gap-8 px-4 text-base">
        <InputTextField label="お名前（姓・名）" htmlFor="family-name" required={true}>
          <div className="flex flex-row gap-4">
            <InputText
              type="text"
              autoComplete="family-name"
              placeholder="河﨑"
              register={register(`guests.${index}.familyName` as const, {
                required: { value: true, message: VALIDATE_MESSAGE_REQUIRED('お名前') },
                maxLength: { value: 20, message: VALIDATE_MESSAGE_MAX_LENGTH('お名前', 20) },
                pattern: { value: REGEX_KANJI_KANA, message: VALIDATE_MESSAGE_PATTERN('お名前') },
              })}
            />
            <InputText
              type="text"
              autoComplete="given-name"
              placeholder="一希"
              register={register(`guests.${index}.givenName` as const, {
                required: { value: true, message: VALIDATE_MESSAGE_REQUIRED('お名前') },
                maxLength: { value: 20, message: VALIDATE_MESSAGE_MAX_LENGTH('お名前', 20) },
                pattern: { value: REGEX_KANJI_KANA, message: VALIDATE_MESSAGE_PATTERN('お名前') },
              })}
            />
          </div>

          {(errors?.guests?.[index]?.familyName || errors?.guests?.[index]?.givenName) && (
            <div className="text-xs font-thin text-red-500 transition duration-300">
              {errors?.guests?.[index].familyName?.message ??
                errors?.guests?.[index].givenName?.message}
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
              register={register(`guests.${index}.familyNameKana` as const, {
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
              register={register(`guests.${index}.givenNameKana` as const, {
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
          {(errors?.guests?.[index]?.familyNameKana || errors?.guests?.[index]?.givenNameKana) && (
            <div className="text-xs font-thin text-red-500 transition duration-300">
              {errors.guests[index].familyNameKana?.message ??
                errors.guests[index].givenNameKana?.message}
            </div>
          )}
        </InputTextField>
        <InputTextField label="アレルギー・苦手な食べ物" htmlFor="allergy" required={false}>
          <textarea
            className="input-textarea"
            id="allergy"
            placeholder="エビ、落花生、桃"
            {...register(`guests.${index}.allergy` as const, {})}
          ></textarea>
        </InputTextField>

        <button
          type="button"
          onClick={() => {
            remove(index);
          }}
          className="flex flex-row justify-center items-center text-sm"
        >
          <span className="inline-block relative mr-2 w-[26px] h-[26px] text-2xl font-bold text-secondary/90 bg-primary rounded-full ">
            <span className="absolute top-[-7px] left-[7px]">-</span>
          </span>
          削除する
        </button>
      </div>
    </>
  );
};

export default AddGuestForm;
