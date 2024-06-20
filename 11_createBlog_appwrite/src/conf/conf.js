const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_PROJECT_Id),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_Id),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_Id),
    appwriteBucketID: String(import.meta.env.VITE_BUCKET_Id),
   
}

export default conf