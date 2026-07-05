# getMinWidth

## Modules to Import

```TypeScript
import { wallpaper } from '@ohos.wallpaper';
```

## getMinWidth

```TypeScript
function getMinWidth(callback: AsyncCallback<number>): void
```

Obtains the minimum width of the wallpaper. in pixels. returns 0 if no wallpaper has been set.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | the callback of getMinWidth. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getMinWidth((error: BusinessError, data: Number) => {
    if (error) {
        console.error(`failed to getMinWidth because: ${JSON.stringify(error)}`);
        return;
    }
    console.info(`success to getMinWidth: ${JSON.stringify(data)}`);
});

```


## getMinWidth

```TypeScript
function getMinWidth(): Promise<number>
```

Obtains the minimum width of the wallpaper. in pixels. returns 0 if no wallpaper has been set.

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

wallpaper.getMinWidth().then((data: Number) => {
    console.info(`success to getMinWidth: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`failed to getMinWidth because: ${JSON.stringify(error)}`);
});

```

