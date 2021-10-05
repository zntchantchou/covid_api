import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Tag } from './tags.model';
import { models } from 'src/db/constants'


@Injectable()
export class TagsService {
  constructor(@Inject(models.tag) private tagModel: Model<Tag>){}

  async getAll(): Promise<Tag[]>{
    return this.tagModel.find();
  }

  async getById(tagId: string): Promise<Tag>{
    return this.tagModel.findById(tagId);
  }

  async getTagsById(ids: string[]): Promise<Tag[]> {
    return this.tagModel.find({$in: ids})
  }
}
