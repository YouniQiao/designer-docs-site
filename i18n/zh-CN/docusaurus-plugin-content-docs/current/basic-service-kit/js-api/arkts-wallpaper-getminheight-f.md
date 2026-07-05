# getMinHeight

## getMinHeight

```TypeScript
function getMinHeight(callback: AsyncCallback<number>): void
```

Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.Wallpaper

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number> | 是 | the callback of getMinHeight. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getMinHeight((error: BusinessError, data: Number) => {
    if (error) {
        console.error(`failed to getMinHeight because: ${JSON.stringify(error)}`);
        return;
    }
    console.info(`success to getMinHeight: ${JSON.stringify(data)}`);
});

```

## getMinHeight

```TypeScript
function getMinHeight(): Promise<number>
```

Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.Wallpaper

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getMinHeight().then((data: Number) => {
    console.info(`success to getMinHeight: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
    console.error(`failed to getMinHeight because: ${JSON.stringify(error)}`);
});

```

