# @ohos.distributedSoftBus.conversation

The **conversation** module leverages softbus capabilities to provide agents with multi-device interaction
capabilities. It offers fundamental agent interconnection tools, including retrieving the device list,
waking up the device and sending messages. By utilizing this module, applications can obtain trusted devices
on the same account, register listeners to receive cross-device messages and send messages to specific devices
through a well-defined conversation channel.

**Since:** 26.1.0

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
| [getTrustedDevices](arkts-distributedservice-gettrusteddevices-f-sys.md#gettrusteddevices-1) | Obtains device information about all trusted devices. Trusted devices are devices that have been previouslyauthenticated. This API returns a list of all such devices currently visible on the network. |
| [postConversationData](arkts-distributedservice-postconversationdata-f-sys.md#postconversationdata-1) | Posts conversation data to a specified device. This API sends a message to the target device identified by itsnetworkId or udid. The message will be delivered to the specified bundle and ability on the remote device. |
| [registerConversationListener](arkts-distributedservice-registerconversationlistener-f-sys.md#registerconversationlistener-1) | Registers a conversation listener to receive messages from any trusted device. Once registered, the specifiedcallback function will be invoked whenever a message is received by the specified bundle and ability combination.Only one listener can be registered for a given bundle/ability pair at a time; registering a new listener willreplace any previously registered listener for the same bundle and ability. |
| [unregisterConversationListener](arkts-distributedservice-unregisterconversationlistener-f-sys.md#unregisterconversationlistener-1) | Unregisters the conversation listener for the specified bundle and ability. After calling this API, theapplication will no longer receive messages. If no listener was previously registered for the given bundleand ability, this API returns success without any effect. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DeviceNodeInfo](arkts-distributedservice-devicenodeinfo-i-sys.md) | Represents the device node information, including the networkId, device name, device type, nearby statusand udid. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [DataCallback](arkts-distributedservice-datacallback-t-sys.md) | Callback function invoked when a message is received. |
<!--DelEnd-->

