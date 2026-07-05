# @ohos.distributedSoftBus.conversation

The **conversation** module leverages softbus capabilities to provide agents with multi-device interaction capabilities. It offers fundamental agent interconnection tools, including retrieving the device list, waking up the device and sending messages. By utilizing this module, applications can obtain trusted devices on the same account, register listeners to receive cross-device messages and send messages to specific devices through a well-defined conversation channel.

**起始版本：** 26.1.0

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { conversation } from '@kit.DistributedServiceKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getTrustedDevices](arkts-conversation-gettrusteddevices-f-sys.md#getTrustedDevices-1) | Obtains device information about all trusted devices. Trusted devices are devices that have been previously authenticated. This API returns a list of all such devices currently visible on the network. |
| <!--DelRow-->[postConversationData](arkts-conversation-postconversationdata-f-sys.md#postConversationData-1) | Posts conversation data to a specified device. This API sends a message to the target device identified by its networkId or udid. The message will be delivered to the specified bundle and ability on the remote device. |
| <!--DelRow-->[registerConversationListener](arkts-conversation-registerconversationlistener-f-sys.md#registerConversationListener-1) | Registers a conversation listener to receive messages from any trusted device. Once registered, the specified callback function will be invoked whenever a message is received by the specified bundle and ability combination. Only one listener can be registered for a given bundle/ability pair at a time; registering a new listener will replace any previously registered listener for the same bundle and ability. |
| <!--DelRow-->[unregisterConversationListener](arkts-conversation-unregisterconversationlistener-f-sys.md#unregisterConversationListener-1) | Unregisters the conversation listener for the specified bundle and ability. After calling this API, the application will no longer receive messages. If no listener was previously registered for the given bundle and ability, this API returns success without any effect. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DeviceNodeInfo](arkts-conversation-devicenodeinfo-i-sys.md) | Represents the device node information, including the networkId, device name, device type, nearby status and udid. |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DataCallback](arkts-conversation-datacallback-t-sys.md) | Callback function invoked when a message is received. |

