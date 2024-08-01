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

export namespace NEventItem {
  interface EventItemProps {
    title: string;
    slug: {
      current: string;
      _type: string;
    };
    eventDate: string;
    eventImage: {
      asset: {
        url: string;
      };
    };
  }

  interface IImageObj {
    _type: string;
    _key: string;
    asset: any;
  }

  interface fullEventDetails {
    eventImage: {
      asset: {
        url: string;
      };
    };
    title: string;
    eventDescription: string;
    eventDate: string;
    eventOrganizerContact: number;
    eventVenue: string;
    eventShootImages: IImageObj[];
    eventOrganizer: "The TnNu";
  }

  interface mainDetails {
    eventImage: {
      asset: {
        url: string;
      };
    };
    title: string;
    eventDescription: string;
    eventDate: string;
    eventOrganizerContact: number;
    eventVenue: string;
  }
}
