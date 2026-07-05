# @ohos.thermal

该模块提供热管理相关的接口，包括热档位查询及注册回调等功能。

**起始版本：** 8

**系统能力：** SystemCapability.PowerManager.ThermalManager

## 导入模块

```TypeScript
import { thermal } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getLevel](arkts-thermal-getlevel-f.md#getLevel-1) | 获取当前热档位信息。 |
| [getThermalLevel](arkts-thermal-getthermallevel-f.md#getThermalLevel-1) | 获取当前热档位信息。 |
| [registerThermalLevelCallback](arkts-thermal-registerthermallevelcallback-f.md#registerThermalLevelCallback-1) | 订阅热档位变化时的回调提醒。使用callback异步回调。 |
| [subscribeThermalLevel](arkts-thermal-subscribethermallevel-f.md#subscribeThermalLevel-1) | 订阅热档位变化时的回调提醒。使用callback异步回调。 |
| [unregisterThermalLevelCallback](arkts-thermal-unregisterthermallevelcallback-f.md#unregisterThermalLevelCallback-1) | 取消订阅热档位变化时的回调提醒。使用callback异步回调。 |
| [unsubscribeThermalLevel](arkts-thermal-unsubscribethermallevel-f.md#unsubscribeThermalLevel-1) | 取消订阅热档位变化时的回调提醒。使用callback异步回调。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ThermalLevel](arkts-thermal-thermallevel-e.md) | 热档位信息。 |

