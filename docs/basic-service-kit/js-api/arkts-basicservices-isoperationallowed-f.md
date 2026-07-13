# isOperationAllowed

## Modules to Import

```TypeScript
import { wallpaper } from '@kit.BasicServicesKit';
```

## isOperationAllowed

```TypeScript
function isOperationAllowed(callback: AsyncCallback<boolean>): void
```

Checks whether a user is allowed to set wallpapers.
Returns true if a user is allowed to set wallpapers. returns false otherwise.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | the callback of isOperationAllowed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.isOperationAllowed((error: BusinessError, data: Boolean) => {
    if (error) {
        console.error(`failed to isOperationAllowed because: ${JSON.stringify(error)}`);
        return;
    }
    console.info(`success to isOperationAllowed: ${JSON.stringify(data)}`);
});

```


## isOperationAllowed

```TypeScript
function isOperationAllowed(): Promise<boolean>
```

Checks whether a user is allowed to set wallpapers.
Returns true if a user is allowed to set wallpapers. returns false otherwise.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.MiscServices.Wallpaper

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | the promise returned by the function. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.isOperationAllowed().then((data: Boolean) => {
    console.info(`success to isOperationAllowed: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`failed to isOperationAllowed because: ${JSON.stringify(error)}`);
});

```

