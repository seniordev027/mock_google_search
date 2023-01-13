import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

import { recognition } from "./utins";
import { useSearchContext } from "context/context";
import {
  CustomCancelButton,
  CustomIconWrapper,
  CustomInner,
  CustomMicIcon,
  CustomMicroBorder,
  CustomModal,
} from "./VoiceSearchModalStyles";

export const VoiceSearchModal = () => {
  const { isModal, setIsModal } = useSearchContext();
  const navigate = useNavigate();

  const handleClose = () => {
    recognition.stop();
    setIsModal(false);
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
    if (isModal) {
      handleRecordVoice();
    }
  });

  return (
    <div>
      <CustomModal open={isModal} onClose={handleClose}>
        <CustomInner>
          <CustomCancelButton onClick={handleClose}>
            <CancelIcon fontSize="large" />
          </CustomCancelButton>

          <CustomMicroBorder />
          <CustomIconWrapper>
            <CustomMicIcon />
          </CustomIconWrapper>
        </CustomInner>
      </CustomModal>
    </div>
  );
};
