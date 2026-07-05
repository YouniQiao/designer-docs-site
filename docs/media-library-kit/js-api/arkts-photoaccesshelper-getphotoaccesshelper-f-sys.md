# getPhotoAccessHelper

## getPhotoAccessHelper

```TypeScript
function getPhotoAccessHelper(context: Context, userId: int): PhotoAccessHelper
```

Returns an instance of PhotoAccessHelper

**Since:** 19

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Hap context information |
| userId | int | Yes | Target userId |

**Return value:**

| Type | Description |
| --- | --- |
| PhotoAccessHelper | Instance of PhotoAccessHelper |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 13900020 | Invalid argument |

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
        // 101 indicates the user ID of another user space.
        let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context, 101);
      }).width('100%')
    }
    .height('90%')
  }
}

```

