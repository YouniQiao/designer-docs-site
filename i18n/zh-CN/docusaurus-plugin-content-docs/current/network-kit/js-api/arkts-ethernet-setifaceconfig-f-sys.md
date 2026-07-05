# setIfaceConfig

## setIfaceConfig

```TypeScript
function setIfaceConfig(iface: string, ic: InterfaceConfiguration, callback: AsyncCallback<void>): void
```

Set the specified network interface parameters.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| iface | string | 是 | Indicates the network interface name of the network parameter. |
| ic | InterfaceConfiguration | 是 | Indicates the ic. See {@link InterfaceConfiguration}. |
| callback | AsyncCallback&lt;void> | 是 | the callback of setIfaceConfig. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |
| 2201004 | Invalid Ethernet profile. |
| 2201005 | Device information does not exist. |
| 2201006 | Ethernet device not connected. |
| 2201007 | Ethernet failed to write user configuration information. |

**示例：**

```TypeScript
import { ethernet } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let config: ethernet.InterfaceConfiguration = {
  mode: 0,
  ipAddr: "192.168.xx.xxx",
  route: "192.168.xx.xxx",
  gateway: "192.168.xx.xxx",
  netMask: "255.255.255.0",
  dnsServers: "1.1.1.1"
};

ethernet.setIfaceConfig("eth0", config, (error: BusinessError) => {
  if (error) {
    console.error("setIfaceConfig callback error = " + JSON.stringify(error));
  } else {
    console.info("setIfaceConfig callback ok");
  }
});

```

## setIfaceConfig

```TypeScript
function setIfaceConfig(iface: string, ic: InterfaceConfiguration): Promise<void>
```

Set the specified network interface parameters.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| iface | string | 是 | Indicates the network interface name of the network parameter. |
| ic | InterfaceConfiguration | 是 | Indicates the ic. See {@link InterfaceConfiguration}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |
| 2201004 | Invalid Ethernet profile. |
| 2201005 | Device information does not exist. |
| 2201006 | Ethernet device not connected. |
| 2201007 | Ethernet failed to write user configuration information. |

**示例：**

```TypeScript
import { ethernet } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let config: ethernet.InterfaceConfiguration = {
  mode: 0,
  ipAddr: "192.168.xx.xxx",
  route: "192.168.xx.xxx",
  gateway: "192.168.xx.xxx",
  netMask: "255.255.255.0",
  dnsServers: "1.1.1.1"
};

const setConfigPromise = ethernet.setIfaceConfig("eth0", config);

setConfigPromise.then(() => {
  console.info("setIfaceConfig promise ok");
}).catch((error: BusinessError)  => {
  console.error("setIfaceConfig promise error = " + JSON.stringify(error));
});

```

