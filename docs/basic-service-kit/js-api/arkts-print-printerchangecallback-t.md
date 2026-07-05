# PrinterChangeCallback

```TypeScript
type PrinterChangeCallback = (event: PrinterEvent, printerInformation: PrinterInformation) => void
```

将打印机事件和打印机信息作为参数的回调方法。

**Since:** 18

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | PrinterEvent | Yes | 表示打印机事件。 |
| printerInformation | PrinterInformation | Yes | 表示打印机信息。 |

