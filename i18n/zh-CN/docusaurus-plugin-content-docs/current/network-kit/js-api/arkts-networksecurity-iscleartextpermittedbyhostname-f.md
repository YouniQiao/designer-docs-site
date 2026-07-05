# isCleartextPermittedByHostName

## isCleartextPermittedByHostName

```TypeScript
export function isCleartextPermittedByHostName(hostName: string): boolean
```

Checks whether the Cleartext traffic for a specified hostname is permitted. To invoke this method, you must have the {@code ohos.permission.INTERNET} permission.

**起始版本：** 18

**需要权限：** 

 ohos.permission.INTERNET

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hostName | string | 是 | Indicates the host name. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the Cleartext traffic is permitted, else returns false. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

