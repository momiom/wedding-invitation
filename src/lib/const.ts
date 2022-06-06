// eslint-disable-next-line no-useless-escape
export const REGEX_POSTAL_CODE = /\d{3}-?\d{4}/;
export const REGEX_PHONE_NUMBER = /^(0[-0-9]{11,12}|0[0-9]{9,10})$/;
export const REGEX_KANJI_KANA =
  /^([々〇〻\u3400-\u9FFF\uF900-\uFAFF]|[\uD840-\uD87F][\uDC00-\uDFFF]|[\u3041-\u3096]|[\u30A1-\u30FA])+$/;
export const REGEX_HIRAGANA_KATAKANA = /^([\u3041-\u3096]|[\u30A1-\u30FA])+$/;
export const REGEX_EMAIL =
  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
export const REGEX_BOOL = /^(true|false)$/;

export const VALIDATE_MESSAGE_REQUIRED = (label: string) => `${label}は必ず入力をお願いします。`;
export const VALIDATE_MESSAGE_MAX_LENGTH = (label: string, length: number) =>
  `${label}は${length}文字以内の入力をお願いします。`;
export const VALIDATE_MESSAGE_PATTERN = (label: string) => `${label}の入力に間違いがあります。`;
