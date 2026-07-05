# setCBConfigList

## setCBConfigList

```TypeScript
function setCBConfigList(configs: CBConfigListConfigs): Promise<void>
```

Turn on Cell BroadCast by list.

**Since:** 23

**Required permissions:** 

 ohos.permission.RECEIVE_SMS

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configs | CBConfigListConfigs | Yes | Indicates cell broadcast configuration list configs. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setCBConfigList. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

