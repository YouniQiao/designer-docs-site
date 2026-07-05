# deleteVlanIp

## deleteVlanIp

```TypeScript
function deleteVlanIp(ifName: string, vlanId: int, address: LinkAddress): Promise<void>
```

Delete ip of vlan interface by vlanId. To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.

**起始版本：** 23

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ifName | string | 是 | interface name. |
| vlanId | int | 是 | vlan id. |
| address | LinkAddress | 是 | vlan ip address. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2100400 | The input network interface name is incorrect. |
| 2100401 | The input IP address is not found. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let ifName = "eth0";
let vlanId = 1;
let netAddress: connection.NetAddress = {
  address: '192.168.1.1',
  family: 1,
  port: 8080
}
let address: connection.LinkAddress = {
  address: netAddress,
  prefixLength: 24
}
connection.deleteVlanIp(ifName, vlanId, address).then(() => {
  console.info(`Delete vlan ip success`);
}).catch((error: BusinessError) => {
  console.error(`Failed to delete vlan ip. Code:${error.code}, message:${error.message}`);
});

```

