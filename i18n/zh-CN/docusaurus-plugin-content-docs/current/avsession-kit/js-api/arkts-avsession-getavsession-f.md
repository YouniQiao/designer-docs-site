# getAVSession

## getAVSession

```TypeScript
function getAVSession(context: Context): Promise<AVSession>
```

Get an AVSession instance if already created.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | The context of application |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AVSession> | Promise for AVSession |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

**示例：**

```TypeScript
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  private avsessioncontroller !: avSession.AVSessionController;
  @State message: string = 'hello world';

  build() {
    Column() {
        Text(this.message)
          .onClick(()=>{
            let currentAVSession: avSession.AVSession;
            let context: Context = this.getUIContext().getHostContext() as Context;
            let sessionId: string;  // 供后续函数入参使用。
            let sessionTag: string;

            avSession.getAVSession(context).then(async (data: avSession.AVSession) => {
              currentAVSession = data;
              sessionId = currentAVSession.sessionId;
              sessionTag = currentAVSession.sessionTag;
              console.info(`Succeeded in getting AV session, sessionId: ${sessionId}, sessionTag: ${sessionTag}`);
            });
          })
      }
    .width('100%')
    .height('100%')
  }
}

```

