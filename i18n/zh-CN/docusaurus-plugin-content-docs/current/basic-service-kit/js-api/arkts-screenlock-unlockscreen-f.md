# unlockScreen

## unlockScreen

```TypeScript
function unlockScreen(callback: AsyncCallback<void>): void
```

Unlock the screen.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.ScreenLock

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | the callback of unlockScreen. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';

screenLock.unlockScreen((err: BusinessError) => {      
  if (err) {
    console.error(`Failed to unlock the screen, Code: ${err.code}, message: ${err.message}`);
    return;    
  }
  console.info(`Succeeded unlocking the screen.`);
});

```

## unlockScreen

```TypeScript
function unlockScreen(): Promise<void>
```

Unlock the screen.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.ScreenLock

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';

screenLock.unlockScreen().then(() => {
  console.info('Succeeded unlocking the screen.');
}).catch((err: BusinessError) => {
  console.error(`Failed to unlock the screen, Code: ${err.code}, message: ${err.message}`);
});

```

