# offActiveSessionChanged

## offActiveSessionChanged

```TypeScript
function offActiveSessionChanged(callback?: Callback<Array<AVSessionDescriptor>>): void
```

Unregister active session changed callback.

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVSessionDescriptor>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 6600101 | Session service exception. |

**Example**

```TypeScript
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(() => {
          avSession.onActiveSessionChanged((descriptors: Array<avSession.AVSessionDescriptor>) => {
          });
          avSession.offActiveSessionChanged();
        })
    }
    .width('100%')
    .height('100%')
  }
}

```

