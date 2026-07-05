# @ohos.telephony.call

Provides methods related to call management.

**Since:** 11

**System capability:** SystemCapability.Telephony.CallManager

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[answerCall](arkts-call-answercall-f-sys.md#answerCall-1) | Answers the incoming call. |
| <!--DelRow-->[answerCall](arkts-call-answercall-f-sys.md#answerCall-2) | Answers the incoming call. |
| <!--DelRow-->[answerCall](arkts-call-answercall-f-sys.md#answerCall-3) | Answers the incoming call without callId. |
| <!--DelRow-->[answerCall](arkts-call-answercall-f-sys.md#answerCall-4) | Answers the incoming video call |
| <!--DelRow-->[answerCall](arkts-call-answercall-f-sys.md#answerCall-5) | Answers the incoming rtt |
| <!--DelRow-->[canSetCallTransferTime](arkts-call-cansetcalltransfertime-f-sys.md#canSetCallTransferTime-1) | Checks whether can set call transfer time. The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time. |
| <!--DelRow-->[canSetCallTransferTime](arkts-call-cansetcalltransfertime-f-sys.md#canSetCallTransferTime-2) | Checks whether can set call transfer time. The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time. |
| <!--DelRow-->[cancelCallUpgrade](arkts-call-cancelcallupgrade-f-sys.md#cancelCallUpgrade-1) | Cancel call upgrade when voice call upgrade to video call. |
| <!--DelRow-->[cancelMuted](arkts-call-cancelmuted-f-sys.md#cancelMuted-1) | Unmute during a call. |
| <!--DelRow-->[cancelMuted](arkts-call-cancelmuted-f-sys.md#cancelMuted-2) | Unmute during a call. |
| <!--DelRow-->[closeUnfinishedUssd](arkts-call-closeunfinishedussd-f-sys.md#closeUnfinishedUssd-1) | Close unfinished ussd. |
| <!--DelRow-->[closeUnfinishedUssd](arkts-call-closeunfinishedussd-f-sys.md#closeUnfinishedUssd-2) | Close unfinished ussd. |
| <!--DelRow-->[combineConference](arkts-call-combineconference-f-sys.md#combineConference-1) | Merge calls, merge two calls into conference calls. |
| <!--DelRow-->[combineConference](arkts-call-combineconference-f-sys.md#combineConference-2) | Merge calls, merge two calls into conference calls. |
| <!--DelRow-->[controlCamera](arkts-call-controlcamera-f-sys.md#controlCamera-1) | Control camera to open/close/switch camera by cameraId when video call. |
| [dial](arkts-call-dial-f.md#dial-1) | Makes a call. |
| [dial](arkts-call-dial-f.md#dial-2) | Makes a call. |
| [dial](arkts-call-dial-f.md#dial-3) | Makes a call. |
| <!--DelRow-->[dialCall](arkts-call-dialcall-f-sys.md#dialCall-1) | Makes a call. |
| <!--DelRow-->[dialCall](arkts-call-dialcall-f-sys.md#dialCall-2) | Makes a call. |
| <!--DelRow-->[dialCall](arkts-call-dialcall-f-sys.md#dialCall-3) | Makes a call. |
| <!--DelRow-->[disableImsSwitch](arkts-call-disableimsswitch-f-sys.md#disableImsSwitch-1) | Turn off Ims switch. |
| <!--DelRow-->[disableImsSwitch](arkts-call-disableimsswitch-f-sys.md#disableImsSwitch-2) | Turn off Ims switch. |
| <!--DelRow-->[enableImsSwitch](arkts-call-enableimsswitch-f-sys.md#enableImsSwitch-1) | Turn on Ims switch. |
| <!--DelRow-->[enableImsSwitch](arkts-call-enableimsswitch-f-sys.md#enableImsSwitch-2) | Turn on Ims switch. |
| [formatPhoneNumber](arkts-call-formatphonenumber-f.md#formatPhoneNumber-1) | Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting, a phone number is in the format of country code (if any) + 3-digit service provider code + 4-digit area code + 4-digit subscriber number. After the formatting, each part is separated by a space. |
| [formatPhoneNumber](arkts-call-formatphonenumber-f.md#formatPhoneNumber-2) | Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting, a phone number is in the format of country code (if any) + 3-digit service provider code + 4-digit area code + 4-digit subscriber number. After the formatting, each part is separated by a space. |
| [formatPhoneNumber](arkts-call-formatphonenumber-f.md#formatPhoneNumber-3) | Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting, a phone number is in the format of country code (if any) + 3-digit service provider code + 4-digit area code + 4-digit subscriber number. After the formatting, each part is separated by a space. |
| [formatPhoneNumberToE164](arkts-call-formatphonenumbertoe164-f.md#formatPhoneNumberToE164-1) | Formats a phone number into an E.164 representation. |
| [formatPhoneNumberToE164](arkts-call-formatphonenumbertoe164-f.md#formatPhoneNumberToE164-2) | Formats a phone number into an E.164 representation. |
| <!--DelRow-->[getCallIdListForConference](arkts-call-getcallidlistforconference-f-sys.md#getCallIdListForConference-1) | Get the call Id list of the conference. |
| <!--DelRow-->[getCallIdListForConference](arkts-call-getcallidlistforconference-f-sys.md#getCallIdListForConference-2) | Get the call Id list of the conference. |
| <!--DelRow-->[getCallRestrictionStatus](arkts-call-getcallrestrictionstatus-f-sys.md#getCallRestrictionStatus-1) | Get call barring status. |
| <!--DelRow-->[getCallRestrictionStatus](arkts-call-getcallrestrictionstatus-f-sys.md#getCallRestrictionStatus-2) | Get call barring status. |
| [getCallState](arkts-call-getcallstate-f.md#getCallState-1) | Obtains the call state. If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}. If at least one call is in the active, hold, or dialing state, the system returns {@code CallState#CALL_STATE_OFFHOOK}. In other cases, the system returns {@code CallState#CALL_STATE_IDLE}. |
| [getCallState](arkts-call-getcallstate-f.md#getCallState-2) | Obtains the call state. If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}. If at least one call is in the active, hold, or dialing state, the system returns {@code CallState#CALL_STATE_OFFHOOK}. In other cases, the system returns {@code CallState#CALL_STATE_IDLE}. |
| [getCallStateSync](arkts-call-getcallstatesync-f.md#getCallStateSync-1) | Obtains the call state. If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}. If at least one call is in the active, hold, or dialing state, the system returns {@code CallState#CALL_STATE_OFFHOOK}. In other cases, the system returns {@code CallState#CALL_STATE_IDLE}. |
| [getCallTransferInfo](arkts-call-getcalltransferinfo-f.md#getCallTransferInfo-1) | Obtains call transfer information with the phone number. |
| <!--DelRow-->[getCallTransferInfo](arkts-call-getcalltransferinfo-f-sys.md#getCallTransferInfo-1) | Get call forwarding information. |
| <!--DelRow-->[getCallTransferInfo](arkts-call-getcalltransferinfo-f-sys.md#getCallTransferInfo-2) | Get call forwarding information. |
| <!--DelRow-->[getCallWaitingStatus](arkts-call-getcallwaitingstatus-f-sys.md#getCallWaitingStatus-1) | Get call waiting status. |
| <!--DelRow-->[getCallWaitingStatus](arkts-call-getcallwaitingstatus-f-sys.md#getCallWaitingStatus-2) | Get call waiting status. |
| <!--DelRow-->[getMainCallId](arkts-call-getmaincallid-f-sys.md#getMainCallId-1) | Get the main call Id. |
| <!--DelRow-->[getMainCallId](arkts-call-getmaincallid-f-sys.md#getMainCallId-2) | Get the main call Id. |
| <!--DelRow-->[getSubCallIdList](arkts-call-getsubcallidlist-f-sys.md#getSubCallIdList-1) | Get the list of sub-call Ids. |
| <!--DelRow-->[getSubCallIdList](arkts-call-getsubcallidlist-f-sys.md#getSubCallIdList-2) | Get the list of sub-call Ids. |
| <!--DelRow-->[getVoNRState](arkts-call-getvonrstate-f-sys.md#getVoNRState-1) | Get switch state for voice over NR. |
| <!--DelRow-->[getVoNRState](arkts-call-getvonrstate-f-sys.md#getVoNRState-2) | Get switch state for voice over NR. |
| <!--DelRow-->[hangUpCall](arkts-call-hangupcall-f-sys.md#hangUpCall-1) | Hang up the foreground call. |
| <!--DelRow-->[hangUpCall](arkts-call-hangupcall-f-sys.md#hangUpCall-2) | Hang up the foreground call. |
| <!--DelRow-->[hangUpCall](arkts-call-hangupcall-f-sys.md#hangUpCall-3) | Hang up the foreground call without callId. |
| [hasCall](arkts-call-hascall-f.md#hasCall-1) | Checks whether a call is ongoing. |
| [hasCall](arkts-call-hascall-f.md#hasCall-2) | Checks whether a call is ongoing. |
| [hasCallSync](arkts-call-hascallsync-f.md#hasCallSync-1) | Checks whether a call is ongoing. |
| [hasVoiceCapability](arkts-call-hasvoicecapability-f.md#hasVoiceCapability-1) | Checks whether a device supports voice calls. The system checks whether the device has the capability to initiate a circuit switching (CS) or IP multimedia subsystem domain (IMS) call on a telephone service network. If the device supports only packet switching (even if the device supports OTT calls), {@code false} is returned. |
| <!--DelRow-->[holdCall](arkts-call-holdcall-f-sys.md#holdCall-1) | Keep a call on hold. |
| <!--DelRow-->[holdCall](arkts-call-holdcall-f-sys.md#holdCall-2) | Keep a call on hold. |
| <!--DelRow-->[inputDialerSpecialCode](arkts-call-inputdialerspecialcode-f-sys.md#inputDialerSpecialCode-1) | Enters the special code on the keypad. |
| <!--DelRow-->[inputDialerSpecialCode](arkts-call-inputdialerspecialcode-f-sys.md#inputDialerSpecialCode-2) | Enters the special code on the keypad. |
| [isEmergencyPhoneNumber](arkts-call-isemergencyphonenumber-f.md#isEmergencyPhoneNumber-1) | Checks whether a phone number is on the emergency number list. |
| [isEmergencyPhoneNumber](arkts-call-isemergencyphonenumber-f.md#isEmergencyPhoneNumber-2) | Checks whether a phone number is on the emergency number list. |
| [isEmergencyPhoneNumber](arkts-call-isemergencyphonenumber-f.md#isEmergencyPhoneNumber-3) | Checks whether a phone number is on the emergency number list. |
| <!--DelRow-->[isImsSwitchEnabled](arkts-call-isimsswitchenabled-f-sys.md#isImsSwitchEnabled-1) | Judge whether the Ims switch is enabled. |
| <!--DelRow-->[isImsSwitchEnabled](arkts-call-isimsswitchenabled-f-sys.md#isImsSwitchEnabled-2) | Judge whether the Ims switch is enabled. |
| <!--DelRow-->[isImsSwitchEnabledSync](arkts-call-isimsswitchenabledsync-f-sys.md#isImsSwitchEnabledSync-1) | Judge whether the Ims switch is enabled. |
| <!--DelRow-->[isInEmergencyCall](arkts-call-isinemergencycall-f-sys.md#isInEmergencyCall-1) | Judge whether the emergency call is in progress. |
| <!--DelRow-->[isInEmergencyCall](arkts-call-isinemergencycall-f-sys.md#isInEmergencyCall-2) | Judge whether the emergency call is in progress. |
| <!--DelRow-->[isNewCallAllowed](arkts-call-isnewcallallowed-f-sys.md#isNewCallAllowed-1) | Judge whether to allow another new call. |
| <!--DelRow-->[isNewCallAllowed](arkts-call-isnewcallallowed-f-sys.md#isNewCallAllowed-2) | Judge whether to allow another new call. |
| <!--DelRow-->[isRinging](arkts-call-isringing-f-sys.md#isRinging-1) | Judge whether there is a ringing call. |
| <!--DelRow-->[isRinging](arkts-call-isringing-f-sys.md#isRinging-2) | Judge whether there is a ringing call. |
| <!--DelRow-->[joinConference](arkts-call-joinconference-f-sys.md#joinConference-1) | Join the conference call. |
| <!--DelRow-->[joinConference](arkts-call-joinconference-f-sys.md#joinConference-2) | Join the conference call. |
| <!--DelRow-->[kickOutFromConference](arkts-call-kickoutfromconference-f-sys.md#kickOutFromConference-1) | Kick out call from the conference call. |
| <!--DelRow-->[kickOutFromConference](arkts-call-kickoutfromconference-f-sys.md#kickOutFromConference-2) | Kick out call from the conference call. |
| [makeCall](arkts-call-makecall-f.md#makeCall-1) | Go to the dial screen and the called number is displayed. |
| [makeCall](arkts-call-makecall-f.md#makeCall-2) | Go to the dial screen and the called number is displayed. |
| [makeCall](arkts-call-makecall-f.md#makeCall-3) | Go to the dial screen and the called number is displayed. |
| [makeCall](arkts-call-makecall-f.md#makeCall-4) | Go to the dial screen and the called number is displayed. |
| [makeCallWithToken](arkts-call-makecallwithtoken-f.md#makeCallWithToken-1) | Go to the dial screen and the called number is displayed.The authentication challenge value is returned. |
| <!--DelRow-->[muteRinger](arkts-call-muteringer-f-sys.md#muteRinger-1) | Stops the ringtone. If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function. |
| <!--DelRow-->[muteRinger](arkts-call-muteringer-f-sys.md#muteRinger-2) | Stops the ringtone. If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function. |
| <!--DelRow-->[off](arkts-call-off-f-sys.md#off-1) | Unsubscribe from the callDetailsChange event. |
| <!--DelRow-->[off](arkts-call-off-f-sys.md#off-2) | Unsubscribe from the callEventChange event. |
| <!--DelRow-->[off](arkts-call-off-f-sys.md#off-3) | Unsubscribe from the callDisconnectedCause event. |
| <!--DelRow-->[off](arkts-call-off-f-sys.md#off-4) | Unsubscribe from the mmiCodeResult event. |
| <!--DelRow-->[off](arkts-call-off-f-sys.md#off-5) | Unsubscribe from the audioDeviceChange event. |
| <!--DelRow-->[off](arkts-call-off-f-sys.md#off-6) | Unsubscribe from the postDialDelay event. |
| <!--DelRow-->[off](arkts-call-off-f-sys.md#off-7) | Unsubscribe from the imsCallModeChange event. |
| <!--DelRow-->[off](arkts-call-off-f-sys.md#off-8) | Unsubscribe from the callSessionEvent. |
| <!--DelRow-->[off](arkts-call-off-f-sys.md#off-9) | Unsubscribe from the peerDimensionsChange event. |
| <!--DelRow-->[off](arkts-call-off-f-sys.md#off-10) | Unsubscribe from the cameraCapabilitiesChange event. |
| <!--DelRow-->[offReceiveRttMessage](arkts-call-offreceiverttmessage-f-sys.md#offReceiveRttMessage-1) | Unsubscribe from the rtt message event. |
| <!--DelRow-->[offRttErrCause](arkts-call-offrtterrcause-f-sys.md#offRttErrCause-1) | Unsubscribe from the rtt error report event. |
| <!--DelRow-->[offRttModifyInd](arkts-call-offrttmodifyind-f-sys.md#offRttModifyInd-1) | Unsubscribe from the rtt modify indication. |
| <!--DelRow-->[on](arkts-call-on-f-sys.md#on-1) | Subscribe to the callDetailsChange event. |
| <!--DelRow-->[on](arkts-call-on-f-sys.md#on-2) | Subscribe to the callEventChange event. |
| <!--DelRow-->[on](arkts-call-on-f-sys.md#on-3) | Subscribe to the callDisconnectedCause event. |
| <!--DelRow-->[on](arkts-call-on-f-sys.md#on-4) | Subscribe to the mmiCodeResult event. |
| <!--DelRow-->[on](arkts-call-on-f-sys.md#on-5) | Subscribe to the audioDeviceChange event. |
| <!--DelRow-->[on](arkts-call-on-f-sys.md#on-6) | Subscribe to the postDialDelay event. |
| <!--DelRow-->[on](arkts-call-on-f-sys.md#on-7) | Subscribe to the imsCallModeChange event. |
| <!--DelRow-->[on](arkts-call-on-f-sys.md#on-8) | Subscribe to the callSessionEvent. |
| <!--DelRow-->[on](arkts-call-on-f-sys.md#on-9) | Subscribe to the peerDimensionsChange event. |
| <!--DelRow-->[on](arkts-call-on-f-sys.md#on-10) | Subscribe to the cameraCapabilitiesChange event. |
| <!--DelRow-->[onReceiveRttMessage](arkts-call-onreceiverttmessage-f-sys.md#onReceiveRttMessage-1) | Subscribe to the rtt message event. |
| <!--DelRow-->[onRttErrCause](arkts-call-onrtterrcause-f-sys.md#onRttErrCause-1) | Subscribe to the rtt error event. |
| <!--DelRow-->[onRttModifyInd](arkts-call-onrttmodifyind-f-sys.md#onRttModifyInd-1) | Subscribe to the rtt modify indication. |
| <!--DelRow-->[postDialProceed](arkts-call-postdialproceed-f-sys.md#postDialProceed-1) | Continue post-dial DTMF(Dual Tone Multi Frequency). |
| <!--DelRow-->[postDialProceed](arkts-call-postdialproceed-f-sys.md#postDialProceed-2) | Continue post-dial DTMF(Dual Tone Multi Frequency). |
| <!--DelRow-->[preloadCallUI](arkts-call-preloadcallui-f-sys.md#preloadCallUI-1) | Preload callUI. |
| <!--DelRow-->[rejectCall](arkts-call-rejectcall-f-sys.md#rejectCall-1) | Reject the incoming call. |
| <!--DelRow-->[rejectCall](arkts-call-rejectcall-f-sys.md#rejectCall-2) | Reject the incoming call. |
| <!--DelRow-->[rejectCall](arkts-call-rejectcall-f-sys.md#rejectCall-3) | Reject the incoming call. |
| <!--DelRow-->[rejectCall](arkts-call-rejectcall-f-sys.md#rejectCall-4) | Reject the incoming call without callId. |
| <!--DelRow-->[rejectCall](arkts-call-rejectcall-f-sys.md#rejectCall-5) | Reject the incoming call without callId. |
| <!--DelRow-->[removeMissedIncomingCallNotification](arkts-call-removemissedincomingcallnotification-f-sys.md#removeMissedIncomingCallNotification-1) | Remove missed incoming call notification. |
| <!--DelRow-->[removeMissedIncomingCallNotification](arkts-call-removemissedincomingcallnotification-f-sys.md#removeMissedIncomingCallNotification-2) | Remove missed incoming call notification. |
| <!--DelRow-->[sendCallUiEvent](arkts-call-sendcalluievent-f-sys.md#sendCallUiEvent-1) | Send call ui event. |
| <!--DelRow-->[sendRttMessage](arkts-call-sendrttmessage-f-sys.md#sendRttMessage-1) | Send rtt message. |
| <!--DelRow-->[sendUssdResponse](arkts-call-sendussdresponse-f-sys.md#sendUssdResponse-1) | Send ussd response. |
| <!--DelRow-->[separateConference](arkts-call-separateconference-f-sys.md#separateConference-1) | Split conference call. |
| <!--DelRow-->[separateConference](arkts-call-separateconference-f-sys.md#separateConference-2) | Split conference call. |
| <!--DelRow-->[setAudioDevice](arkts-call-setaudiodevice-f-sys.md#setAudioDevice-1) | Set the audio device. |
| <!--DelRow-->[setAudioDevice](arkts-call-setaudiodevice-f-sys.md#setAudioDevice-2) | Set the audio device. |
| <!--DelRow-->[setCallRestriction](arkts-call-setcallrestriction-f-sys.md#setCallRestriction-1) | Set call barring status. |
| <!--DelRow-->[setCallRestriction](arkts-call-setcallrestriction-f-sys.md#setCallRestriction-2) | Set call barring status. |
| <!--DelRow-->[setCallRestrictionPassword](arkts-call-setcallrestrictionpassword-f-sys.md#setCallRestrictionPassword-1) | Set call barring password. |
| <!--DelRow-->[setCallRestrictionPassword](arkts-call-setcallrestrictionpassword-f-sys.md#setCallRestrictionPassword-2) | Set call barring password. |
| <!--DelRow-->[setCallTransfer](arkts-call-setcalltransfer-f-sys.md#setCallTransfer-1) | Set call forwarding information. |
| <!--DelRow-->[setCallTransfer](arkts-call-setcalltransfer-f-sys.md#setCallTransfer-2) | Set call forwarding information. |
| <!--DelRow-->[setCallWaiting](arkts-call-setcallwaiting-f-sys.md#setCallWaiting-1) | Set call waiting. |
| <!--DelRow-->[setCallWaiting](arkts-call-setcallwaiting-f-sys.md#setCallWaiting-2) | Set call waiting. |
| <!--DelRow-->[setDeviceDirection](arkts-call-setdevicedirection-f-sys.md#setDeviceDirection-1) | Set device direction when video call. |
| <!--DelRow-->[setDisplaySurface](arkts-call-setdisplaysurface-f-sys.md#setDisplaySurface-1) | Set display surface when video call. |
| <!--DelRow-->[setMuted](arkts-call-setmuted-f-sys.md#setMuted-1) | Set mute during a call. |
| <!--DelRow-->[setMuted](arkts-call-setmuted-f-sys.md#setMuted-2) | Set mute during a call. |
| <!--DelRow-->[setPreviewSurface](arkts-call-setpreviewsurface-f-sys.md#setPreviewSurface-1) | Set preview surface when video call. |
| <!--DelRow-->[setRttCapability](arkts-call-setrttcapability-f-sys.md#setRttCapability-1) | Set rtt capability. |
| <!--DelRow-->[setVoNRState](arkts-call-setvonrstate-f-sys.md#setVoNRState-1) | Set switch state for voice over NR. |
| <!--DelRow-->[setVoNRState](arkts-call-setvonrstate-f-sys.md#setVoNRState-2) | Set switch state for voice over NR. |
| <!--DelRow-->[startDTMF](arkts-call-startdtmf-f-sys.md#startDTMF-1) | Start DTMF(Dual Tone Multi Frequency). |
| <!--DelRow-->[startDTMF](arkts-call-startdtmf-f-sys.md#startDTMF-2) | Start DTMF(Dual Tone Multi Frequency). |
| <!--DelRow-->[startRtt](arkts-call-startrtt-f-sys.md#startRtt-1) | Start rtt. |
| <!--DelRow-->[stopDTMF](arkts-call-stopdtmf-f-sys.md#stopDTMF-1) | Stop DTMF(Dual Tone Multi Frequency). |
| <!--DelRow-->[stopDTMF](arkts-call-stopdtmf-f-sys.md#stopDTMF-2) | Stop DTMF(Dual Tone Multi Frequency). |
| <!--DelRow-->[stopRtt](arkts-call-stoprtt-f-sys.md#stopRtt-1) | Stop rtt. |
| <!--DelRow-->[switchCall](arkts-call-switchcall-f-sys.md#switchCall-1) | Switch call. |
| <!--DelRow-->[switchCall](arkts-call-switchcall-f-sys.md#switchCall-2) | Switch call. |
| <!--DelRow-->[unHoldCall](arkts-call-unholdcall-f-sys.md#unHoldCall-1) | Cancel call hold status. |
| <!--DelRow-->[unHoldCall](arkts-call-unholdcall-f-sys.md#unHoldCall-2) | Keep a call on hold. |
| <!--DelRow-->[unloadCallUI](arkts-call-unloadcallui-f-sys.md#unloadCallUI-1) | Unload callUI. |
| <!--DelRow-->[updateImsCallMode](arkts-call-updateimscallmode-f-sys.md#updateImsCallMode-1) | Update Ims call mode. |
| <!--DelRow-->[updateImsCallMode](arkts-call-updateimscallmode-f-sys.md#updateImsCallMode-2) | Update Ims call mode. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[AudioDevice](arkts-call-audiodevice-i-sys.md) | Indicates the audio device. |
| <!--DelRow-->[AudioDeviceCallbackInfo](arkts-call-audiodevicecallbackinfo-i-sys.md) | Indicates the information of the audio device. |
| <!--DelRow-->[CallAttributeOptions](arkts-call-callattributeoptions-i-sys.md) | Indicates the options of call attribute. |
| <!--DelRow-->[CallEventOptions](arkts-call-calleventoptions-i-sys.md) | Indicates the options of call event. |
| <!--DelRow-->[CallRestrictionInfo](arkts-call-callrestrictioninfo-i-sys.md) | Indicates the information of call restriction. |
| <!--DelRow-->[CallSessionEvent](arkts-call-callsessionevent-i-sys.md) | Indicates the call session event of a video call. |
| <!--DelRow-->[CallTransferInfo](arkts-call-calltransferinfo-i-sys.md) | Indicates the information of call transfer. |
| <!--DelRow-->[CallTransferResult](arkts-call-calltransferresult-i-sys.md) | Indicates the result of call transfer. |
| <!--DelRow-->[CameraCapabilities](arkts-call-cameracapabilities-i-sys.md) | Indicates the camera capabilities. |
| <!--DelRow-->[DialCallOptions](arkts-call-dialcalloptions-i-sys.md) | Indicates the options for initiating a call. |
| [DialOptions](arkts-call-dialoptions-i.md) | Indicates the options of placing a call. |
| <!--DelRow-->[DisconnectedDetails](arkts-call-disconnecteddetails-i-sys.md) | Indicates the cause of a call disconnection. |
| [EmergencyNumberOptions](arkts-call-emergencynumberoptions-i.md) | Indicates the option for determining if a number is an emergency number for specified slot. |
| <!--DelRow-->[ImsCallModeInfo](arkts-call-imscallmodeinfo-i-sys.md) | Indicates the ims call mode info of a video call. |
| [MakeCallOptions](arkts-call-makecalloptions-i.md) | Indicates the options of make call. |
| <!--DelRow-->[MmiCodeResults](arkts-call-mmicoderesults-i-sys.md) | Indicates the MMI code result. |
| [NumberFormatOptions](arkts-call-numberformatoptions-i.md) | Indicates the option for number formatting. |
| <!--DelRow-->[NumberMarkInfo](arkts-call-numbermarkinfo-i-sys.md) | Indicates the mark information of the phone number. |
| <!--DelRow-->[PeerDimensionsDetail](arkts-call-peerdimensionsdetail-i-sys.md) | Indicates the peer dimension. |
| <!--DelRow-->[RejectMessageOptions](arkts-call-rejectmessageoptions-i-sys.md) | Indicates the options for call rejection message. |
| <!--DelRow-->[RttErrorInfo](arkts-call-rtterrorinfo-i-sys.md) | Indicates the info of the rtt error. |
| <!--DelRow-->[RttEventInfo](arkts-call-rtteventinfo-i-sys.md) | Indicates the info of the rtt event. |
| <!--DelRow-->[RttMessageInfo](arkts-call-rttmessageinfo-i-sys.md) | Indicates the info of the rtt message. |
| <!--DelRow-->[VoipCallAttribute](arkts-call-voipcallattribute-i-sys.md) | Indicates the voip call detail information. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[AudioDeviceType](arkts-call-audiodevicetype-e-sys.md) | Indicates the device type of the audio device. |
| <!--DelRow-->[CallAbilityEventId](arkts-call-callabilityeventid-e-sys.md) | Indicates the event ID of call ability. |
| <!--DelRow-->[CallRestrictionMode](arkts-call-callrestrictionmode-e-sys.md) | Indicates the mode of call restriction. |
| <!--DelRow-->[CallRestrictionType](arkts-call-callrestrictiontype-e-sys.md) | Indicates the type of call restriction. |
| <!--DelRow-->[CallSessionEventId](arkts-call-callsessioneventid-e-sys.md) | Indicates the type of video call event. |
| [CallState](arkts-call-callstate-e.md) | Indicates the states of call. |
| <!--DelRow-->[CallTransferSettingType](arkts-call-calltransfersettingtype-e-sys.md) | Indicates the type of call transfer setting. |
| <!--DelRow-->[CallTransferType](arkts-call-calltransfertype-e-sys.md) | Indicates the type of call transfer. |
| <!--DelRow-->[CallType](arkts-call-calltype-e-sys.md) | Indicates the type of call. |
| <!--DelRow-->[CallWaitingStatus](arkts-call-callwaitingstatus-e-sys.md) | Indicates the status of call waiting. |
| [CCallState](arkts-call-ccallstate-e.md) | Indicates the states of Carrier Call. |
| <!--DelRow-->[ConferenceState](arkts-call-conferencestate-e-sys.md) | Indicates the state of conference call. |
| <!--DelRow-->[DetailedCallState](arkts-call-detailedcallstate-e-sys.md) | Indicates the detailed state of call. |
| <!--DelRow-->[DeviceDirection](arkts-call-devicedirection-e-sys.md) | Indicates the type of device direction. |
| <!--DelRow-->[DialScene](arkts-call-dialscene-e-sys.md) | Indicates the scenarios of the call to be made. |
| <!--DelRow-->[DialType](arkts-call-dialtype-e-sys.md) | Indicates the types of the call to be made. |
| <!--DelRow-->[DisconnectedReason](arkts-call-disconnectedreason-e-sys.md) | Indicates the causes of call disconnection. |
| <!--DelRow-->[ImsCallMode](arkts-call-imscallmode-e-sys.md) | Indicates the mode of the ims call. |
| <!--DelRow-->[ImsRttMode](arkts-call-imsrttmode-e-sys.md) | Indicates the mode of the ims rtt. |
| <!--DelRow-->[MarkType](arkts-call-marktype-e-sys.md) | Indicates the type of the number mark. |
| <!--DelRow-->[MmiCodeResult](arkts-call-mmicoderesult-e-sys.md) | Indicates the MMI code result. |
| <!--DelRow-->[RestrictionStatus](arkts-call-restrictionstatus-e-sys.md) | Indicates the status of call restriction. |
| <!--DelRow-->[RttState](arkts-call-rttstate-e-sys.md) | Indicates the state of the rtt. |
| [TelCallState](arkts-call-telcallstate-e.md) | Indicates the states of telCall. |
| <!--DelRow-->[TransferStatus](arkts-call-transferstatus-e-sys.md) | Indicates the status of call transfer. |
| <!--DelRow-->[VideoRequestResultType](arkts-call-videorequestresulttype-e-sys.md) | Indicates the type of video request result. |
| <!--DelRow-->[VideoStateType](arkts-call-videostatetype-e-sys.md) | Indicates the type of video state. |
| <!--DelRow-->[VoNRState](arkts-call-vonrstate-e-sys.md) | Indicates the VoNR state. |
| <!--DelRow-->[XCallType](arkts-call-xcalltype-e-sys.md) | Indicates the type of the XCall. |

