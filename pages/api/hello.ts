// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

/**
 * http://localhost:3000/hello를 요청했을 때 동작하는 서버 코드를 작성할 수 있습니다.
 *
 * @param req
 * @param res
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

export default handler
