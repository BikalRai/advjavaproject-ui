import { Box, Modal, Typography } from "@mui/material";
import PropType from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#dee3e1",
  boxShadow: 24,
  p: 4,
};

const InfoModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            SUCCESSFUL
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 2, color: "#333" }}
          >
            You have successfully signed up to KickSpot
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

InfoModal.propTypes = {
  open: PropType.bool,
  handleClose: PropType.func,
};

export default InfoModal;
