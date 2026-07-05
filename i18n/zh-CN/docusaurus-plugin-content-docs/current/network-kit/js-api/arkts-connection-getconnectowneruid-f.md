# getConnectOwnerUid

## getConnectOwnerUid

```TypeScript
function getConnectOwnerUid(protocol: ProtocolType, local: NetAddress, remote: NetAddress): Promise<int>
```

Obtains the data network that is activated by default. You can only call this method in VPN application.

**起始版本：** 23

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| protocol | ProtocolType | 是 | Protocol type. |
| local | NetAddress | 是 | Local net address. |
| remote | NetAddress | 是 | Remote net address. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | The owner uid of the specified connection. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100301 | Incorrect usage in non-VPN application. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let protocol = connection.ProtocolType.PROTO_TYPE_TCP;
let local: connection.NetAddress = { address: '192.168.1.100', family: 1, port: 6666 };
let remote: connection.NetAddress = { address: '192.168.1.200', family: 1, port: 8888 };
connection.getConnectOwnerUid(protocol, local, remote).then((uid) => {
  console.info(`uid: ${uid}`);
}).catch((error: BusinessError) => {
  console.error(`getConnectOwnerUid failed. errorCode: ${error.code} message:${error.message}`);
});

```

