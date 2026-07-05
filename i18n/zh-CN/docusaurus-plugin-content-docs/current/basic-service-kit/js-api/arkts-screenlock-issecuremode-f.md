# isSecureMode

## isSecureMode

```TypeScript
function isSecureMode(callback: AsyncCallback<boolean>): void
```

Checks whether the screen lock of the current device is secure.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.ScreenLock

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of isSecureMode. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';

screenLock.isSecureMode((err: BusinessError, data: Boolean)=>{
  if (err) {
    console.error(`Failed to obtain whether the device is in secure mode, Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in Obtaining whether the device is in secure mode. result: ${data}`);
});

```

## isSecureMode

```TypeScript
function isSecureMode(): Promise<boolean>
```

Checks whether the screen lock of the current device is secure.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.ScreenLock

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';

screenLock.isSecureMode().then((data: Boolean) => {
  console.info(`Succeeded in Obtaining whether the device is in secure mode. result: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to obtain whether the device is in secure mode, Code: ${err.code}, message: ${err.message}`);
});

```

