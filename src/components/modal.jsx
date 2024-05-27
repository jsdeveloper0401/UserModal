import { Modal } from "reactstrap"
const UserModal = ({open,toggle}) => {
  return (
      <Modal isOpen={open} toggle={toggle}>
        <h1>Add User</h1>
      </Modal>
  )
}

export default UserModal