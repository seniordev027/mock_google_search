import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

import { recognition } from "./utins";
import { useSearchContext } from "context/searchContext";
import { ModalWindow } from "components/ModalWindow";
import {
  CustomCancelButton,
  CustomIconWrapper,
  CustomInner,
  CustomMicIcon,
  CustomMicroBorder,
} from "./VoiceRecordStyles";

export const VoiceModeWindow = () => {
  const { voiceMode, setVoiceMode } = useSearchContext();
  const navigate = useNavigate();

  const handleClose = () => {
    recognition.stop();
    setVoiceMode(false);
  };

  const handleRecordVoice = (e) => {
    recognition.start();
    recognition.onresult = (e) => {
      const recordedValue = e.results[0][0].transcript;

      if (recordedValue) {
        navigate(`/search?q=${recordedValue}`);
        handleClose();
      }
    };

    recognition.onend = () => {
      handleClose();
    };
  };

  useEffect(() => {
    if (voiceMode) {
      handleRecordVoice();
    }
  });

  return (
    <div>
      <ModalWindow open={voiceMode}>
        <CustomInner sx={{height: "400px"}}>
          <CustomCancelButton onClick={handleClose}>
            <CancelIcon fontSize="large" />
          </CustomCancelButton>

          <CustomMicroBorder />
          <CustomIconWrapper>
            <CustomMicIcon />
          </CustomIconWrapper>
        </CustomInner>
      </ModalWindow>
    </div>
  );
};
