import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getLists(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    let query = JSON.parse(req.body);
    query.isEnded = false;
    let db = (await connectDB).db('apply');
    let lists = await db.collection('list').insertOne(query);
    res.status(200).json('목록 작성 완료');
  } else {
    res.status(400).json('bad request');
  }
}
