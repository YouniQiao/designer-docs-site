# PrinterChangeCallback

```TypeScript
type PrinterChangeCallback = (event: PrinterEvent, printerInformation: PrinterInformation) => void
```

Defines a callback that takes the printer event and printer information as parameters.

**Since:** 18

<!--Device-print-type PrinterChangeCallback = (event: PrinterEvent, printerInformation: PrinterInformation) => void--><!--Device-print-type PrinterChangeCallback = (event: PrinterEvent, printerInformation: PrinterInformation) => void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | PrinterEvent | Yes | Printer event. |
| printerInformation | PrinterInformation | Yes | Printer information. |

