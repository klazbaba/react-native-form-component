import React, { ReactNode } from 'react';
import { TextInput, KeyboardTypeOptions, TextInputProps } from 'react-native';
type Validation = {
    status: boolean;
    message: string;
};
interface Props extends TextInputProps {
    textInputStyle?: object | object[];
    children?: ReactNode;
    underneathText?: string;
    underneathTextStyle?: object | object[];
    label?: string;
    labelStyle?: object | object[];
    isRequired?: boolean;
    value: string;
    customValidation?: () => Validation;
    asterik?: boolean;
    floatingLabel?: boolean;
    textArea?: boolean;
    showErrorIcon?: boolean;
    errorBorderColor?: string;
    showIcon?: JSX.Element;
    hideIcon?: JSX.Element;
    ref: React.RefObject<TextInput>;
}
declare const FormItem: React.ForwardRefExoticComponent<Pick<Props, "asterik" | "testID" | "label" | "children" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "numberOfLines" | "onPressIn" | "onPressOut" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "textInputStyle" | "underneathText" | "underneathTextStyle" | "labelStyle" | "isRequired" | "value" | "customValidation" | "floatingLabel" | "textArea" | "showErrorIcon" | "errorBorderColor" | "showIcon" | "hideIcon" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onBlur" | "onChange" | "onChangeText" | "onContentSizeChange" | "onEndEditing" | "onFocus" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onScroll" | "onKeyPress" | "placeholder" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "scrollEnabled" | "autoComplete" | "cursorColor" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus"> & React.RefAttributes<unknown>>;
export declare const containsError: (keyboardType: KeyboardTypeOptions | undefined, isRequired: boolean, value: string, extraValidation?: Validation) => {
    status: boolean;
    message: string;
};
export default FormItem;
