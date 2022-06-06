import axios, { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';

import { MainInput } from '@/components/uiGroup/invitationForm';

type Args = {
  params: MainInput;
  onSuccess: (response: AxiosResponse) => void;
  onError: (err: any) => void;
};

type DoPost = ({ params, onSuccess, onError }: Args) => Promise<void>;

type Response = {
  isLoading: boolean;
  doPost: DoPost;
};

export function useSendNotion(): Response {
  const [isLoading, setLoading] = useState(false);

  const doPost: DoPost = async (args: Args) => {
    try {
      setLoading(true);
      const res = await axios.request({
        method: 'POST',
        url: '/api/notion',
        data: args?.params,
      });
      args.onSuccess(res);
    } catch (err) {
      args.onError(err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const clear = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => () => clear(), [clear]);

  return {
    doPost,
    isLoading,
  };
}
