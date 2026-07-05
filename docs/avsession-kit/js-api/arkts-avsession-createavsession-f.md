# createAVSession

## createAVSession

```TypeScript
function createAVSession(context: Context, tag: string, type: AVSessionType, callback: AsyncCallback<AVSession>): void
```

Create an AVSession instance. An ability can only create one AVSession

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | The context of application |
| tag | string | Yes | A user-defined name for this session |
| type | AVSessionType | Yes | The type of session {@link AVSessionType} |
| callback | AsyncCallback&lt;AVSession> | Yes | async callback for AVSession. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
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
        .onClick(()=>{
          let currentAVSession: avSession.AVSession;
          let tag = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let sessionId: string;  // Used as an input parameter of subsequent functions.

          avSession.createAVSession(context, tag, "audio", async (data: avSession.AVSession) => {
              currentAVSession = data;
              sessionId = currentAVSession.sessionId;
              console.info(`Succeeded in creating AV session, sessionId: ${sessionId}`);
            });
        })
    }
    .width('100%')
    .height('100%')
  }
}

```

## createAVSession

```TypeScript
function createAVSession(context: Context, tag: string, type: AVSessionType): Promise<AVSession>
```

Create an AVSession instance. An ability can only create one AVSession

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | The context of application |
| tag | string | Yes | A user-defined name for this session |
| type | AVSessionType | Yes | The type of session {@link AVSessionType} |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVSession> | Promise for AVSession |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
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
          .onClick(()=>{
            let currentAVSession: avSession.AVSession;
            let tag = "createNewSession";
            let context: Context = this.getUIContext().getHostContext() as Context;
            let sessionId: string;  // Used as an input parameter of subsequent functions.

            avSession.createAVSession(context, tag, "audio").then(async (data: avSession.AVSession) => {
            currentAVSession = data;
            sessionId = currentAVSession.sessionId;
            console.info(`Succeeded in creating AV session, sessionId: ${sessionId}`);
            });
          })
      }
    .width('100%')
    .height('100%')
  }
}

```

