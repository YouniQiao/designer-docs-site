# getPhotoAccessHelper (System API)

## Modules to Import

```TypeScript
import { sendablePhotoAccessHelper } from '@ohos.file.sendablePhotoAccessHelper';
```

## getPhotoAccessHelper

```TypeScript
function getPhotoAccessHelper(context: Context, userId: number): PhotoAccessHelper
```

Returns an instance of PhotoAccessHelper

**Since:** 19

**Required permissions:** ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Hap context information |
| userId | number | Yes | Target userId |

**Return value:**

| Type | Description |
| --- | --- |
| PhotoAccessHelper | Instance of PhotoAccessHelper |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
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
        let phAccessHelper = sendablePhotoAccessHelper.getPhotoAccessHelper(context, 101);
      }).width('100%')
    }
    .height('90%')
  }
}

```

