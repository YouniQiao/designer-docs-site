# getAttachedMechDevices

## getAttachedMechDevices

```TypeScript
function getAttachedMechDevices(): MechInfo[]
```

Obtain the list of connected mechanical devices.

**起始版本：** 20

**系统能力：** SystemCapability.Mechanic.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MechInfo[] | List of connected mechanical devices. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 33300001 | Service exception. |

**示例：**

```TypeScript
console.info('Query device list');
// 调用getAttachedMechDevices方法获取已连接的机械体设备列表
let mechanicInfos = mechanicManager.getAttachedMechDevices();
console.info(`'device list:' ${mechanicInfos}`);

```

