# dumpJsRawHeapData

## Modules to Import

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
```

## dumpJsRawHeapData

```TypeScript
function dumpJsRawHeapData(needGC?: boolean): Promise<string>
```

Dumps the original heap snapshot of the VM for the current thread and generates a .rawheap file. This API uses a promise to return the result. The file can be converted into a heapsnapshot file using rawheap-translator for parsing. > **NOTE** > > This API is resource-consuming. Therefore, the calling frequency and times are strictly limited. You need to > delete the files immediately after processing them. > > This API is valid only when the **Developer options** is enabled.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| needGC | boolean | No | Whether GC is required before storing heap snapshots. The value **true** indicates thatGC is required, and **false** indicates the opposite. The default value is **true**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Path of the generated snapshot file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [11400106](../errorcode-hiviewdfx-hidebug.md#11400106-quota-exceeded) | Quota exceeded. |
| [11400107](../errorcode-hiviewdfx-hidebug.md#11400107-failed-to-fork-the-child-dump-process) | Fork operation failed. |
| [11400108](../errorcode-hiviewdfx-hidebug.md#11400108-failed-to-wait-for-the-child-dump-process-to-finish) | Failed to wait for the child process to finish. |
| [11400109](../errorcode-hiviewdfx-hidebug.md#11400109-waiting-for-the-child-dump-process-times-out) | Timeout while waiting for the child process to finish. |
| [11400110](../errorcode-hiviewdfx-hidebug.md#11400110-insufficient-disk-space) | Disk remaining space too low. |
| [11400111](../errorcode-hiviewdfx-hidebug.md#11400111-failed-to-call-the-nodeapi) | Napi interface call exception. |
| [11400112](../errorcode-hiviewdfx-hidebug.md#11400112-repeated-data-dump) | Repeated data dump. |
| [11400113](../errorcode-hiviewdfx-hidebug.md#11400113-failed-to-create-a-dump-file) | Failed to create dump file. |

**Example**

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

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| needGC | boolean | Yes | Whether GC is required when a heap snapshot is dumped. The default value is true.If this parameter is not specified, GC is triggered before dumping. |
| needClean | boolean | Yes | Whether to release the snapshot cache before dumping the heap snapshot.The default value is false. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns the path of the generated snapshot file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [11400106](../errorcode-hiviewdfx-hidebug.md#11400106-quota-exceeded) | Quota exceeded. |
| [11400107](../errorcode-hiviewdfx-hidebug.md#11400107-failed-to-fork-the-child-dump-process) | Fork operation failed. |
| [11400108](../errorcode-hiviewdfx-hidebug.md#11400108-failed-to-wait-for-the-child-dump-process-to-finish) | Failed to wait for the child process to finish. |
| [11400109](../errorcode-hiviewdfx-hidebug.md#11400109-waiting-for-the-child-dump-process-times-out) | Timeout while waiting for the child process to finish. |
| [11400110](../errorcode-hiviewdfx-hidebug.md#11400110-insufficient-disk-space) | Disk remaining space too low. |
| [11400111](../errorcode-hiviewdfx-hidebug.md#11400111-failed-to-call-the-nodeapi) | Napi interface call exception. |
| [11400112](../errorcode-hiviewdfx-hidebug.md#11400112-repeated-data-dump) | Repeated data dump. |
| [11400113](../errorcode-hiviewdfx-hidebug.md#11400113-failed-to-create-a-dump-file) | Failed to create dump file. |

**Example**

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

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| needGC | boolean | Yes | Whether do GC before dump, default is true. |
| needClean | boolean | Yes | Whether to release the snapshot cache before dumping the heap snapshot.The default value is false. |
| processDump | boolean | Yes | Whether to dump the heap of whole process.The default value is false. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Returns a list of the full path of raw heap snapshot file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [11400106](../errorcode-hiviewdfx-hidebug.md#11400106-quota-exceeded) | Quota exceeded. |
| [11400107](../errorcode-hiviewdfx-hidebug.md#11400107-failed-to-fork-the-child-dump-process) | Fork operation failed. |
| [11400108](../errorcode-hiviewdfx-hidebug.md#11400108-failed-to-wait-for-the-child-dump-process-to-finish) | Failed to wait for the child process to finish. |
| [11400109](../errorcode-hiviewdfx-hidebug.md#11400109-waiting-for-the-child-dump-process-times-out) | Timeout while waiting for the child process to finish. |
| [11400110](../errorcode-hiviewdfx-hidebug.md#11400110-insufficient-disk-space) | Disk remaining space too low. |
| [11400111](../errorcode-hiviewdfx-hidebug.md#11400111-failed-to-call-the-nodeapi) | Napi interface call exception. |
| [11400112](../errorcode-hiviewdfx-hidebug.md#11400112-repeated-data-dump) | Repeated data dump. |
| [11400113](../errorcode-hiviewdfx-hidebug.md#11400113-failed-to-create-a-dump-file) | Failed to create dump file. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

hidebug.dumpJsRawHeapData(true, true, true).then((filePathArray: Array<string>) => {
  console.info(`dumpJsRawHeapData success and generated file path is ${JSON.stringify(filePathArray)}`);
}).catch((error: BusinessError) => {
  console.error(`error code: ${error.code}, error msg: ${error.message}`);
})

```

