# offSessionCreate

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

<a id="offsessioncreate"></a>
## offSessionCreate

```TypeScript
function offSessionCreate(callback?: Callback<AVSessionDescriptor>): void
```

Unregister session create callback

**Since:** 23

**Required permissions:** ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC

<!--Device-avSession-function offSessionCreate(callback?: Callback<AVSessionDescriptor>): void--><!--Device-avSession-function offSessionCreate(callback?: Callback<AVSessionDescriptor>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AVSessionDescriptor&gt; | No | Used to unregister listener for ('sessionCreate') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

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
          .onClick(()=>{
            avSession.onSessionCreate((descriptor: avSession.AVSessionDescriptor) => {
            });
            avSession.offSessionCreate();
          })
      }
    .width('100%')
    .height('100%')
  }
}

```

