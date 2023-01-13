import { useEffect } from "react";
import { Box, IconButton, keyframes, Modal, styled } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import CancelIcon from "@mui/icons-material/Cancel";

import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../context/context";

const CustomModal = styled(Modal)({
  padding: "20px",
  background: "#ffffff95",
});

const CustomInner = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "600px",
  width: "92%",
  minHeight: "400px",
  padding: "24px",
  background: "#ffffff",
  border: "2px solid #000",
  borderRadius: "8px",
  boxShadow: "24px",
  "&:focus": {
    border: "none",
    outline: "none"
  },
});

const CustomCancelButton = styled(IconButton)({
  position: "absolute",
  top: "8px",
  right: "8px",
  cursor: "pointer"
})

const microBorderAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;

  }
  100% {
    opacity: 0;
  }
`;

const CustomMicroBorder = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "116px",
  height: "116px",
  border: "4px solid #EE4B2B",
  borderRadius: "50%",
  animation: `${microBorderAnimation} 1s ease infinite`,
});

const CustomIconWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  height: "100px",
  background: "#EE4B2B",
  borderRadius: "50%",
});

const CustomMicIcon = styled(MicIcon)({
  fill: "#fff",
  fontSize: "80px",
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

const VoiceSearchModal = () => {
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

export default VoiceSearchModal;
