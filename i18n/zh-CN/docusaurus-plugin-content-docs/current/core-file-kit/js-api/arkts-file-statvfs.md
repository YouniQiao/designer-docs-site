# @ohos.file.statvfs

该模块提供文件系统相关存储信息的功能：向应用程序提供获取文件系统总字节数、空闲字节数的JS接口。

**起始版本：** 9

**系统能力：** SystemCapability.FileManagement.File.FileIO

## 导入模块

```TypeScript
import { statfs } from '@kit.CoreFileKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getFreeSize](arkts-statfs-getfreesize-f.md#getFreeSize-1) | 异步方法获取指定文件系统空闲字节数，以Promise形式返回结果。 |
| [getFreeSize](arkts-statfs-getfreesize-f.md#getFreeSize-2) | 异步方法获取指定文件系统空闲字节数，使用callback形式返回结果。 |
| [getFreeSizeSync](arkts-statfs-getfreesizesync-f.md#getFreeSizeSync-1) | 以同步方法获取指定文件系统空闲字节数。 |
| [getTotalSize](arkts-statfs-gettotalsize-f.md#getTotalSize-1) | 异步方法获取指定文件系统总字节数，以Promise形式返回结果。 |
| [getTotalSize](arkts-statfs-gettotalsize-f.md#getTotalSize-2) | 异步方法获取指定文件系统总字节数，使用callback形式返回结果。 |
| [getTotalSizeSync](arkts-statfs-gettotalsizesync-f.md#getTotalSizeSync-1) | 以同步方法获取指定文件系统总字节数。 |

