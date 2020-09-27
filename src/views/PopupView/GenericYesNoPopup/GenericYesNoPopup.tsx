import React, {useEffect, useState} from 'react'
import './GenericYesNoPopup.scss'
import {TextButton} from "../../Common/TextButton/TextButton";
import {Checkbox} from "../../Common/Checkbox";
import {ContextManager} from "../../../logic/context/ContextManager";
import {ContextType} from "../../../data/enums/ContextType";

interface IProps {
    title: string;
    renderContent: () => any;
    acceptLabel?: string;
    onAccept?: () => any;
    skipAcceptButton?: boolean;
    disableAcceptButton?: boolean;
    rejectLabel?: string;
    onReject?: () => any;
    skipRejectButton?: boolean;
    disableRejectButton?: boolean;
    skipCheckbox?: boolean;
    onCheckbox?: (boolean) => any;
}

export const GenericYesNoPopup: React.FC<IProps> = (
    {
        title,
        renderContent,
        acceptLabel,
        onAccept,
        skipAcceptButton,
        disableAcceptButton,
        rejectLabel,
        onReject,
        skipRejectButton,
        disableRejectButton,
	skipCheckbox,
	onCheckbox
    }) => {
    
    const [status, setMountStatus] = useState(false);
    useEffect(() => {
        if (!status) {
            ContextManager.switchCtx(ContextType.POPUP);
            setMountStatus(true);
        }
    }, [status]);

    return (
        <div className="GenericYesNoPopup">
            <div className="Header">
                {title}
            </div>
            <div className="Content">
                {renderContent()}
            </div>
            <div className="Footer">
	    	{!skipCheckbox && <Checkbox
      		    label={"Public"}
      		    handleCheckboxChange={onCheckbox}
    		/>}
                {!skipAcceptButton && <TextButton
                    label={!!acceptLabel ? acceptLabel : "YES"}
                    onClick={onAccept}
                    externalClassName={"accept"}
                    isDisabled={disableAcceptButton}
                />}
                {!skipRejectButton && <TextButton
                    label={!!rejectLabel ? rejectLabel : "NO, THANKS"}
                    onClick={onReject}
                    externalClassName={"reject"}
                    isDisabled={disableRejectButton}
                />}
            </div>
        </div>
    )
};
