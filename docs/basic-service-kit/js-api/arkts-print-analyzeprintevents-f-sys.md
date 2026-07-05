# analyzePrintEvents

## analyzePrintEvents

```TypeScript
function analyzePrintEvents(printerId: string, eventType: string): Promise<string>
```

分析打印事件。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | string | Yes | 打印机ID。  要分析的打印机ID。 |
| eventType | string | Yes | 前卫类型。  需要分析的事件类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application. |

