# dumpHeapData

## dumpHeapData

```TypeScript
function dumpHeapData(filename: string): void
```

Exports the VM heap data and generates a filename.heapsnapshot file. The input parameter is a user-defined file name, excluding the file suffix. The generated file is in the files folder under the application directory. Such as "/data/accounts/account_0/appdata/[package name]/files/xxx.heapsnapshot".

**起始版本：** 8

**废弃版本：** 9

**替代接口：** hidebug.dumpJsHeapData

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filename | string | 是 | User-defined heap file name. The .heapsnapshot file is generated in the files  directory of the application based on the specified file name. The maximum length of a string is 128. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

hidebug.dumpHeapData("heap-20220216");

```

