type FileType = 'file' | 'directory' | 'dummy'
interface CommonProps {
   id: string;         // 文件id
   type: FileType       // 文件类型
   name: string;       // 名称
   parentId: string | undefined; // 父级目录，如果为根目录则undefined
   depth: number;      // 文件深度
 }
 
interface File extends CommonProps {
   content: string; // 文件内容
 }
 
interface Directory extends CommonProps {
   files: File[];
   dirs: Directory[];
 }