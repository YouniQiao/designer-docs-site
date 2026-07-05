# setUserId

## setUserId

```TypeScript
function setUserId(name: string, value: string): void
```

Sets a user ID, which is used for association when a [Processor]hiAppEvent.Processor is configured.

**起始版本：** 11

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Key of a user ID. The value is string that contains a maximum of 256 characters, including  digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must not start with a digit. |
| value | string | 是 | Value of a user ID. It can contain a maximum of 256 characters. If the value is null  or left empty, the user ID is cleared. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  hiAppEvent.setUserId('key', 'value');
} catch (error) {
  hilog.error(0x0000, 'hiAppEvent', `failed to setUserId event, code=${error.code}`);
}

```

