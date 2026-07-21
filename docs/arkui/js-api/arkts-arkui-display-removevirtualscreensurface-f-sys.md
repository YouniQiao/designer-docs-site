# removeVirtualScreenSurface (System API)

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

<a id="removevirtualscreensurface"></a>
## removeVirtualScreenSurface

```TypeScript
function removeVirtualScreenSurface(screenId: number, surfaceId: string): Promise<void>
```

Remove surface for the virtual screen.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-display-function removeVirtualScreenSurface(screenId: long, surfaceId: string): Promise<void>--><!--Device-display-function removeVirtualScreenSurface(screenId: long, surfaceId: string): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| screenId | number | Yes | Indicates the screen id of the virtual screen. |
| surfaceId | string | Yes | ID of the surface bound to the virtual screen. You can specify the ID of an existing surface. The maximum length for this parameter is 4096 bytes. If it goes beyond that, only the first 4096 bytes are used. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function removeVirtualScreenSurface can not work correctly due to limited device capabilities. |
| [1400001](../errorcode-display.md#1400001-invalid-display-or-screen) | Invalid display or screen. |
| [1400003](../errorcode-display.md#1400003-abnormal-display-manager-service) | This display manager service works abnormally. |
| [1400004](../errorcode-display.md#1400004-parameter-error) | Parameter error. Possible cause: 1. Invalid parameter range. |

**Example**

```TypeScript
// Index.ets
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  xComponentController: XComponentController = new XComponentController();

  removeVirtualScreenSurface = () => {
    let screenId: number = 1;
    let surfaceId = this.xComponentController.getXComponentSurfaceId();
    display.removeVirtualScreenSurface(screenId, surfaceId).then(() => {
      console.info('Succeeded in removing surface for the virtual screen.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to remove surface for the virtual screen. Code:${err.code}, message is ${err.message}`);
    });
  }
  build() {
    RelativeContainer() {
      XComponent({
        type: XComponentType.SURFACE,
        controller: this.xComponentController
      })
      Button('removeSurface')
        .onClick((event: ClickEvent) => {
          this.removeVirtualScreenSurface();
      }).width('100%')
      .height(20)
    }
    .width('100%')
    .height('100%')
  }
}

```

