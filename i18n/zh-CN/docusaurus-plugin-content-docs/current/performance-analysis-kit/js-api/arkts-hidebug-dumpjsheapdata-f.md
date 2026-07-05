# dumpJsHeapData

## dumpJsHeapData

```TypeScript
function dumpJsHeapData(filename : string) : void
```

Dumps VM heap data. > **NOTE** > > Exporting the VM heap is time-consuming, and this API is a synchronous API. Therefore, you are advised not to > call this API in the release version. Otherwise, the application screen may freeze, affecting user experience.

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filename | string | 是 | User-defined name of the VM heap data output file. The .heapsnapshot file is generated  in the files directory of the application based on the specified file name. The maximum length of a string  is 128 bytes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | the parameter check failed, Parameter type error |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  hidebug.dumpJsHeapData("heapData");
} catch (error) {
  console.error(`error code: ${(error as BusinessError).code}, error msg: ${(error as BusinessError).message}`);
}

```

## dumpJsHeapData

```TypeScript
function dumpJsHeapData(filename: string, needClean: boolean): void
```

Exports the heap data. The input parameter is a user-defined file name, excluding the file suffix. The generated file is in the files folder under the application directory.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filename | string | 是 | User-defined file name of the sampling data. The .heapsnapshot file is generated  in the files directory of the application based on the specified file name. |
| needClean | boolean | 是 |  |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  hidebug.dumpJsHeapData("heapData", true);
} catch (error) {
  console.error(`error code: ${(error as BusinessError).code}, error msg: ${(error as BusinessError).message}`);
}

```

