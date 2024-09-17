import PropType from "prop-types";
import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#333",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DisplayModal = ({ open, handleClose, delSuccess }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ color: "#dee3e1" }}
          >
            {delSuccess ? "Successfully deleted user" : "403 error"}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

DisplayModal.propTypes = {
  open: PropType.bool,
  delSuccess: PropType.bool,
  handleClose: PropType.func,
};

export default DisplayModal;
