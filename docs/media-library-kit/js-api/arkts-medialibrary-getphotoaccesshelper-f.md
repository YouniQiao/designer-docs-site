# getPhotoAccessHelper

## Modules to Import

```TypeScript
import { sendablePhotoAccessHelper } from '@kit.MediaLibraryKit';
```

## getPhotoAccessHelper

```TypeScript
function getPhotoAccessHelper(context: Context): PhotoAccessHelper
```

Returns an instance of PhotoAccessHelper

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Hap context information |

**Return value:**

| Type | Description |
| --- | --- |
| PhotoAccessHelper | Instance of PhotoAccessHelper |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
// The phAccessHelper instance obtained is a global object. It is used by default in subsequent operations. If the code snippet is not added, an error will be reported indicating that phAccessHelper is not defined.
// Obtain the context from the component and ensure that the return value of this.getUiContext().getHostContext() is UIAbilityContext.
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  build() {
    Row() {
      Button("example").onClick(async () => {
        let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
        let phAccessHelper = sendablePhotoAccessHelper.getPhotoAccessHelper(context);
      }).width('100%')
    }
    .height('90%')
  }
}

```

