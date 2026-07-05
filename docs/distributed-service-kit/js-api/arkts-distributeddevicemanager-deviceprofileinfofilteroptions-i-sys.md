# DeviceProfileInfoFilterOptions

设备信息过滤器选项。

**Since:** 15

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
```

## deviceIdList

```TypeScript
deviceIdList?: Array<string>
```

表示获取指定deviceId的设备信息，deviceId一般为设备的UDID，如设备无UDID，则取其MAC或SN作为deviceId。默认为空。

**Type:** Array<string>

**Since:** 15

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

## isCloud

```TypeScript
isCloud : boolean
```

表示是否需要实时从云端获取设备列表。 - false：表示从设备获取。 - true：表示从云端获取。

**Type:** boolean

**Since:** 15

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

