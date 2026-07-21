# onSessionCreate

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

<a id="onsessioncreate"></a>
## onSessionCreate

```TypeScript
function onSessionCreate(callback: Callback<AVSessionDescriptor>): void
```

Register session create callback

**Since:** 23

**Required permissions:** ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC

<!--Device-avSession-function onSessionCreate(callback: Callback<AVSessionDescriptor>): void--><!--Device-avSession-function onSessionCreate(callback: Callback<AVSessionDescriptor>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AVSessionDescriptor&gt; | Yes | Used to handle ('sessionCreate' command) |

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
              console.info(`on sessionCreate : isActive : ${descriptor.isActive}`);
              console.info(`on sessionCreate : type : ${descriptor.type}`);
              console.info(`on sessionCreate : sessionTag : ${descriptor.sessionTag}`);
            });
          })
      }
    .width('100%')
    .height('100%')
  }
}


```

