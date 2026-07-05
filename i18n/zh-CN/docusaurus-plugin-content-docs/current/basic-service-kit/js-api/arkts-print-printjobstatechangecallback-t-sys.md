# PrintJobStateChangeCallback

```TypeScript
type PrintJobStateChangeCallback = (state: PrintJobState, job: PrintJob) => void
```

Defines the callback type used in registering to listen for PrintJobState. The value of state indicates the state of print job. The value of job indicates the latest print job info.

**起始版本：** 23

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| state | PrintJobState | 是 | the state of print job |
| job | PrintJob | 是 | the information of the print job |

