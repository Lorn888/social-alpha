import PropTypes from "prop-types";
import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm authForm bg-[rgba(255,255,255,0.64)] flex flex-col justify-center items-center gap-[2rem] p-[1rem] rounded-[1rem]">
        <h3>Your info</h3>
      </form>
    </Modal>
  );
}

ProfileModal.propTypes = {
  modalOpened: PropTypes.bool.isRequired,
  setModalOpened: PropTypes.func.isRequired,
};

export default ProfileModal;
