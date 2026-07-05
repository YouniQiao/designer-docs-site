# PrinterStateChangeCallback

```TypeScript
type PrinterStateChangeCallback = (state: PrinterState, info: PrinterInfo) => void
```

Defines the callback type used in registering to listen for PrinterState. The value of state indicates the state of printer. The value of info indicates the latest printer info.

**Since:** 23

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | PrinterState | Yes | the state of printer |
| info | PrinterInfo | Yes | the information of the latest printer |

