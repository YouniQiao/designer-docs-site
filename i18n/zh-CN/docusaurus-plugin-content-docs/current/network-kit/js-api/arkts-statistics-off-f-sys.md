# off

## off('netStatsChange')

```TypeScript
function off(type: 'netStatsChange', callback?: Callback<NetStatsChangeInfo>): void
```

Unregister notifications of network traffic updates.

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_NETWORK_STATS

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'netStatsChange' | 是 | Indicates Event name. |
| callback | Callback&lt;NetStatsChangeInfo> | 否 | The callback of off. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { statistics } from '@kit.NetworkKit';

class IFace {
  iface: string = ""
  uid?: number = 0
}
let callback: (data: IFace) => void = (data: IFace) => {
    console.info("on netStatsChange, iFace:" + data.iface + " uid: " + data.uid);
}
statistics.on('netStatsChange', callback);
// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
statistics.off('netStatsChange', callback);
statistics.off('netStatsChange');

```

