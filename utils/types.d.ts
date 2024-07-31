export namespace NBlog {
  interface InfBlog {
    slug: {
      current: string;
      _type: string;
    };
    author: string;
    publishedAt: string;
    mainImage: {
      asset: {
        url: string;
      };
    };
    title: string;
  }

  interface InfFullBlog extends InfBlog {
    blogContent: any;
  }
}
