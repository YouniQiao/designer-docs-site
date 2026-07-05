# PrinterInfoQueryCallback

```TypeScript
type PrinterInfoQueryCallback = (printerInfo: PrinterInformation, ppdInfo: PpdInfo[]) => void
```

定义注册监听printInfoQuery事件的回调类型。 printInfo的值表示打印机信息。 ppdInfo的值表示所有打印机的ppd信息。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerInfo | PrinterInformation | Yes | 打印机信息  打印机信息。 |
| ppdInfo | PpdInfo[] | Yes | 所有打印机ppd信息  所有打印机ppd信息。 |

