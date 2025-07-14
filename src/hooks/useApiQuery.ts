import {
  type QueryFunction,
  type QueryKey,
  type UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

export function useApiQuery<TData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TData, QueryKey>,
  queryOptions?: Omit<UseQueryOptions<TData, Error>, "queryKey" | "queryFn">
) {
  return useQuery<TData, Error>({
    queryKey,
    queryFn,
    ...queryOptions,
  });
}
