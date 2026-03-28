export type NewsItem = {
  id: string;
  title: string;
  content: string;
  date: string;
  year: string;
};
export type Translator = (key: string) => string;

export const getNewsList = (t: Translator): NewsItem[] => [
  {
    id: "1",
    title: t("site.news.item1.title"),
    date: "07-08",
    year: "2020",
    content: t("site.news.item1.content"),
  },
  {
    id: "2",
    title: t("site.news.item2.title"),
    date: "07-08",
    year: "2020",
    content: t("site.news.item2.content"),
  },
  {
    id: "3",
    title: t("site.news.item3.title"),
    date: "07-08",
    year: "2020",
    content: t("site.news.item3.content"),
  },
  {
    id: "4",
    title: t("site.news.item4.title"),
    date: "07-08",
    year: "2020",
    content: t("site.news.item4.content"),
  },
  {
    id: "5",
    title: t("site.news.item5.title"),
    date: "07-08",
    year: "2020",
    content: t("site.news.item5.content"),
  },
];
