import api from '../../api';
import {END_POINTS} from '../../api/paths';
import {CarsListDto} from './types';
import {useQuery} from '@tanstack/react-query';
import queryKeys from './queryKeys';

type QueryResponse = CarsListDto | undefined;

const homeQueryFn = async (): Promise<QueryResponse> => {
  const response = await api.get<QueryResponse>(END_POINTS.carsList);
  if (!response.ok) {
    throw new Error(response.problem);
  }
  return response.data;
};

const useHome = () => {
  const {data, isLoading, refetch, isRefetching} = useQuery<
    QueryResponse,
    Error
  >({
    queryKey: [queryKeys.carsList],
    queryFn: homeQueryFn,
  });

  return {
    data: data,
    isLoading: isLoading || isRefetching,
    refetch,
  };
};

export default useHome;
