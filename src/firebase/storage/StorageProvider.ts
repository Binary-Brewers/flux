import { ref, uploadString } from "firebase/storage";
import { storage } from "../clientApp";


class StorageProvider {
    private static imageRef = ref(storage, "images");

    uploadImage(imageBase64: string ) : Promise<string> {
        uploadString(StorageProvider.imageRef, imageBase64).then(snapshot => {
            return Promise.resolve(snapshot.metadata.fullPath)
        })

        return Promise.reject();
    }
}