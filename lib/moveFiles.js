import fs from 'fs'

export function moveFiles(file, path){
  return new Promise((resolve, reject)=>{
    fs.promises.access(path)
      .then( ()=> reject(new Error(`File ${file.name} already exists`)))
      .catch( ()=>{
        file.mv(``)
      } )
  })
}
