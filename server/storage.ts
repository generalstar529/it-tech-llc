export type Contact = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};

export type BlogPost = {
  id: number;
  title: string;
  content: string;
  slug: string;
  author: string;
  publishedAt: Date;
};

export type InsertContact = Omit<Contact, "id" | "createdAt">;
export type InsertBlogPost = Omit<BlogPost, "id" | "publishedAt">;

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class InMemoryStorage implements IStorage {
  private contacts: Contact[] = [];
  private blogPosts: BlogPost[] = [];

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contact = { id: Date.now(), ...insertContact };
    this.contacts.push(contact);
    return contact;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return this.blogPosts.sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return this.blogPosts.find((post) => post.slug === slug);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const post = { id: Date.now(), ...insertBlogPost };
    this.blogPosts.push(post);
    return post;
  }
}

export const storage = new InMemoryStorage();
