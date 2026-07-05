# requestRight

## requestRight

```TypeScript
function requestRight(deviceName: string): Promise<boolean>
```

请求软件包的临时权限以访问设备。使用Promise异步回调。系统应用默认拥有访问设备权限，无需调用此接口申请。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.requestRight

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceName | string | Yes | 设备名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回临时权限的申请结果。返回true表示临时权限申请成功；返回false则表示临时权限申请失败。 |

**Example**

```TypeScript
let devicesName= "1-1";
usb.requestRight(devicesName).then((ret) => {
  console.info(`requestRight = ${ret}`);
});

```

