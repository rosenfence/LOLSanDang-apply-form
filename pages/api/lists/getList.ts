import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getLists(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    let db = (await connectDB).db('apply');
    const listId: string = req.query.listId;
    let lists = await db.collection('list').findOne({ _id: new ObjectId(listId) });
    res.status(200).json(lists);
  } else {
    res.status(400).json('bad request');
  }
}
