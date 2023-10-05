const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_UR),
    appwritePtojectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionlD: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketlD: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}



export default conf;