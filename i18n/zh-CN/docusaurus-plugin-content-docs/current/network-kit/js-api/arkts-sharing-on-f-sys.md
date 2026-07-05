# on

## on('sharingStateChange')

```TypeScript
function on(type: 'sharingStateChange', callback: Callback<boolean>): void
```

Register a callback for the global network sharing state change.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sharingStateChange' | 是 | Indicates Event name. |
| callback | Callback&lt;boolean> | 是 | the callback function that returns the status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

**示例：**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.on('sharingStateChange', (data: boolean) => {
  console.info('on sharingStateChange: ' + JSON.stringify(data));
});

```

## on('interfaceSharingStateChange')

```TypeScript
function on(type: 'interfaceSharingStateChange', callback: Callback<InterfaceSharingStateInfo>): void
```

Register a callback for the interface network sharing state change.

**起始版本：** 11

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'interfaceSharingStateChange' | 是 | Indicates Event name. |
| callback | Callback&lt;InterfaceSharingStateInfo> | 是 | the callback function that returns the message. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

**示例：**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.on('interfaceSharingStateChange', (data: object) => {
  console.info('on interfaceSharingStateChange:' + JSON.stringify(data));
});

```

## on('sharingUpstreamChange')

```TypeScript
function on(type: 'sharingUpstreamChange', callback: Callback<NetHandle>): void
```

Register a callback for the sharing upstream network change.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sharingUpstreamChange' | 是 | Indicates Event name. |
| callback | Callback&lt;NetHandle> | 是 | the callback function that returns the network handle. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

**示例：**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.on('sharingUpstreamChange', (data: object) => {
  console.info('on sharingUpstreamChange:' + JSON.stringify(data));
});

```

