# setVirtualScreenSurface (System API)

## Modules to Import

```TypeScript
import { screen } from '@ohos.screen';
```

## setVirtualScreenSurface

```TypeScript
function setVirtualScreenSurface(screenId:number, surfaceId: string, callback: AsyncCallback<void>): void
```

Sets a surface for a virtual screen. The virtual screen displays the content of the surface. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.CAPTURE_SCREEN

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | number | Yes | Screen ID. The value must be an integer. |
| surfaceId | string | Yes | Surface ID of the virtual screen. The value can be customized. You can specify thesurface ID of an existing surface. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the virtual screen surface issuccessfully set, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |

**Example**

```TypeScript
// Index.ets
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  xComponentController: XComponentController = new XComponentController();

  setVirtualScreenSurface = () => {
    let screenId: number = 1;
    let surfaceId = this.xComponentController.getXComponentSurfaceId();
    // Set the surface of the virtual screen.
    screen.setVirtualScreenSurface(screenId, surfaceId, (err: BusinessError) => {
    const errCode: number = err.code;
    if (errCode) {
      console.error(`Failed to set the surface for the virtual screen. Code: ${err.code}, message: ${err.message}`);
      return;
    }
      console.info('Succeeded in setting the surface for the virtual screen.');
    });
  }
  build() {
    RelativeContainer() {
      XComponent({
        type: XComponentType.SURFACE,
        controller: this.xComponentController
      })
      Button('setSurface')
        .onClick((event: ClickEvent) => {
          this.setVirtualScreenSurface();
      }).width('100%')
      .height(20)
    }
    .width('100%')
    .height('100%')
  }
}

```


## setVirtualScreenSurface

```TypeScript
function setVirtualScreenSurface(screenId:number, surfaceId: string): Promise<void>
```

Sets a surface for a virtual screen. The virtual screen displays the content of the surface. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.CAPTURE_SCREEN

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | number | Yes | Screen ID. The value must be an integer. |
| surfaceId | string | Yes | Surface ID of the virtual screen. The value can be customized. You can specify thesurface ID of an existing surface. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |

**Example**

```TypeScript
// Index.ets
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  xComponentController: XComponentController = new XComponentController();

  setVirtualScreenSurface = () => {
    let screenId: number = 1;
    let surfaceId = this.xComponentController.getXComponentSurfaceId();
    // Set the surface of the virtual screen.
    screen.setVirtualScreenSurface(screenId, surfaceId).then(() => {
      console.info('Succeeded in setting the surface for the virtual screen.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to set the surface for the virtual screen. Code: ${err.code}, message: ${err.message}`);
    });
  }
  build() {
    RelativeContainer() {
      XComponent({
        type: XComponentType.SURFACE,
        controller: this.xComponentController
      })
      Button('setSurface')
        .onClick((event: ClickEvent) => {
          this.setVirtualScreenSurface();
      }).width('100%')
      .height(20)
    }
    .width('100%')
    .height('100%')
  }
}

```

