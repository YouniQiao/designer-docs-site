# DistrictRequestParams

Indicates request parameters for obtaining the district information.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Location.Location.Geocoder

## 导入模块

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## timeoutMs

```TypeScript
timeoutMs?: int
```

Indicates the timeout period. The default value is 5000 ms. The value range is all integers.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Geocoder

## locale

```TypeScript
locale?: string
```

Indicates the language area information. ISO 639 alpha-2 or alpha-3 language code. Example: "zh" (Chinese), "en" (English). The default value is obtained from the language settings of the device (settings/system/Language & region /Language).

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Geocoder

