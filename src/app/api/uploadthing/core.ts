import { createUploadthing, type FileRouter } from "uploadthing/next";

// Initialize the uploadthing instance
const f = createUploadthing();

// Define your file router
export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "16MB" } })
        .middleware(async (req) => {
            return { userId: "testUser" };  // Use a static user ID for testing
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Upload complete for userId:", metadata.userId);
            console.log("File URL:", file.url);
        }),
} satisfies FileRouter;

// Export the type of our FileRouter
export type OurFileRouter = typeof ourFileRouter;

// Create and export the Next.js route handler for this FileRouter
import { createNextRouteHandler } from "uploadthing/next";
export const { GET, POST } = createNextRouteHandler({
    router: ourFileRouter,
});
