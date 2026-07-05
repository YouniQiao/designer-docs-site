# addProcessor

## addProcessor

```TypeScript
function addProcessor(processor: Processor): long
```

Adds the configuration information of the data processor, such as name of the data processor. This is a synchronous API and involves time-consuming operations. To ensure performance, you are advised to use the asynchronous API [addProcessorFromConfig]hiAppEvent.addProcessorFromConfig or use a child thread.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| processor | Processor | 是 | Data processor. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | ID of the data processor of the reported event, which uniquely identifies the data processor and  can be used to remove the data processor. If the operation fails, -1 is returned. If the operation is  successful, a value greater than 0 is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let processor: hiAppEvent.Processor = {
    name: 'analytics_demo'
  };
  let id: number = hiAppEvent.addProcessor(processor);
  hilog.info(0x0000, 'hiAppEvent', `addProcessor event was successful, id=${id}`);
} catch (error) {
  hilog.error(0x0000, 'hiAppEvent', `failed to addProcessor event, code=${error.code}`);
}

```

