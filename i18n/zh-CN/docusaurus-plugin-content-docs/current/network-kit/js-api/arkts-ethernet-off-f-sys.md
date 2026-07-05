# off

## off('interfaceStateChange')

```TypeScript
function off(type: 'interfaceStateChange', callback?: Callback<InterfaceStateInfo>): void
```

Unregister a callback from the ethernet interface active state change.

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'interfaceStateChange' | 是 | Indicates Event name. |
| callback | Callback&lt;InterfaceStateInfo> | 否 | Including iface Indicates the ethernet interface,  and active Indicates whether the interface is active. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

**示例：**

```TypeScript
import { ethernet } from '@kit.NetworkKit';

ethernet.off('interfaceStateChange');

```

