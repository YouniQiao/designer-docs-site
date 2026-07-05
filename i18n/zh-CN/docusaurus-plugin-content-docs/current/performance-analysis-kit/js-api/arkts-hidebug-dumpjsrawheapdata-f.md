# dumpJsRawHeapData

## dumpJsRawHeapData

```TypeScript
function dumpJsRawHeapData(needGC?: boolean): Promise<string>
```

Dumps the original heap snapshot of the VM for the current thread and generates a .rawheap file. This API uses a promise to return the result. The file can be converted into a heapsnapshot file using rawheap-translator for parsing. > **NOTE** > > This API is resource-consuming. Therefore, the calling frequency and times are strictly limited. You need to > delete the files immediately after processing them. > > This API is valid only when the **Developer options** is enabled.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| needGC | boolean | 否 | Whether GC is required before storing heap snapshots. The value true indicates that  GC is required, and false indicates the opposite. The default value is true. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Path of the generated snapshot file. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 11400106 | Quota exceeded. |
| 11400107 | Fork operation failed. |
| 11400108 | Failed to wait for the child process to finish. |
| 11400109 | Timeout while waiting for the child process to finish. |
| 11400110 | Disk remaining space too low. |
| 11400111 | Napi interface call exception. |
| 11400112 | Repeated data dump. |
| 11400113 | Failed to create dump file. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';
hidebug.dumpJsRawHeapData().then((filePath: string) => {
  console.info(`dumpJsRawHeapData success and generated file path is ${filePath}`)
}).catch((error: BusinessError) => {
  console.error(`error code: ${error.code}, error msg: ${error.message}`);
})

```

## dumpJsRawHeapData

```TypeScript
function dumpJsRawHeapData(needGC: boolean, needClean: boolean): Promise<string>
```

Dumps the original heap snapshot of the VM for the current thread. The API uses a promise to return the path of the .rawheap file. You can use rawheap-translator to convert the generated file into a .heapsnapshot file for parsing. The generated file will be stored in a folder within the application directory. However, since this file is usually large, the system imposes restrictions on the frequency and number of calls to this function. Consequently, you might fail to obtain the dump file due to quota limitations. These failures will persist until the quota is regularly refreshed by the system. Therefore, it is advisable to delete the file immediately after you have finished processing it. Moreover, it is recommended that you use this function in the gray - release version.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| needGC | boolean | 是 | Whether GC is required when a heap snapshot is dumped. The default value is true.  If this parameter is not specified, GC is triggered before dumping. |
| needClean | boolean | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns the path of the generated snapshot file. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 11400106 | Quota exceeded. |
| 11400107 | Fork operation failed. |
| 11400108 | Failed to wait for the child process to finish. |
| 11400109 | Timeout while waiting for the child process to finish. |
| 11400110 | Disk remaining space too low. |
| 11400111 | Napi interface call exception. |
| 11400112 | Repeated data dump. |
| 11400113 | Failed to create dump file. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

hidebug.dumpJsRawHeapData(true, true).then((filePath: string) => {
  console.info(`dumpJsRawHeapData success and generated file path is ${filePath}`);
}).catch((error: BusinessError) => {
  console.error(`error code: ${error.code}, error msg: ${error.message}`);
})

```

## dumpJsRawHeapData

```TypeScript
function dumpJsRawHeapData(needGC: boolean, needClean: boolean, processDump: boolean): Promise<Array<string>>
```

Dump the raw heap snapshot of the JavaScript Virtual Machine for the current thread. The generated file will be stored in a folder within the application directory. However, since this file is usually large, the system imposes restrictions on the frequency and number of calls to this function. Consequently, you might fail to obtain the dump file due to quota limitations. These failures will persist until the quota is regularly refreshed by the system. Therefore, it is advisable to delete the file immediately after you have finished processing it. Moreover, it is recommended that you use this function in the gray - release version.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| needGC | boolean | 是 | Whether do GC before dump, default is true. |
| needClean | boolean | 是 | Whether to release the snapshot cache before dumping the heap snapshot.  The default value is false. |
| processDump | boolean | 是 | Whether to dump the heap of whole process.  The default value is false. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string>> | Returns a list of the full path of raw heap snapshot file. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 11400106 | Quota exceeded. |
| 11400107 | Fork operation failed. |
| 11400108 | Failed to wait for the child process to finish. |
| 11400109 | Timeout while waiting for the child process to finish. |
| 11400110 | Disk remaining space too low. |
| 11400111 | Napi interface call exception. |
| 11400112 | Repeated data dump. |
| 11400113 | Failed to create dump file. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

hidebug.dumpJsRawHeapData(true, true, true).then((filePathArray: Array<string>) => {
  console.info(`dumpJsRawHeapData success and generated file path is ${JSON.stringify(filePathArray)}`);
}).catch((error: BusinessError) => {
  console.error(`error code: ${error.code}, error msg: ${error.message}`);
})

```

