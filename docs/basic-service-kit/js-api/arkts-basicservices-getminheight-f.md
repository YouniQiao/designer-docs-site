# getMinHeight

## Modules to Import

```TypeScript
import { wallpaper } from '@ohos.wallpaper';
```

## getMinHeight

```TypeScript
function getMinHeight(callback: AsyncCallback<number>): void
```

Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | the callback of getMinHeight. |

**Example**

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

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.MiscServices.Wallpaper

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | the promise returned by the function. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getMinHeight().then((data: Number) => {
    console.info(`success to getMinHeight: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
    console.error(`failed to getMinHeight because: ${JSON.stringify(error)}`);
});

```

