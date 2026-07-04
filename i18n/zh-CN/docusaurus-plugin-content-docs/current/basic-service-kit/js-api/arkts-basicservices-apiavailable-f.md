---
last_update:
  date: 2026-07-04
---

# apiAvailable

## apiAvailable

```TypeScript
function apiAvailable(version: string | number): boolean
```

检查指定的API版本在当前设备上是否可用。 此方法提供跨不同OpenHarmony/分布式操作系统版本的兼容性检查。它会根据输入格式和API版本范围自动选择合适的版本检查方法。

**起始版本：** 26.0.0

**元服务API：** 从API版本26.0.0开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Startup.SystemInfo

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| version | string \| number | 是 | * 此方法提供跨不同OpenHarmony/分布式操作系统版本的兼容性检查。它会根据输入格式和API版本范围自动选择合适的版本检查方法。-带点的字符串格式（例如，“26.0.0”、“5.0.1”）：-对于API 26+（版本&gt;= 26.0.0）：表示OpenHarmetric和Distribution OS API版本-对于API 26-（版本&lt; 26.0.0）：表示分发操作系统API版本-数字格式（例如13）：表示OpenHar笔SDK API版本（仅API 26） |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 布尔值。返回true表示当前设备API版本大于等于入参版本号；返回false则表示当前设备API版本小于入参版本号 |

**示例：**

```TypeScript
import { deviceInfo } from '@kit.BasicServicesKit';

// Check API 26.0.0 (String format for API 26.0.0+ represents both OpenHarmony and Distribution OS)
if (deviceInfo.apiAvailable('26.0.0')) {
  // 需要版本隔离的方法
}


// Check API 5.0.1 (Distribution OS version, API 26.0.0-)
if (deviceInfo.apiAvailable('5.0.1')) {
  // 需要版本隔离的方法
}


// Check API 13 (OpenHarmony SDK version, API 26.0.0-)
if (deviceInfo.apiAvailable(13)) {
  // 需要版本隔离的方法
}


```

