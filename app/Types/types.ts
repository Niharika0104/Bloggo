export interface PostInfo {
    id: string;
    title: string;
    content: string;
    category?:   Category; 
    categoryId?: String;
    author: Author;
    createdAt:string;
    authorId: string;
    comments: Comment[];
    isDeleted?:boolean;
    likes: Like[];
  }
export interface Category{
  id:    String;
  name:string;
  posts:PostInfo[];
  createdAt?:Date;
  updatedAt?:Date;
}

  export interface Author {
    id: string;
    name: string;
    posts?: PostInfo[];
    following?: Following[];
    followers?: Follower[];
  }
  
  export interface Comment {
    commentId: string;
    author: Author;
    replies: Comment[];
  }
  
  export interface Like {
    id: string;
    author: Author;
    post:PostInfo;
    postId:string;
  }
  
  export interface Following {
    followingId: string;
    name: string;
  }
  
  export interface Follower {
    followerId: string;
    name: string;
  }
  