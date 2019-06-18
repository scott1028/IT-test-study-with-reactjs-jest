export const fetchApi = async () => {
  return {
    total: 3,
    data: [1, 2, 3],
  }
}

export default async () => {
  return fetchApi(); // await could be removed when using with return
};
