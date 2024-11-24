import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PlaylistDocument=Playlist & Document;

@Schema({timestamps:true})
export class Playlist{
    @Prop({
        type:String,required:true
    })
    url:string[]
}
export const PlaylistSchema=SchemaFactory.createForClass(Playlist)