# isChangePermitted

## isChangePermitted

```TypeScript
function isChangePermitted(callback: AsyncCallback<boolean>): void
```

Checks whether to allow the application to change the wallpaper for the current user. Returns true if the application is allowed to set a wallpaper for the current user. returns false otherwise.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.Wallpaper

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of isChangePermitted. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.isChangePermitted((error: BusinessError, data: Boolean) => {
    if (error) {
        console.error(`failed to isChangePermitted because: ${JSON.stringify(error)}`);
        return;
    }
    console.info(`success to isChangePermitted: ${JSON.stringify(data)}`);
});

```

## isChangePermitted

```TypeScript
function isChangePermitted(): Promise<boolean>
```

Checks whether to allow the application to change the wallpaper for the current user. Returns true if the application is allowed to set a wallpaper for the current user. returns false otherwise.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.Wallpaper

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.isChangePermitted().then((data: Boolean) => {
    console.info(`success to isChangePermitted: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
    console.error(`failed to isChangePermitted because: ${JSON.stringify(error)}`);
});

```

