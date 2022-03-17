import { ModalBody, Modal, ModalHeader } from 'carbon-components-react';
import React from 'react';
import { IFilteredArticle } from '../interfaces';

interface IModalProps {
  articles: Array<IFilteredArticle>;
  isModalOpen?: boolean;
  closeModal: () => void;
  activeModal: string;
}

const ModalC: React.FC<IModalProps> = ({
  isModalOpen,
  closeModal,
  articles,
  activeModal,
}) => {
  console.log('Modal: ', articles, activeModal);
  if (articles.length <= 0) return null;
  const content = articles.filter((article) => article.id === activeModal)[0];
  // console.log('content', content);
  // console.log('articlessss', articles);
  return (
    <div>
      <Modal
        open={isModalOpen}
        size="lg"
        onRequestClose={() => closeModal()}
        primaryButtonText="Edit me"
        // secondaryButtonText="Cancel"
        modalHeading={content?.title}
        // passiveModal
      >
        <ModalBody>
          <p className="bx--modal-content__text bx--modal-content__regular-content">
            {content?.content}
          </p>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalC;
