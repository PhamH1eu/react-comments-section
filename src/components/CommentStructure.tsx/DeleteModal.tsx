import { useState, useContext } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { GlobalContext } from '../../context/Provider'
import React from 'react'

interface DeleteModalProps {
  comId: string
  parentId?: string
}

const DeleteModal = ({ comId, parentId }: DeleteModalProps) => {
  const [open, setOpen] = useState(false)
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  const globalStore: any = useContext(GlobalContext)

  return (
    <div>
      <div style={{ width: '100%' }} onClick={onOpenModal}>
        Xoá
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Bạn có chắc chắn không?</h2>
        <p>Hành động này sẽ không thể khôi phục lại</p>
        <div className='deleteBtns'>
          <button
            className='delete'
            onClick={async () => (
              await globalStore.onDelete(comId, parentId),
              globalStore.onDeleteAction &&
                (await globalStore.onDeleteAction({
                  comIdToDelete: comId,
                  parentOfDeleteId: parentId
                }))
            )}
          >
            Xoá
          </button>
          <button className='cancel' onClick={onCloseModal}>
            Huỷ
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default DeleteModal
