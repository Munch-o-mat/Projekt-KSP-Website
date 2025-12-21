import { ObjectId } from "mongodb";

export interface Planet {
    _id?: ObjectId;
    name: string;
    description: string;
    image?: string; // URL to image
    features?: string[]; // e.g. ["Atmosphere", "Moon"]
    orderFromSun?: number;
    // Physical characteristics
    radius?: number; // km
    gravity?: number; // m/s^2
    atmosphere?: boolean;
}

export interface GalleryImage {
    _id?: ObjectId;
    title: string;
    url: string;
    description?: string;
    tags?: string[];
    uploadedAt: Date;
}
