# isScreenLocked

## isScreenLocked

```TypeScript
function isScreenLocked(callback: AsyncCallback<boolean>): void
```

Checks whether the screen is currently locked.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.ScreenLock

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of isScreenLocked. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';

screenLock.isScreenLocked((err: BusinessError, data: Boolean)=>{      
  if (err) {
    console.error(`Failed to obtain whether the screen is locked, Code: ${err.code}, message: ${err.message}`);
    return;    
  }
  console.info(`Succeeded in Obtaining whether the screen is locked. result: ${data}`);
});

```

## isScreenLocked

```TypeScript
function isScreenLocked(): Promise<boolean>
```

Checks whether the screen is currently locked.

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

screenLock.isScreenLocked().then((data: Boolean) => {
  console.info(`Succeeded in Obtaining whether the screen is locked. result: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to obtain whether the screen is locked, Code: ${err.code}, message: ${err.message}`);
});

```

