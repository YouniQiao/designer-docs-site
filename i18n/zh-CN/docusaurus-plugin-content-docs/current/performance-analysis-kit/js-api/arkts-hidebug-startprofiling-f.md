# startProfiling

## startProfiling

```TypeScript
function startProfiling(filename: string): void
```

Starts the VM profiling method. **startProfiling(filename: string)** and **stopProfiling()** are called in pairs. **startProfiling(filename: string)** always occurs before **stopProfiling()**. You are advised not to call either of these methods repeatedly. Otherwise, an exception may occur.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** hidebug.startJsCpuProfiling

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filename | string | 是 | Custom file name of the sampling data. The .json file is generated in the files  directory of the application based on the specified file name. The maximum length of a string is 128. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

hidebug.startProfiling("cpuprofiler-20220216");
// code block
// ...
// code block
hidebug.stopProfiling();

```

