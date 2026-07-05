# @ohos.telephony.data

Provides methods related to cellular data services.

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CellularData

## 导入模块

```TypeScript
import { data } from '@kit.TelephonyKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[disableCellularData](arkts-data-disablecellulardata-f-sys.md#disableCellularData-1) | Disable cellular data services. |
| <!--DelRow-->[disableCellularData](arkts-data-disablecellulardata-f-sys.md#disableCellularData-2) | Disable cellular data services. |
| <!--DelRow-->[disableCellularDataRoaming](arkts-data-disablecellulardataroaming-f-sys.md#disableCellularDataRoaming-1) | Disable cellular data roaming. |
| <!--DelRow-->[disableCellularDataRoaming](arkts-data-disablecellulardataroaming-f-sys.md#disableCellularDataRoaming-2) | Disable cellular data roaming. |
| <!--DelRow-->[enableCellularData](arkts-data-enablecellulardata-f-sys.md#enableCellularData-1) | Enable cellular data services. |
| <!--DelRow-->[enableCellularData](arkts-data-enablecellulardata-f-sys.md#enableCellularData-2) | Enable cellular data services. |
| <!--DelRow-->[enableCellularDataRoaming](arkts-data-enablecellulardataroaming-f-sys.md#enableCellularDataRoaming-1) | Enable cellular data roaming. |
| <!--DelRow-->[enableCellularDataRoaming](arkts-data-enablecellulardataroaming-f-sys.md#enableCellularDataRoaming-2) | Enable cellular data roaming. |
| [getActiveApnName](arkts-data-getactiveapnname-f.md#getActiveApnName-1) | Get Active APN's Name. |
| [getCellularDataFlowType](arkts-data-getcellulardataflowtype-f.md#getCellularDataFlowType-1) | Indicates that there is no uplink or downlink data. <p>It is a return value of service state query of cellular data services. |
| [getCellularDataFlowType](arkts-data-getcellulardataflowtype-f.md#getCellularDataFlowType-2) | Indicates that there is no uplink or downlink data. <p>It is a return value of service state query of cellular data services. |
| [getCellularDataState](arkts-data-getcellulardatastate-f.md#getCellularDataState-1) | Obtain the connection state of the PS domain. |
| [getCellularDataState](arkts-data-getcellulardatastate-f.md#getCellularDataState-2) | Obtain the connection state of the PS domain. |
| [getDefaultCellularDataSimId](arkts-data-getdefaultcellulardatasimid-f.md#getDefaultCellularDataSimId-1) | Obtains the default cellular data SIM ID. |
| [getDefaultCellularDataSlotId](arkts-data-getdefaultcellulardataslotid-f.md#getDefaultCellularDataSlotId-1) | Get the default cellular data card. |
| [getDefaultCellularDataSlotId](arkts-data-getdefaultcellulardataslotid-f.md#getDefaultCellularDataSlotId-2) | Get the default cellular data card. |
| [getDefaultCellularDataSlotIdSync](arkts-data-getdefaultcellulardataslotidsync-f.md#getDefaultCellularDataSlotIdSync-1) | Get the default cellular data card. |
| [isCellularDataEnabled](arkts-data-iscellulardataenabled-f.md#isCellularDataEnabled-1) | Check whether cellular data services are enabled. |
| [isCellularDataEnabled](arkts-data-iscellulardataenabled-f.md#isCellularDataEnabled-2) | Check whether cellular data services are enabled. |
| [isCellularDataEnabledSync](arkts-data-iscellulardataenabledsync-f.md#isCellularDataEnabledSync-1) | Check whether cellular data services are enabled. |
| [isCellularDataRoamingEnabled](arkts-data-iscellulardataroamingenabled-f.md#isCellularDataRoamingEnabled-1) | Check whether roaming is enabled for cellular data services. |
| [isCellularDataRoamingEnabled](arkts-data-iscellulardataroamingenabled-f.md#isCellularDataRoamingEnabled-2) | Check whether roaming is enabled for cellular data services. |
| [isCellularDataRoamingEnabledSync](arkts-data-iscellulardataroamingenabledsync-f.md#isCellularDataRoamingEnabledSync-1) | Check whether roaming is enabled for cellular data services. |
| [queryAllApns](arkts-data-queryallapns-f.md#queryAllApns-1) | Query all APN info. |
| [queryApnIds](arkts-data-queryapnids-f.md#queryApnIds-1) | Query APN IDs. |
| <!--DelRow-->[setDefaultCellularDataSlotId](arkts-data-setdefaultcellulardataslotid-f-sys.md#setDefaultCellularDataSlotId-1) | Switch cellular data services to another card, without changing the default settings. |
| <!--DelRow-->[setDefaultCellularDataSlotId](arkts-data-setdefaultcellulardataslotid-f-sys.md#setDefaultCellularDataSlotId-2) | Switch cellular data services to another card, without changing the default settings. |
| [setPreferredApn](arkts-data-setpreferredapn-f.md#setPreferredApn-1) | Set preferred APN. |
| [showSystemApnSettings](arkts-data-showsystemapnsettings-f.md#showSystemApnSettings-1) | Open the system APN selection menu, which is presented in a semi-modal form and can be used to select a specific APN. This API uses a promise to return the result. If there is no SIM card or the device does not support the APN menu, the menu cannot be displayed. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ApnInfo](arkts-data-apninfo-i.md) | Defines the APN info. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [DataConnectState](arkts-data-dataconnectstate-e.md) | Describes the cellular data link connection state. |
| [DataFlowType](arkts-data-dataflowtype-e.md) | Describes the cellular data flow type. |

