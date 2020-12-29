type RootState = {
  dataArticle: ArticleList[];
  searchData: TitleData[];
}
type ArticleList = {
  id: number;
  title: string;
  artUrl: string;
  describe: string;
}
type TitleData = {
  title: string;
}




interface Window {
  store: {
    dataArticle: ArticleList[];
  };
}