# setCBConfigList

## setCBConfigList

```TypeScript
function setCBConfigList(configs: CBConfigListConfigs): Promise<void>
```

Turn on Cell BroadCast by list.

**起始版本：** 23

**需要权限：** 

 ohos.permission.RECEIVE_SMS

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| configs | CBConfigListConfigs | 是 | Indicates cell broadcast configuration list configs. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the setCBConfigList. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

