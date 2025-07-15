import {
  type QueryFunction,
  type QueryKey,
  type UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type ApiError = {
  errors: string[];
};

export function useApiQuery<TData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TData, QueryKey>,
  queryOptions?: Omit<UseQueryOptions<TData, ApiError>, "queryKey" | "queryFn">
) {
  return useQuery<TData, ApiError>({
    queryKey,
    queryFn,
    ...queryOptions,
  });
}
