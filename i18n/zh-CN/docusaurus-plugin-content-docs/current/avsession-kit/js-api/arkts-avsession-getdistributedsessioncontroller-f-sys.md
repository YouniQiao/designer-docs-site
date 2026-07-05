# getDistributedSessionController

## getDistributedSessionController

```TypeScript
function getDistributedSessionController(distributedSessionType: DistributedSessionType): Promise<Array<AVSessionController>>
```

Get distributed avsession controller

**起始版本：** 18

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| distributedSessionType | DistributedSessionType | 是 | Specifies the distributed session type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AVSessionController>> | Promise for AVSessionController. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 6600101 | Session service exception. |
| 6600109 | The remote connection is not established. |

**示例：**

```TypeScript
import { avSession } from '@kit.AVSessionKit';

avSession.getDistributedSessionController(avSession.DistributedSessionType.TYPE_SESSION_REMOTE).then((sessionControllers: Array<avSession.AVSessionController>) => {
  console.info(`Succeeded in getting distributed session controller, length: ${sessionControllers.length}`);
});

```

