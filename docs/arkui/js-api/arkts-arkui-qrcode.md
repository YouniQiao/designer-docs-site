# QRCode

The **QRCode** component is used to display a QR code. > **NOTE** > The pixel count of the **QRCode** component is subject to the content. If the component size is not large enough, > the content may fail to be displayed. In this case, you need to resize the component.

## QRCode

```TypeScript
QRCode(value: ResourceStr)
```

Creates a **QRCode** component. The displayed QR code can be scanned to obtain the encoded string information.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceStr | Yes | Content of the QR code. A maximum of 512 characters are supported. If this limit isexceeded, the first 512 characters are used.<br>The Resource type is supported since API version 20.<br>**NOTE**<br>If this parameter is set to **null**, it is equivalent to passing the string **"null"**. If it isset to **undefined**, it is equivalent to passing the string **"undefined"**. Passing an empty string willresult in an invalid QR code. |

## Summary

