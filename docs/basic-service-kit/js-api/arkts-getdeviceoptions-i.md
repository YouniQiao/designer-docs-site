# GetDeviceOptions

定义设备信息获取的参数选项。

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.Startup.SystemInfo.Lite

## Modules to Import

```TypeScript
import { DeviceResponse,GetDeviceOptions } from '@kit.BasicServicesKit';
```

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

接口调用失败的回调函数。 code为失败返回的错误码。 code:200，表示返回结果中存在无法获得的信息。

**Type:** (data: any, code: number) => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.Startup.SystemInfo.Lite

## success

```TypeScript
success?: (data: DeviceResponse) => void
```

接口调用成功的回调函数。 data为成功返回的设备信息，具体参考[DeviceResponse](arkts-deviceresponse-i.md#DeviceResponse)。

**Type:** (data: DeviceResponse) => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.Startup.SystemInfo.Lite

## complete

```TypeScript
complete?: () => void
```

接口调用结束的回调函数。

**Type:** () => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.Startup.SystemInfo.Lite

