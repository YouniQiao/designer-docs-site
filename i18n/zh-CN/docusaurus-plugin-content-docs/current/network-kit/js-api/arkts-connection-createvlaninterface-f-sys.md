# createVlanInterface

## createVlanInterface

```TypeScript
function createVlanInterface(ifName: string, vlanId: int): Promise<void>
```

Create vlan interface by vlanId. To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.

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

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let ifName = "eth0";
let vlanId = 1;
connection.createVlanInterface(ifName, vlanId).then(() => {
  console.info(`Create vlan success`);
}).catch((error: BusinessError) => {
  console.error(`Failed to create vlan. Code:${error.code}, message:${error.message}`);
});

```

