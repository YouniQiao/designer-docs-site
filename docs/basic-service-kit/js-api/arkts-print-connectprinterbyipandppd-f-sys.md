# connectPrinterByIpAndPpd

## connectPrinterByIpAndPpd

```TypeScript
function connectPrinterByIpAndPpd(printerIp: string, protocol: string, ppdName: string): Promise<void>
```

通过打印机IP和ppd连接打印机。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerIp | string | Yes | 打印机IP。 |
| protocol | string | Yes | 协议类型。 |
| ppdName | string | Yes | ppd名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application. |
| 13100005 | Invalid printer IP. |

