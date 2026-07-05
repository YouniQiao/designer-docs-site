# removeProcessor

## removeProcessor

```TypeScript
function removeProcessor(id: long): void
```

Removes the data processor of a reported event.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | long | 是 | ID of a data processor. The value must be greater than 0. The value is obtained by calling  [addProcessor]hiAppEvent.addProcessor or  [addProcessorFromConfig]hiAppEvent.addProcessorFromConfig. |

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
  // 根据添加数据处理者返回的标识id移除特定数据处理者
  hiAppEvent.removeProcessor(id);
} catch (error) {
  hilog.error(0x0000, 'hiAppEvent', `failed to removeProcessor event, code=${error.code}`);
}

```

