# refreshGlobalHttpProxy

## refreshGlobalHttpProxy

```TypeScript
function refreshGlobalHttpProxy(): Promise<HttpProxy>
```

Notifies the system that global proxy re-authentication is required. Upon receiving the notification, the system will reproces the global proxy's authentication status.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.INTERNET

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HttpProxy> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

