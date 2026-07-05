# onActiveSessionChanged

## onActiveSessionChanged

```TypeScript
function onActiveSessionChanged(callback: Callback<Array<AVSessionDescriptor>>): void
```

Register active session changed callback.

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVSessionDescriptor>> | Yes | Used to handle activeSessionChange event |

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
          avSession.onActiveSessionChanged((descs: Array<avSession.AVSessionDescriptor>) => {
            descs.forEach((desc, index) => {
              console.info(`=== Session ${index + 1}/${descs.length} ===`);
              console.info(`on onActiveSessionChanged : isActive : ${desc.isActive}`);
              console.info(`on onActiveSessionChanged : type : ${desc.type}`);
              console.info(`on onActiveSessionChanged : sessionTag : ${desc.sessionTag}`);
            });
          });
        })
    }
    .width('100%')
    .height('100%')
  }
}

```

