# @ohos.distributedSoftBus.conversation

The **conversation** module leverages softbus capabilities to provide agents with multi-device interaction capabilities. It offers fundamental agent interconnection tools, including retrieving the device list,waking up the device and sending messages. By utilizing this module, applications can obtain trusted devices on the same account, register listeners to receive cross-device messages and send messages to specific devices through a well-defined conversation channel.

**Since:** 26.1.0

<!--Device-unnamed-declare namespace conversation--><!--Device-unnamed-declare namespace conversation-End-->

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { conversation } from '@kit.DistributedServiceKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getTrustedDevices](arkts-distributedservice-conversation-gettrusteddevices-f-sys.md#gettrusteddevices-1) | Obtains device information about all trusted devices. Trusted devices are devices that have been previously authenticated. This API returns a list of all such devices currently visible on the network. |
| [postConversationData](arkts-distributedservice-conversation-postconversationdata-f-sys.md#postconversationdata-1) | Posts conversation data to a specified device. This API sends a message to the target device identified by its networkId or udid. The message will be delivered to the specified bundle and ability on the remote device. |
| [registerConversationListener](arkts-distributedservice-conversation-registerconversationlistener-f-sys.md#registerconversationlistener-1) | Registers a conversation listener to receive messages from any trusted device. Once registered, the specified callback function will be invoked whenever a message is received by the specified bundle and ability combination.Only one listener can be registered for a given bundle/ability pair at a time; registering a new listener will replace any previously registered listener for the same bundle and ability. |
| [unregisterConversationListener](arkts-distributedservice-conversation-unregisterconversationlistener-f-sys.md#unregisterconversationlistener-1) | Unregisters the conversation listener for the specified bundle and ability. After calling this API, the application will no longer receive messages. If no listener was previously registered for the given bundle and ability, this API returns success without any effect. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DeviceNodeInfo](arkts-distributedservice-conversation-devicenodeinfo-i-sys.md) | Represents the device node information, including the networkId, device name, device type, nearby status and udid. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [DataCallback](arkts-distributedservice-conversation-datacallback-t-sys.md) | Callback function invoked when a message is received. |
<!--DelEnd-->

