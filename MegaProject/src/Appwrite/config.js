import conf from "../conf/cong";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwritePtojectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionlD,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error: ", +error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionlD,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error: ", +error);
    }
  }

  async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionlD,
            slug
        )
        return true;
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error: ", +error);
        return false;
    }
  }

  async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionlD,
            slug
        )
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error: ", +error);
        return false
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionlD,
            queries,
            100,
            0
        )
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error: ", +error);
        return false;
    }
  }

  // file upload service
  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteDatabaseID,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error: ", +error);
        return false;
    }
  }

  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketlD,
            fileId
        )
        return true;
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error: ", +error);
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
        conf.appwriteBucketlD,
        fileId
    )
  }
}

const service = new Service();

export default service;
