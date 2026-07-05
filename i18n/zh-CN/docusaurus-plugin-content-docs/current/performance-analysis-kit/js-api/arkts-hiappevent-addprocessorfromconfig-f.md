# addProcessorFromConfig

## addProcessorFromConfig

```TypeScript
function addProcessorFromConfig(processorName: string, configName?: string): Promise<long>
```

Adds the configuration information of the data processor. The configuration file contains information such as the name of the event received by the data processor. This API uses a promise to return the result.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| processorName | string | 是 | Name of a data processor. It can contain only letters, digits,  underscores (_), and dollar signs ($). It cannot start with a digit and cannot exceed 256 characters. |
| configName | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise that returns the unique ID of the added event data processor, which can be used  to remove the data processor. If the adding fails, error code 11105001 is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 11105001 | Invalid parameter value. Possible causes: 1. Incorrect parameter length;  2. Incorrect parameter format. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

hiAppEvent.addProcessorFromConfig("test_name").then((processorId) => {
  hilog.info(0x0000, 'hiAppEvent', `Succeeded in adding processor from config, processorId=${processorId}`);
}).catch((err: BusinessError) => {
  hilog.error(0x0000, 'hiAppEvent', `Failed to add processor from config, code: ${err.code}, message: ${err.message}`);
});

```

