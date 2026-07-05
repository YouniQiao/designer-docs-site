# PrintJobStateChangeCallback

```TypeScript
type PrintJobStateChangeCallback = (state: PrintJobState, job: PrintJob) => void
```

Defines the callback type used in registering to listen for PrintJobState. The value of state indicates the state of print job. The value of job indicates the latest print job info.

**Since:** 23

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | PrintJobState | Yes | the state of print job |
| job | PrintJob | Yes | the information of the print job |

