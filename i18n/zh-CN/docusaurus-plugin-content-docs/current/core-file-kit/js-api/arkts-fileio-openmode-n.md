# OpenMode

open接口flags参数常量。文件打开标签。

**起始版本：** 9

**系统能力：** SystemCapability.FileManagement.File.FileIO

## 导入模块

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## 汇总

### 常量

| 名称 | 描述 |
| --- | --- |
| [APPEND](arkts-openmode-con.md#APPEND) | 以追加方式打开，后续写将追加到文件末尾。 |
| [CREATE](arkts-openmode-con.md#CREATE) | 若文件不存在，则创建文件。 |
| [DIR](arkts-openmode-con.md#DIR) | 如果path不指向目录，则出错。 |
| [NOFOLLOW](arkts-openmode-con.md#NOFOLLOW) | 如果path指向符号链接，则出错。 |
| [NONBLOCK](arkts-openmode-con.md#NONBLOCK) | 如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续IO进行非阻塞操作。 |
| [READ_ONLY](arkts-openmode-con.md#READ_ONLY) | 只读打开。 |
| [READ_WRITE](arkts-openmode-con.md#READ_WRITE) | 读写打开。 |
| [SYNC](arkts-openmode-con.md#SYNC) | 以同步IO的方式打开文件。 |
| [TRUNC](arkts-openmode-con.md#TRUNC) | 如果文件存在且以只写或读写的方式打开，则将其长度裁剪为零。 |
| [UNCACHE](arkts-openmode-con.md#UNCACHE) | UNCACHE IO。 |
| [WRITE_ONLY](arkts-openmode-con.md#WRITE_ONLY) | 只写打开。 |

