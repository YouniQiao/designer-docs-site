# @ohos.enterprise.locationManager

本模块提供设备位置服务策略管理的能力，包括设置和查询位置服务开关策略等。 > **说明：** > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。

**起始版本：** 11

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

## 导入模块

```TypeScript
import { locationManager } from '@kit.MDMKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getLocationPolicy](arkts-locationmanager-getlocationpolicy-f.md#getLocationPolicy-1) | 查询位置服务管理策略。 |
| [setLocationPolicy](arkts-locationmanager-setlocationpolicy-f.md#setLocationPolicy-1) | 设置位置服务管理策略。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [LocationPolicy](arkts-locationmanager-locationpolicy-e.md) | 位置服务策略值。 |

