// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log('meomeo')
  res.status(301).json({ name: 'John Doe' })
}
