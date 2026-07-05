# off

## off('sharingStateChange')

```TypeScript
function off(type: 'sharingStateChange', callback?: Callback<boolean>): void
```

Unregister a callback for the global network sharing state change.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sharingStateChange' | 是 | Indicates Event name. |
| callback | Callback&lt;boolean> | 否 | the callback function that returns the status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

**示例：**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.off('sharingStateChange', (data: boolean) => {
  console.info(JSON.stringify(data));
});

```

## off('interfaceSharingStateChange')

```TypeScript
function off(type: 'interfaceSharingStateChange', callback?: Callback<InterfaceSharingStateInfo>): void
```

Unregister a callback for the interface network sharing state change.

**起始版本：** 11

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'interfaceSharingStateChange' | 是 | Indicates Event name. |
| callback | Callback&lt;InterfaceSharingStateInfo> | 否 | the callback function that returns the message. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

**示例：**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.off('interfaceSharingStateChange', (data: object) => {
  console.info(JSON.stringify(data));
});

```

## off('sharingUpstreamChange')

```TypeScript
function off(type: 'sharingUpstreamChange', callback?: Callback<NetHandle>): void
```

Unregister a callback for the sharing upstream network change.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sharingUpstreamChange' | 是 | Indicates Event name. |
| callback | Callback&lt;NetHandle> | 否 | the callback function that returns the network handle. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

**示例：**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.off('sharingUpstreamChange', (data: object) => {
  console.info(JSON.stringify(data));
});

```

