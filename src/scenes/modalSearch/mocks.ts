export const MOCK_PROJECTS = {
  items: [
    {
      title: 'date-fns',
      id: 'date-fns',
    },
    ...Array.from({ length: 20 }).map((_, idx) => ({
      title: `проект ${idx}`,
      id: `${idx}`,
    })),
  ],
};

export const MOCK_CONDITIONS = {
  items: [
    {
      title: 'Лицензия MIT и наличие README и tsconfig',
      id: 'react-version',
    },
  ],
};
