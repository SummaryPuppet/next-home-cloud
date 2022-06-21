import fs from 'fs'
import path from 'path'

export async function readDirectories(dirPath){
  try{
    const dir = await fs.promises.opendir(dirPath)
    let content = {
      directories: [],
      files: []
    }

    for await(const dirent of dir){
      if (dirent.isDirectory()){
        content.directories.push(dirent.name)
      } else {
        content.files.push(dirent.name)
      }
    }

    content.directories.sort()
    content.files.sort()


    return { content }
  } catch (err){
    console.error(err)
  }
}

export async function processPath(urlPath){
  const slash = process.platform == "win32" ? "\\" : "/"
  const storage = process.env.LOCAL_STORAGE

  const relativePath = urlPath ? urlPath.replace('-', slash): slash
  const absolutePath = path.join(storage, relativePath)

  return { relativePath, absolutePath }

}
