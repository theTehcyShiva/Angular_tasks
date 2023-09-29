import {Injectable} from '@angular/core';
// @Injectable()
export interface comicInterface {
    "Id": number,
        "Name": string,
        "Cover_Image_Url": string,
        "Publication_Date": Date,
        "Genre": string,
        "Excerpt": string,
        "Written_By": string,
        "Publisher": string
}