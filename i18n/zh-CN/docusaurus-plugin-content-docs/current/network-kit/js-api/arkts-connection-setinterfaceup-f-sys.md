# setInterfaceUp

## setInterfaceUp

```TypeScript
function setInterfaceUp(ifaceName: string): Promise<void>
```

Set a specific interface up.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ifaceName | string | 是 | the name of the interface to set up.  Value range:(0,1024]  Name of the actual network adapter to be started  If the network adapter exists, try to up the network adapter.  If the network adapter does not exist or does not meet the up condition, the network adapter fails to be up.  The network adapter exists in the kernel, and the network adapter meets the up condition.  None  None |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2100003 | System internal error. |

