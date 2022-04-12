import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
   console.log('evento recebido')

   return response.json({ message: 'ok' })
}