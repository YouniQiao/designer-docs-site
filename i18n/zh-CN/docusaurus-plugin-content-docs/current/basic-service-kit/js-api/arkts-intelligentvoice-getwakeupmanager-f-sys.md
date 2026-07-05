# getWakeupManager

## getWakeupManager

```TypeScript
function getWakeupManager(): WakeupManager
```

Obtains an {@link WakeupManager} instance.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WakeupManager | this {@link WakeupManager} object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 22700101 | No memory. |
| 22700107 | System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let wakeupManager: intelligentVoice.WakeupManager | null = null;
try {
  wakeupManager = intelligentVoice.getWakeupManager();
} catch (err) {
  let error = err as BusinessError;
  console.error(`Get WakeupManager failed. Code:${error.code}, message:${error.message}`);
}

```

