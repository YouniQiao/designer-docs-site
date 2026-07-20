# isChangePermitted

## Modules to Import

```TypeScript
import { wallpaper } from '@kit.BasicServicesKit';
```

## isChangePermitted

```TypeScript
function isChangePermitted(callback: AsyncCallback<boolean>): void
```

Checks whether to allow the application to change the wallpaper for the current user.Returns true if the application is allowed to set a wallpaper for the current user. returns false otherwise.

**Since:** 7

**Deprecated since:** 9

<!--Device-wallpaper-function isChangePermitted(callback: AsyncCallback<boolean>): void--><!--Device-wallpaper-function isChangePermitted(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | the callback of isChangePermitted. |

**Example**

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

Checks whether to allow the application to change the wallpaper for the current user.Returns true if the application is allowed to set a wallpaper for the current user. returns false otherwise.

**Since:** 7

**Deprecated since:** 9

<!--Device-wallpaper-function isChangePermitted(): Promise<boolean>--><!--Device-wallpaper-function isChangePermitted(): Promise<boolean>-End-->

**System capability:** SystemCapability.MiscServices.Wallpaper

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | the promise returned by the function. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.isChangePermitted().then((data: Boolean) => {
    console.info(`success to isChangePermitted: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
    console.error(`failed to isChangePermitted because: ${JSON.stringify(error)}`);
});

```

