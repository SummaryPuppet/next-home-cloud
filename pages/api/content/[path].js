import { readDirectories, processPath } from '/lib/readDirectories'

export default async function contentPath (req, res){
  const path =  req.query.path
  const dirPath = await processPath(path)

  const content = await readDirectories(dirPath.absolutePath)
  
  return res.status(200).json({ 
    content, 
    sucess: true,
    path: dirPath
  })
}
