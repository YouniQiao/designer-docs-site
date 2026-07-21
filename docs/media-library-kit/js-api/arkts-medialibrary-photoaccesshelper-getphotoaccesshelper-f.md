# getPhotoAccessHelper

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

<a id="getphotoaccesshelper"></a>
## getPhotoAccessHelper

```TypeScript
function getPhotoAccessHelper(context: Context): PhotoAccessHelper
```

Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-photoAccessHelper-function getPhotoAccessHelper(context: Context): PhotoAccessHelper--><!--Device-photoAccessHelper-function getPhotoAccessHelper(context: Context): PhotoAccessHelper-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Context of the ability instance. |

**Return value:**

| Type | Description |
| --- | --- |
| [PhotoAccessHelper](arkts-medialibrary-sendablephotoaccesshelper-photoaccesshelper-i.md) | PhotoAccessHelper instance obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

```TypeScript
// The phAccessHelper instance obtained is a global object. It is used by default in subsequent operations. If the code snippet is not added, an error will be reported indicating that phAccessHelper is not defined.
// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  build() {
    Row() {
      Button("example").onClick(async () => {
        let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
        let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);
      }).width('100%')
    }
    .height('90%')
  }
}

```

