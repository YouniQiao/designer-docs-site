# setNetExtAttribute

## setNetExtAttribute

```TypeScript
function setNetExtAttribute(netHandle: NetHandle, netExtAttribute: string): Promise<void>
```

Set the network extended attribute for a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.SET_NET_EXT_ATTRIBUTE} permission.

**起始版本：** 20

**需要权限：** 

 ohos.permission.SET_NET_EXT_ATTRIBUTE

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| netHandle | NetHandle | 是 | Indicates the network to be set. See {@link NetHandle}. |
| netExtAttribute | string | 是 | Indicates the extended attribute of the network. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getDefaultNet().then((netHandle: connection.NetHandle) => {
  if (netHandle.netId == 0) {
    // 当前没有已连接的网络时，netHandle的netId为0，属于异常场景。可根据实际情况添加处理机制。
    return;
  }
  let netExtAttribute: string = "xxx";
  connection.setNetExtAttribute(netHandle, netExtAttribute).then(() => {
    console.info("setNetExtAttribute success");
  }).catch((error: BusinessError) => {
    console.error("setNetExtAttribute failed, err: " + error.code);
  })
});

```

