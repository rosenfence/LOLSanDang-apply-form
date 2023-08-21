import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getLists(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    let db = (await connectDB).db('apply');
    let lists = await db.collection('list').find().toArray();
    res.status(200).json(lists);
  } else {
    res.status(400).json('bad request');
  }
}
